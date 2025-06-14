import React, { Suspense } from "react";
import { sanityFetch, SanityLive } from "~/sanity/lib/live";
import {
  PLAYLIST_BY_SLUG_QUERY,
  SINGLE_STARTUP_QUERY,
} from "~/sanity/lib/query";
import markdownit from "markdown-it";
import { notFound } from "next/navigation";
import {
  IStartupCard,
  StartupCard,
} from "~/components/startup-section/startup-card";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "~/utils/format-date";
import View from "~/components/views";
import { Skeleton } from "~/components/ui/skeleton";
import { client } from "~/sanity/lib/client";

export const experimental_ppr = true;

const md = markdownit();

const StartupPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  // Parallel fetching of post and editor's picks
  const [post, { select: editorPosts }] = await Promise.all([
    await client.fetch(SINGLE_STARTUP_QUERY, {
      id,
    }),
    await client.fetch(PLAYLIST_BY_SLUG_QUERY, {
      slug: "editor-s-pick",
    }),
  ]);

  if (!post) return notFound();

  const parsedContent = md.render(post.pitch || "");

  return (
    <>
      <section className="!min-h-[230px] pink_container">
        {post?._createdAt && (
          <p className="tag">{formatDate(post._createdAt)}</p>
        )}

        <h1 className="heading">{post.title}</h1>
        <p className="!max-w-5xl sub-heading">{post.description}</p>
      </section>

      <section className="section_container">
        {post.image && (
          <img
            src={post.image}
            alt="thumbnail"
            className="rounded-xl w-full h-auto"
          />
        )}

        <div className="space-y-5 mx-auto mt-10 max-w-4xl">
          <div className="flex-between gap-5">
            {post.author && (
              <Link
                href={`/user/${post.author?._id}`}
                className="flex items-center gap-2 mb-3"
              >
                {post.author.image && (
                  <Image
                    src={post.author.image}
                    alt={`${post.author.name || "Author"} avatar`}
                    width={64}
                    height={64}
                    className="drop-shadow-lg rounded-full"
                    unoptimized={true} // Added to ensure consistent rendering
                  />
                )}

                <div>
                  <p className="text-20-medium">{post.author.name}</p>
                  <p className="!text-black-300 text-16-medium">
                    @{post.author.username}
                  </p>
                </div>
              </Link>
            )}

            {post.category && <p className="category-tag">{post.category}</p>}
          </div>

          <h3 className="text-30-bold">Pitch Details</h3>
          {parsedContent
            ? (
              <article
                className="max-w-4xl font-work-sans break-all prose"
                dangerouslySetInnerHTML={{ __html: parsedContent }}
              />
            )
            : <p className="no-result">No details provided</p>}
        </div>

        <hr className="divider" />

        {editorPosts?.length > 0 && (
          <div className="mx-auto max-w-4xl">
            <p className="text-30-semibold">Editor Picks</p>

            <ul className="mt-7 card_grid-sm">
              {editorPosts.map((post: IStartupCard, i: number) => (
                <StartupCard key={i} post={post} />
              ))}
            </ul>
          </div>
        )}

        <Suspense fallback={<Skeleton className="view_skeleton" />}>
          <View id={id} />
        </Suspense>
      </section>
    </>
  );
};

export default StartupPage;

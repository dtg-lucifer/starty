import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { StartupData } from "~/data/mock-startup-data";
import { Author, Startup } from "~/sanity/types";

export interface IStartupCard extends Omit<Startup, "author"> {
  author?: Author;
}

export const StartupCard = ({ post }: { post: IStartupCard }) => {
  return (
    <div className="group">
      <div className="startup-card">
        {/* Author info */}
        <div className="flex items-center gap-2 mt-4">
          {post?.author?._id && post?.author?.image && (
            <Link href={`/author/${post.author._id}`}>
              <Image
                src={post.author.image}
                alt={post.author.name || "Author"}
                width={40}
                height={40}
                className="rounded-full"
                unoptimized={true} // Added to ensure consistent rendering
              />
            </Link>
          )}

          {post?.author?._id && (
            <Link href={`/author/${post.author._id}`}>
              <p className="font-medium text-sm">
                {post?.author?.name || "Author"}
              </p>
            </Link>
          )}
        </div>

        <Link href={`/startup/${post._id}`} className="startup-card_link">
          {/* Title */}
          <h2 className="mt-3 font-bold text-xl">{post.title}</h2>

          {/* Description */}
          <p className="startup-card_desc">{post.description}</p>

          {/* Image */}
          {post.image && (
            <Image
              src={post.image}
              alt={post.title || "Startup"}
              width={300}
              height={150}
              className="startup-card_img"
              unoptimized={true} // Added to ensure consistent rendering
            />
          )}

          {/* Footer with slug and view count */}
          <div className="flex justify-between items-center mt-4">
            {post?.category && <p className="category-tag">{post.category}</p>}
            <div className="flex items-center gap-2">
              <Eye />
              <span>{post?.views || 0}</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

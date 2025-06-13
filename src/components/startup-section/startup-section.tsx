import React from "react";
import { IStartupCard, StartupCard } from "./startup-card";
import { sanityFetch, SanityLive } from "~/sanity/lib/live";
import { STARTUP_QUERY } from "~/sanity/lib/query";

export const StartupSection = async ({ query }: { query?: string }) => {
  const params = { search: query || null };
  const { data: posts } = await sanityFetch({
    query: STARTUP_QUERY,
    params,
  });

  return (
    <React.Fragment>
      <section className="inner-wrapper">
        {query
          ? (
            <p className="mt-10 mb-4 font-semibold text-2xl text-center">
              Search results for <strong>{query}</strong>
            </p>
          )
          : (
            <p className="mt-10 mb-4 font-semibold text-2xl text-center">
              Explore Startups
            </p>
          )}

        <div className="card_grid">
          {posts.map((p: IStartupCard) => <StartupCard post={p} key={p._id} />)}
        </div>
      </section>
      <SanityLive /> {/* @NOTE IMPORTANT FOR LIVE CHANGES */}
    </React.Fragment>
  );
};

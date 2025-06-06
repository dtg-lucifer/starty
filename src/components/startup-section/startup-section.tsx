import {
  mockStartupData,
  StartupData,
  useData,
} from "~/data/mock-startup-data";
import { StartupCard } from "./startup-card";
import { client } from "~/sanity/lib/client";
import { STARTUP_QUERY } from "~/sanity/lib/query";

export const StartupSection = async ({ query }: { query?: string }) => {
  const posts = await client.fetch<Array<StartupData>>(STARTUP_QUERY);
  return (
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
        {posts.map((p: StartupData) => <StartupCard post={p} key={p._id} />)}
      </div>
    </section>
  );
};

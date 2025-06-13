import Ping from "~/components/ping";
import { STARTUP_VIEWS_QUERY } from "~/sanity/lib/query";
import { writeClient } from "~/sanity/lib/write-client";
import { after } from "next/server";
import { client } from "~/sanity/lib/client";

const View = async ({ id }: { id: string }) => {
  const { views: totalViews } = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUP_VIEWS_QUERY, { id });

  after(
    async () =>
      await writeClient
        .patch(id)
        .set({ views: totalViews + 1 })
        .commit(),
  );

  return (
    <div className="view-container">
      <div className="-top-2 -right-2 absolute">
        <Ping />
      </div>

      <p className="view-text">
        <span className="font-black">Views: {totalViews}</span>
      </p>
    </div>
  );
};
export default View;

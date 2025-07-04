import { auth } from "~/auth";
import { redirect } from "next/navigation";
import StartupForm from "~/components/startup-section/startup-form";

const Page = async () => {
  const session = await auth();

  if (!session) redirect("/");

  return (
    <>
      <section className="!min-h-[230px] pink_container">
        <h1 className="heading">Submit Your Startup</h1>
      </section>

      <StartupForm />
    </>
  );
};

export default Page;

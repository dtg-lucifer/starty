import { Suspense } from "react";
import HeroSection from "~/components/hero-section/hero";
import { StartupSection } from "~/components/startup-section/startup-section";
import Loading from "./loading";

export default async function Home(
  { searchParams }: { searchParams: Promise<{ query?: string }> },
) {
  const query = (await searchParams).query;
  return (
    <main>
      <HeroSection query={query} />
      <Suspense fallback={<Loading />}>
        <StartupSection query={query} />
      </Suspense>
    </main>
  );
}

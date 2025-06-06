import { lazy, Suspense } from "react";
import HeroSection from "~/components/hero-section/hero";
import Loading from "./loading";

const StartupSection = lazy(async () => {
  const { StartupSection } = await import(
    "~/components/startup-section/startup-section"
  );
  return { default: StartupSection };
});

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

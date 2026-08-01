import { EverythingYouNeed } from "@/components/everything-you-need";
import { Hero, HeroPagination } from "@/components/hero";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <SiteHeader />
      <Hero />
      <HeroPagination />
      <EverythingYouNeed />
    </main>
  );
}

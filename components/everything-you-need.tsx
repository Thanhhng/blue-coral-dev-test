import { Badge } from "@/components/ui/badge";
import { SolutionsShowcase } from "@/components/solutions-showcase";

export function EverythingYouNeed() {
  return (
    <section className="flex w-full flex-col items-center gap-8 bg-white px-5 py-15 lg:gap-15 lg:px-[86px] lg:py-30">
      <div className="flex flex-col items-center gap-4 lg:gap-6">
        <div className="flex flex-col items-center gap-2 lg:gap-4">
          <Badge className="h-6 rounded-[24px] border-0 bg-brand px-2 py-1 text-[10px] leading-4 font-extrabold text-ink uppercase lg:h-7 lg:px-3 lg:text-xs lg:leading-6">
            long subtitle
          </Badge>

          <h2 className="text-center text-[32px] leading-10 font-extrabold text-ink lg:max-w-[1176px] lg:text-[56px] lg:leading-[68px]">
            Everything You Need
          </h2>
        </div>

        <p className="text-center text-sm leading-5 text-ink lg:max-w-[860px] lg:text-base lg:leading-7">
          Improve speed of service, boost kitchen efficiency, and drive repeat
          business with a restaurant management solution that offers everything
          you need to maximize profits and offer an unparalleled guest
          experience – all in one place.
        </p>
      </div>

      <SolutionsShowcase />
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { CtaArrow } from "@/components/icons";
import { Logo } from "@/components/logo";

export function Hero() {
  return (
    <section className="w-full bg-white px-5 md:px-8 xl:px-[86px]">
      <div className="relative overflow-hidden rounded-2xl xl:h-[clamp(560px,43vw,650px)] xl:rounded-3xl xl:bg-hero">
        <div className="relative h-60 w-full sm:h-80 md:h-[400px] lg:h-[460px] xl:absolute xl:inset-0 xl:h-full">
          
          <Image
            src="/img/hero-pos-bg.webp"
            alt=""
            aria-hidden
            width={3088}
            height={2058}
            sizes="1544px"
            className="absolute hidden max-w-none object-cover xl:block"
            style={{
              width: "115.22%",
              height: "158.38%",
              left: "-0.52%",
              top: "-2.11%",
            }}
          />
          <Image
            src="/img/hero-composite.webp"
            alt="Giao diện Qtable trên thiết bị bán hàng"
            fill
            loading="eager"
            fetchPriority="high"
            sizes="(min-width: 1280px) calc(100vw - 172px), (min-width: 768px) calc(100vw - 64px), calc(100vw - 40px)"
            className="object-cover object-right xl:object-center"
          />
        </div>

        <div className="relative bg-bg05 px-6 pt-4 pb-6 md:px-10 md:py-8 lg:px-12 xl:flex xl:h-full xl:items-center xl:bg-transparent xl:px-[86px] xl:py-20">
          <div className="flex flex-col gap-4 md:max-w-xl xl:max-w-[25rem] xl:gap-6">
            <div className="flex flex-col gap-3">
              <span className="inline-flex w-fit items-center rounded-[80px] border border-white bg-white/50 py-1.5 pr-3 pl-1.5 shadow-[0px_2px_8px_-2px_rgba(0,0,0,0.1),inset_2px_2px_2px_0px_rgba(0,0,0,0.04)] xl:py-2 xl:pl-2">
                <Logo className="h-5 w-[58px] xl:h-7 xl:w-[81px]" alt="" />
              </span>

              <h1 className="text-[32px] leading-10 font-extrabold text-ink md:text-[44px] md:leading-[52px] xl:max-w-[824px] xl:text-[56px] xl:leading-[68px]">
                <span className="block">Quản lý dễ dàng,</span>
                <span className="block">bán hàng hiệu quả</span>
              </h1>
            </div>

            <p className="text-sm leading-5 text-ink md:max-w-[40rem] md:text-base md:leading-7 xl:max-w-[619px]">
              Chào mừng bạn đến với Xứ sở thần tiên. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>

            <Button
              asChild
              variant="ink"
              size="pill-sm"
              className="w-fit xl:h-15 xl:gap-2 xl:px-7 xl:text-xl xl:leading-7"
            >
              <Link href="/dat-lich">
                Đặt lịch tư vấn
                <span className="xl:hidden">
                  <CtaArrow boxSize={24} />
                </span>
                <span className="hidden xl:inline-flex">
                  <CtaArrow boxSize={32} />
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}


export function HeroPagination({ count = 4 }: { count?: number }) {
  return (
    <div
      className="flex w-full items-center justify-center gap-2 bg-white py-5"
      role="presentation"
    >
      {Array.from({ length: count }, (_, i) =>
        i === 0 ? (
          <span key={i} className="h-1 w-15 bg-ink" />
        ) : (
          <span key={i} className="h-0.5 w-6 bg-dot" />
        ),
      )}
    </div>
  );
}

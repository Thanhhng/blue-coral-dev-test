"use client";

import * as React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CtaArrow, MenuIcon } from "@/components/icons";
import { Logo } from "@/components/logo";

const NAV_ITEMS = [
  { label: "Giải pháp", href: "/giai-phap", hasMenu: true },
  { label: "Thiết bị", href: "/thiet-bi", hasMenu: false },
  { label: "Bảng giá", href: "/bang-gia", hasMenu: false },
  { label: "Hỗ trợ", href: "/ho-tro", hasMenu: false },
] as const;

const MEGA_MENU_LINKS = [
  { label: "Lorem ipsum dolor", href: "#", withArrow: false },
  { label: "Sed do eiusmod tempor", href: "#", withArrow: true },
  { label: "Lorem ipsum dolor", href: "#", withArrow: false },
  { label: "Sed do eiusmod tempor", href: "#", withArrow: false },
] as const;

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <header className="relative z-50 w-full bg-white">
      <div className="flex w-full items-center justify-between px-5 py-4 px-8 lg:py-6 md:px-[86px]">
        <Link
          className="flex shrink-0 items-center"
          href="/"
          aria-label="Qtable — trang chủ"
        >
          <Logo className="h-8 w-[93px] lg:h-12 lg:w-[139px]" />
        </Link>

        <div className="hidden items-center gap-4 lg:flex">
          <NavigationMenu viewport={false}>
            <NavigationMenuList className="gap-1">
              {NAV_ITEMS.map((item) =>
                item.hasMenu ? (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuTrigger className="h-auto rounded-[80px] px-3 py-2 text-base leading-6 font-semibold text-ink hover:bg-ink/5 data-open:bg-ink/5">
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-[280px] p-6">
                        {MEGA_MENU_LINKS.map((link, i) => (
                          <li key={i} className={i > 0 ? "mt-4" : undefined}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={link.href}
                                className="flex h-6 items-center justify-between text-base leading-6 text-ink"
                              >
                                {link.label}
                                {link.withArrow && <CtaArrow />}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className="flex items-center rounded-[80px] px-3 py-2 text-base leading-6 font-semibold text-ink hover:bg-ink/5"
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ),
              )}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-4">
            <Button asChild variant="hairline" size="pill-md">
              <Link href="/dang-nhap">Đăng nhập</Link>
            </Button>
            <Button asChild variant="brand" size="pill-md">
              <Link href="/dung-thu">
                Sử dụng miễn phí
                <CtaArrow />
              </Link>
            </Button>
          </div>
        </div>

        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              aria-label="Mở menu"
              className="grid size-7 place-items-center text-ink lg:hidden"
            >
              <MenuIcon className="size-4" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="min-w-full gap-0 border-0 bg-white p-0 sm:max-w-sm"
          >
            <SheetTitle className="sr-only">Menu</SheetTitle>

            <div
              aria-hidden
              className="pointer-events-none absolute -top-44 -left-1 size-86 rounded-full bg-brand/25 blur-3xl"
            />

            <div className="relative flex h-16 items-center px-5">
              <Logo className="h-8 w-[93px]" />
            </div>

            <nav className="relative flex flex-col gap-1 px-5 pt-4">
              {NAV_ITEMS.map((item) => (
                <SheetClose asChild key={item.label}>
                  <Link
                    href={item.href}
                    className="rounded-[80px] px-3 py-3 text-base leading-6 font-semibold text-ink hover:bg-ink/5"
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>

            <div className="relative mt-6 flex flex-col gap-3 px-5">
              <Button asChild variant="hairline" size="pill-md">
                <Link href="/dang-nhap">Đăng nhập</Link>
              </Button>
              <Button asChild variant="brand" size="pill-md">
                <Link href="/dung-thu">
                  Sử dụng miễn phí
                  <CtaArrow />
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

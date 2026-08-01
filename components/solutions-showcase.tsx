"use client";

import * as React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowDownIcon,
  ChairIcon,
  FoodIcon,
  NotchLeftIcon,
  NotchRightIcon,
  ShoppingIcon,
} from "@/components/icons";

/** node 1:518 / 1:523 / 1:529 — 3 tab ngành hàng. */
const SEGMENTS = [
  { value: "an-uong", label: "Ăn uống", Icon: FoodIcon, isNew: false },
  { value: "ban-le", label: "Bán lẻ", Icon: ShoppingIcon, isNew: true },
  { value: "dich-vu", label: "Dịch vụ", Icon: ChairIcon, isNew: true },
] as const;

/** node 1:538 … 1:565 — 6 loại hình. */
const BUSINESS_TYPES = [
  { value: "quan-ca-phe", title: "Quán cà phê" },
  { value: "quan-an", title: "Quán ăn / nhà hàng" },
  { value: "quan-bar", title: "Quán bar / lounge / pub" },
  { value: "quan-an-di-dong", title: "Quán ăn di động" },
  { value: "tiem-tra-sua", title: "Tiệm trà sữa" },
  { value: "tiem-banh", title: "Tiệm bánh" },
] as const;

/**
 * Trong Figma cả 6 mục dùng CHUNG đúng một đoạn mô tả — 5 mục sau bị đặt
 * `hidden`, không phải nội dung riêng. Giữ nguyên thay vì tự nghĩ ra 5 đoạn mới.
 */
const SHARED_DESCRIPTION =
  "Qtable POS giúp order nhanh, chọn size/topping, in phiếu bar và quản lý mang đi/ngồi lại hiệu quả.";

export function SolutionsShowcase() {
  const [segment, setSegment] = React.useState<string>(SEGMENTS[0].value);
  const [businessType, setBusinessType] = React.useState<string>(
    BUSINESS_TYPES[0].value,
  );

  const activeIndex = SEGMENTS.findIndex((s) => s.value === segment);
  const cycle = (delta: number) =>
    setSegment(
      SEGMENTS[(activeIndex + delta + SEGMENTS.length) % SEGMENTS.length].value,
    );

  const activeType =
    BUSINESS_TYPES.find((t) => t.value === businessType) ?? BUSINESS_TYPES[0];

  return (
    <div className="relative w-full max-w-[1340px] overflow-hidden rounded-[24px] bg-cream lg:rounded-[40px]">
      <img
        src="/img/pattern-lines.svg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 size-full object-cover opacity-20"
      />

      <Tabs value={segment} onValueChange={setSegment}>
        <div className="hidden justify-center lg:flex">
          <NotchLeftIcon className="size-6 shrink-0 -scale-y-100 rotate-266 text-white" />
          <TabsList className=" items-start h-[4rem] gap-0 rounded-none rounded-br-[32px] rounded-bl-[32px] bg-white p-0 px-3 pb-3">
            {SEGMENTS.map(({ value, label, Icon, isNew }) => (
              <TabsTrigger
                key={value}
                value={value}
                className="min-h-12 w-50 gap-2 rounded-[24px] px-6 text-base leading-6 font-semibold text-ink data-[state=active]:bg-ink data-[state=active]:text-white"
              >
                <Icon className="size-4 shrink-0" />
                {label}
                {isNew && <NewBadge />}
              </TabsTrigger>
            ))}
          </TabsList>
          <NotchRightIcon className="size-6 shrink-0 text-white" />
        </div>

        <div className="flex justify-center lg:hidden">
          <NotchLeftIcon className="size-6 shrink-0 -scale-y-100 rotate-277 text-white" />
          <div className="flex items-start rounded-br-[32px] rounded-bl-[32px] bg-white px-2.5 pb-2.5">
            <div className="flex h-9 w-50 items-center justify-between rounded-[24px] bg-ink px-3 text-white">
              <button
                type="button"
                aria-label="Ngành hàng trước"
                onClick={() => cycle(-1)}
                className="grid size-4 place-items-center"
              >
                <ArrowDownIcon className="size-4 rotate-90" />
              </button>
              <span className="flex items-center gap-[5px] text-sm leading-5 font-semibold">
                {React.createElement(SEGMENTS[activeIndex].Icon, {
                  className: "size-4 shrink-0",
                })}
                {SEGMENTS[activeIndex].label}
                {SEGMENTS[activeIndex].isNew && <NewBadge />}
              </span>
              <button
                type="button"
                aria-label="Ngành hàng kế tiếp"
                onClick={() => cycle(1)}
                className="grid size-4 place-items-center"
              >
                <ArrowDownIcon className="size-4 -rotate-90" />
              </button>
            </div>
          </div>
          <NotchRightIcon className="size-6 shrink-0 text-white" />
        </div>
      </Tabs>

      <div className="relative flex flex-col gap-4 px-6 pt-4 pb-6 lg:mt-10 lg:flex-row lg:items-center lg:justify-between lg:gap-0 lg:px-[60px] lg:pt-0 lg:pb-[60px]">
        <div className="lg:hidden">
          <Select value={businessType} onValueChange={setBusinessType}>
            <SelectTrigger className="h-10 w-full rounded-[60px] border-0 bg-white px-3 text-sm leading-5 text-ink shadow-none">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {BUSINESS_TYPES.map((t) => (
                <SelectItem key={t.value} value={t.value}>
                  {t.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-1 lg:hidden">
          <h3 className="text-2xl leading-[1.4] font-bold text-ink">
            {activeType.title}
          </h3>
          <p className="text-sm leading-5 text-ink">{SHARED_DESCRIPTION}</p>
        </div>

        <Accordion
          type="single"
          value={businessType}
          onValueChange={(v) => v && setBusinessType(v)}
          className="hidden h-[600px] w-[540px] gap-10 border-l border-hairline lg:flex"
        >
          {BUSINESS_TYPES.map((type) => {
            const isOpen = type.value === businessType;
            return (
              <AccordionItem
                key={type.value}
                value={type.value}
                className={`relative not-last:border-b-0 pl-10 ${isOpen ? "flex flex-1 flex-col justify-center py-5" : ""}`}
              >
                {isOpen && (
                  <>
                    <span
                      aria-hidden
                      className="absolute top-[73px] -left-[1.5px] h-30 w-[3px] rounded-[80px] bg-track"
                    />
                    <span
                      aria-hidden
                      className="absolute top-[73px] -left-[1.5px] h-[50px] w-[3px] rounded-[80px] bg-thumb"
                    />
                  </>
                )}
                <AccordionTrigger
                  className={`py-0 hover:no-underline **:data-[slot=accordion-trigger-icon]:hidden ${
                    isOpen
                      ? "pt-5 text-4xl leading-[1.4] font-bold text-ink"
                      : "text-xl leading-[1.4] font-bold text-ink"
                  }`}
                >
                  {type.title}
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-5 text-base leading-7 text-ink">
                  {SHARED_DESCRIPTION}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>

        <div className="aspect-square w-full rounded-2xl bg-white lg:size-[600px] lg:rounded-3xl" />
      </div>
    </div>
  );
}

function NewBadge() {
  return (
    <Badge className="h-4 rounded-[24px] border-0 bg-brand px-2 text-[10px] leading-4 font-extrabold text-ink uppercase lg:h-6 lg:px-3 lg:text-xs">
      New
    </Badge>
  );
}

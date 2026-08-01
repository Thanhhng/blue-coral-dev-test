import { cn } from "@/lib/utils";

export function Logo({
  className,
  alt = "Qtable",
}: {
  className?: string;
  alt?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand/qtable-logo.svg"
      alt={alt}
      width={140}
      height={48}
      className={cn("block h-12 w-auto", className)}
    />
  );
}


type IconProps = React.SVGProps<SVGSVGElement>;

export function FoodIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden focusable="false" {...props}>
      <path
        d="M12.04 15.3333H13.1467C13.7067 15.3333 14.1667 14.9 14.2334 14.3533L15.3334 3.36663H12V0.666626H10.6867V3.36663H7.37335L7.57335 4.92663C8.71335 5.23996 9.78002 5.80663 10.42 6.43329C11.38 7.37996 12.04 8.35996 12.04 9.95996V15.3333ZM0.666687 14.6666V14H10.6867V14.6666C10.6867 15.0266 10.3867 15.3333 10 15.3333H1.33335C0.966687 15.3333 0.666687 15.0266 0.666687 14.6666ZM10.6867 9.99996C10.6867 4.66663 0.666687 4.66663 0.666687 9.99996H10.6867ZM0.666687 11.3333H10.6667V12.6666H0.666687V11.3333Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ShoppingIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden focusable="false" {...props}>
      <path
        d="M7.99969 8.6676C7.11564 8.6676 6.26779 8.31641 5.64267 7.69129C5.01755 7.06617 4.66636 6.21832 4.66636 5.33427H5.99969C5.99969 5.8647 6.21041 6.37341 6.58548 6.74848C6.96055 7.12356 7.46926 7.33427 7.99969 7.33427C8.53013 7.33427 9.03884 7.12356 9.41391 6.74848C9.78898 6.37341 9.99969 5.8647 9.99969 5.33427H11.333C11.333 6.21832 10.9818 7.06617 10.3567 7.69129C9.7316 8.31641 8.88375 8.6676 7.99969 8.6676ZM7.99969 2.00094C8.53013 2.00094 9.03884 2.21165 9.41391 2.58672C9.78898 2.9618 9.99969 3.4705 9.99969 4.00094H5.99969C5.99969 3.4705 6.21041 2.9618 6.58548 2.58672C6.96055 2.21165 7.46926 2.00094 7.99969 2.00094ZM12.6664 4.00094H11.333C11.333 3.5632 11.2468 3.12974 11.0793 2.72532C10.9118 2.32091 10.6662 1.95344 10.3567 1.64391C10.0472 1.33438 9.67972 1.08885 9.27531 0.921337C8.87089 0.753822 8.43743 0.667603 7.99969 0.667603C7.11564 0.667603 6.26779 1.01879 5.64267 1.64391C5.01755 2.26903 4.66636 3.11688 4.66636 4.00094H3.33303C2.59303 4.00094 1.99969 4.59427 1.99969 5.33427V13.3343C1.99969 13.6879 2.14017 14.027 2.39022 14.2771C2.64027 14.5271 2.97941 14.6676 3.33303 14.6676H12.6664C13.02 14.6676 13.3591 14.5271 13.6092 14.2771C13.8592 14.027 13.9997 13.6879 13.9997 13.3343V5.33427C13.9997 4.59427 13.3997 4.00094 12.6664 4.00094Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ChairIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden focusable="false" {...props}>
      <path
        d="M15.38 12.128C14.8009 14.2731 14.2021 14.9245 12.8466 14.9245H5.16758C4.19371 14.9245 3.54231 14.3981 3.29884 13.4111L0.824679 3.36982C0.423315 1.73136 1.23924 0.994385 2.18678 0.994385C3.4436 0.994385 4.81226 2.33673 4.04239 4.50818L3.85159 3.69882C5.83218 4.73848 6.73368 7.1468 6.37173 10.0881L6.13489 9.75914C7.49036 9.4762 9.26045 9.30511 10.9647 9.30511C14.4851 9.30511 15.9195 10.1605 15.38 12.128Z"
        fill="currentColor"
        fillOpacity="0.85"
      />
    </svg>
  );
}

export function ArrowDownIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden focusable="false" {...props}>
      <path
        d="M13.28 5.96667L8.9333 10.3133C8.41997 10.8267 7.57997 10.8267 7.06664 10.3133L2.71997 5.96667"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 12.9996 11.414"
      fill="none"
      aria-hidden
      focusable="false"
      {...props}
    >
      <path
        d="M12.414 4.293L8.121 0L6.707 1.414L10 4.707H0V6.707H10L6.707 10L8.121 11.414L12.414 7.121C12.7889 6.74594 12.9996 6.23733 12.9996 5.707C12.9996 5.17667 12.7889 4.66806 12.414 4.293Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function CtaArrow({ boxSize = 24 }: { boxSize?: 24 | 32 }) {
  const w = boxSize * 0.5417; 
  const h = boxSize * 0.4756; 
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center"
      style={{ width: boxSize, height: boxSize }}
    >
      <ArrowRightIcon style={{ width: w, height: h }} />
    </span>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden focusable="false" {...props}>
      <path d="M16 2.33333H0V4.33333H16V2.33333Z" fill="currentColor" />
      <path d="M16 7H0V9H16V7Z" fill="currentColor" />
      <path d="M16 11.6667H0V13.6667H16V11.6667Z" fill="currentColor" />
    </svg>
  );
}

export function NotchLeftIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden focusable="false" {...props}>
      <path d="M24 24C24 10.1689 12.7246 0 0 0H24V24Z" fill="currentColor" />
    </svg>
  );
}

export function NotchRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden focusable="false" {...props}>
      <path d="M0 24C0 10.1689 11.2754 0 24 0H0V24Z" fill="currentColor" />
    </svg>
  );
}

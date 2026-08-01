import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Qtable — Quản lý dễ dàng, bán hàng hiệu quả",
  description:
    "Phần mềm quản lý bán hàng cho quán cà phê, nhà hàng, bán lẻ và dịch vụ. Order nhanh, in phiếu bar, quản lý mang đi và ngồi lại trong một nền tảng.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

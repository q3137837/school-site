import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "小新老师和同学们的创意基地",
  description: "展示学生的网页游戏和软件作品",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased overflow-x-hidden`}
      >
        <div className="relative min-h-dvh bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(900px_circle_at_20%_-10%,rgba(59,130,246,0.22),transparent_55%),radial-gradient(900px_circle_at_85%_0%,rgba(168,85,247,0.18),transparent_55%)]"
          />
          <div className="relative">{children}</div>
        </div>
      </body>
    </html>
  );
}

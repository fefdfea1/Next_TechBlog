import type { Metadata } from "next";

import { Nanum_Gothic, Indie_Flower } from "next/font/google";
import "@/public/css/global.css";

import path from "path";
import { sync } from "glob";

const BASE_PATH = "/app/posts";
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

export const getPostPaths = (category?: string) => {
  const folder = category || "**";
  const paths: string[] = sync(`${POSTS_PATH}/${folder}/**/*.mdx`);
  return paths;
};

const Gothic = Nanum_Gothic({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

export const Indie = Indie_Flower({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--indie-font",
});

export const metadata: Metadata = {
  title: "fefdfea's Develop",
  description: "fefdfea의 기술 블로그입니다",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={Gothic.className}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Nanum_Gothic, Indie_Flower } from "next/font/google";
import "@/public/css/global.css";
import { css } from "@/styled-system/css";
import { Suspense } from "react";
import Loading from "@/app/loading";
import GlobalHover from "@/app/components/globalHover/GlobalHover";

const Gothic = Nanum_Gothic({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const Indie = Indie_Flower({
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
      <body className={`${Indie.variable} ${Gothic.className} ${Body}`}>
        <Suspense fallback={<Loading />}>
          <GlobalHover>{children}</GlobalHover>
        </Suspense>
      </body>
    </html>
  );
}

const Body = css({
  backgroundColor: "MainBg",
});

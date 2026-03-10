import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "(주)시큐이데아 | 스마트 출입통제 솔루션 전문기업",
  description: "미래형 출입통제시스템, 스마트 출입통제 솔루션 전문기업 시큐이데아입니다. VisitOne, SchoolGuardPro, CareGuardPro 등 다양한 출입관리 솔루션을 제공합니다.",
  keywords: "출입통제시스템, 시큐이데아, 출입승인용 키오스크, VisitOne, SchoolGuardPro, CareGuardPro, 메디패스",
  openGraph: {
    title: "(주)시큐이데아 | 스마트 출입통제 솔루션 전문기업",
    description: "미래형 출입통제시스템, 스마트 출입통제 솔루션 전문기업 시큐이데아입니다.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

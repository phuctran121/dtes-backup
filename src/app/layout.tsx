import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
// import { Noto_Sans_KR } from "next/font/google";
// import localFont from "next/font/local";
// import { Geist, Geist_Mono } from "next/font/google";
// import localFont from "next/font/local";

// const notoSansKr = Noto_Sans_KR({
//   subsets: ["latin"],
//   weight: ["100", "300", "400", "500", "700", "900"],
//   variable: "--font-noto-sans-kr",
//   display: "swap",
//   // fallback: ["system-ui", "sans-serif"],
//   // preload: true,
// });

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// const pretendard = localFont({
//   src: [
//     {
//       path: "../fonts/PretendardVariable.woff2",
//       style: "normal",
//       weight: "45 920",
//     },
//   ],
//   variable: "--font-pretendard",
//   display: "swap",
//   fallback: ["system-ui", "sans-serif"],
//   preload: true,
// });
export const metadata: Metadata = {
  title: "DTES",
  description:
    "DTES는 건축 설계 및 시공 전, 실시간 에너지 시뮬레이션을 통해 에너지 낭비를 줄이고 성능을 최적화할 수 있게 돕습니다.",
  keywords: ["디지털 트윈", "에너지 시뮬레이션", "건축 설계", "에너지 효율"],
  openGraph: {
    title: "DTES - Design To Energy Saving",
    description: "건축 전에, 성능을 예측하세요",
    // images: ["/assets/home/DTEs.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        // className={`${pretendard.variable} antialiased`}
        className={`antialiased font-sans`}
      >
        <div className="relative z-10">
          <Navigation />
          <div className="min-h-screen bg-transparent">
            <main className="mx-auto">{children}</main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

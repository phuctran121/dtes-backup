import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import localFont from "next/font/local";

const pretendard = localFont({
  src: [
    {
      path: "../fonts/PretendardVariable.woff2",
      style: "normal",
      weight: "45 920",
    },
  ],
  variable: "--font-pretendard",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
  preload: true,
});

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
    <html
      lang="kr"
      className={`${pretendard.variable}`}
      suppressHydrationWarning
    >
      <body
        suppressHydrationWarning
        className={`${pretendard.className} antialiased`}
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

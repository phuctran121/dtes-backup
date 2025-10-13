import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
// import localFont from "next/font/local";
import { pretendardFont } from "@croco/utils-next-font-pretendard";

// const roboto = Roboto({
//   subsets: ["latin"],
//   weight: ["100", "300", "400", "500", "700", "900"],
//   variable: "--font-roboto",
//   fallback: ["system-ui", "arial"],
// });
export const metadata: Metadata = {
  title: "DTES - Design To Energy Saving",
  description:
    "DTES는 건축 설계 및 시공 전, 실시간 에너지 시뮬레이션을 통해 에너지 낭비를 줄이고 성능을 최적화할 수 있게 돕습니다.",
  keywords: ["디지털 트윈", "에너지 시뮬레이션", "건축 설계", "에너지 효율"],
  authors: [{ name: "DTES" }],
  creator: "DTES",
  publisher: "DTES",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // metadataBase: new URL("https://dtes.kr"),
  // openGraph: {
  //   title: "DTES - Design To Energy Saving",
  //   description: "건축 전에, 성능을 예측하세요",
  //   type: "website",
  //   locale: "ko_KR",
  //   siteName: "DTES",
  //   // images: ["/assets/home/DTEs.jpg"],
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "DTES - Design To Energy Saving",
  //   description: "건축 전에, 성능을 예측하세요",
  // },
  // robots: {
  //   index: true,
  //   follow: true,
  //   googleBot: {
  //     index: true,
  //     follow: true,
  //     "max-video-preview": -1,
  //     "max-image-preview": "large",
  //     "max-snippet": -1,
  //   },
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr" className={pretendardFont.className}>
      <body className="antialiased">
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

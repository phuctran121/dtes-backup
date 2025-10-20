import Image from "next/image";
import HeroSection from "@/components/home/HeroSection";
import dynamic from "next/dynamic";

import {
  whyCardsData,
  iscCardsData,
  packagesCardsData,
  whyBoxesData,
} from "@/constants/homeData";

// Dynamic imports for below-the-fold sections
const WhyDTESSection = dynamic(
  () => import("@/components/home/WhyDTESSection")
);
const WhySection = dynamic(() => import("@/components/home/WhySection"));
const InternationalStandardsSection = dynamic(
  () => import("@/components/home/InternationalStandardsSection")
);
const SolutionsSection = dynamic(
  () => import("@/components/home/SolutionsSection")
);

export default function HomePage() {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-top bg-no-repeat"
      style={{
        backgroundImage: "url('/assets/home/landing-bg.webp')",
      }}
    >
      <div className="relative z-10 flex flex-col">
        <HeroSection />
        <WhyDTESSection data={whyBoxesData} />
        <WhySection data={whyCardsData} />
        <InternationalStandardsSection data={iscCardsData} />
        <SolutionsSection data={packagesCardsData} />
      </div>
    </div>
  );
}

import Image from "next/image";
import dynamic from "next/dynamic";

import HeroSection from "@/components/home/HeroSection";
import WhySection from "@/components/home/WhySection";
import InternationalStandardsSection from "@/components/home/InternationalStandardsSection";
import SolutionPackagesSection from "@/components/home/SolutionPackagesSection";
const WhyDTESSection = dynamic(() =>
  import("@/components/home/WhyDTESSection").then((mod) => mod.default)
);

import {
  whyCardsData,
  iscCardsData,
  packagesCardsData,
  whyBoxesData,
} from "@/constants/homeData";

export default function HomePage() {
  return (
    <div className="relative w-full">
      <div className="relative w-full min-h-screen">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-card-3 to-white">
          <Image
            src="/assets/home/landing-bg.webp"
            alt="Landing background"
            fill
            sizes="100vw"
            className="object-cover object-top"
            quality={75}
            priority={true}
            decoding="async"
            placeholder="blur"
            blurDataURL="/assets/home/landing-bg-blur.webp"
          />
        </div>

        <div className="relative z-10 flex flex-col">
          <HeroSection />
          <WhyDTESSection data={whyBoxesData} />
          <WhySection data={whyCardsData} />
          <InternationalStandardsSection data={iscCardsData} />
          <SolutionPackagesSection data={packagesCardsData} />
        </div>
      </div>
    </div>
  );
}

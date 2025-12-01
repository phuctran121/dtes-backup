import Image from "next/image";

import HeroSection from "@/components/home/HeroSection";
import WhySection from "@/components/home/WhySection";
import InternationalStandardsSection from "@/components/home/InternationalStandardsSection";
import SolutionPackagesSection from "@/components/home/SolutionPackagesSection";
import WhyDTESSection from "@/components/home/WhyDTESSection";

import {
  whyCardsData,
  iscCardsData,
  packagesCardsData,
  whyBoxesData,
} from "@/constants/homeData";

export const dynamic = "force-static";

export default function HomePage() {
  return (
    <div className="relative w-full">
      <div className="relative w-full min-h-screen">
        <div className="absolute inset-0 z-0">
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

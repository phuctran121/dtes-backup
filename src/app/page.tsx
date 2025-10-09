import Image from "next/image";
import HeroSection from "@/components/home/HeroSection";
import WhyDTESSection from "@/components/home/WhyDTESSection";
import WhySection from "@/components/home/WhySection";
import InternationalStandardsSection from "@/components/home/InternationalStandardsSection";
import SolutionsSection from "@/components/home/SolutionsSection";

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
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/home/landing-bg.png"
            alt="Landing background"
            priority
            fill
            className="object-cover object-top"
            decoding="async"
            placeholder="blur"
            blurDataURL="/assets/home/landing-bg-blur.png"
            loading="eager"
          />
        </div>

        <div className="relative z-10 flex flex-col">
          <HeroSection />
          <WhyDTESSection data={whyBoxesData} />
          <WhySection data={whyCardsData} />
          <InternationalStandardsSection data={iscCardsData} />
          <SolutionsSection data={packagesCardsData} />
        </div>
      </div>
    </div>
  );
}

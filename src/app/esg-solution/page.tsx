// import FeaturedSection from "@/components/home/FeaturedSection";
import HeroSection from "@/components/home/HeroSectionNew";
import TestPSection from "@/components/home/TestPSection";
import IntroductionSection from "@/components/home/IntroductionSection";
import IntroSection from "@/components/home/IntroSection";
import VideoSection from "@/components/home/VideoSection";
import HomeSliderSection from "@/components/home/HomeSliderSection";
// import FeaturedSection from "@/components/home/FeaturedSection";
import ESGFeaturesSection from "@/components/esgsolution/ESGFeaturesSection";
import ESGHeaderSection from "@/components/esgsolution/ESGHeaderSection";
import ESGCasesSection from "@/components/esgsolution/ESGCasesSection";
import { casesData, resultsData } from "@/constants/esgSolutionData";
import ESGResultSection from "@/components/esgsolution/ESGResultSection";
import ESGFlowSection from "@/components/esgsolution/ESGFlowSection";

// 1. Force Static: Bắt buộc trang này là tĩnh

// 2. Revalidate: Dữ liệu server coi như không đổi trong 1 ngày (86400s)
// Để Next.js tự tin cache ở client lâu hơn
// export const revalidate = 86400;

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* <HeroSection /> */}
      <ESGHeaderSection />
      <ESGFeaturesSection />
      {/* <ESGFlowSection /> */}
      {/* <IntroductionSection /> */}

      {/* <FeaturedSection /> */}

      {/* <IntroSection />

      <TestPSection />

      <HomeSliderSection />

      <VideoSection /> */}

      {/* Load Data bất đồng bộ + Lazy load JS Swiper */}
      {/* <FeaturedSection /> */}

      {/* (Optional) Thêm VideoSection ở đây nếu muốn */}
    </main>
  );
}

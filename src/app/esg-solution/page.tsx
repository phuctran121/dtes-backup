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
      <ESGCasesSection data={casesData} />
      <ESGFlowSection />
      <ESGResultSection data={resultsData} />
    </main>
  );
}

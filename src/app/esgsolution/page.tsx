import React from "react";
import ESGFeaturesSection from "@/components/esgsolution/ESGFeaturesSection";
import ESGHeaderSection from "@/components/esgsolution/ESGHeaderSection";
import ESGCasesSection from "@/components/esgsolution/ESGCasesSection";
import { casesData, resultsData } from "@/constants/esgSolutionData";
import ESGResultSection from "@/components/esgsolution/ESGResultSection";
export default function page() {
  return (
    <div>
      <ESGHeaderSection />
      <ESGFeaturesSection />
      <ESGCasesSection data={casesData} />
      <ESGResultSection data={resultsData} />
    </div>
  );
}

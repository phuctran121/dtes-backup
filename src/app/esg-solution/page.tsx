import React from "react";
import ESGFeaturesSection from "@/components/esg-solution/ESGFeaturesSection";
import ESGHeaderSection from "@/components/esg-solution/ESGHeaderSection";
import ESGCasesSection from "@/components/esg-solution/ESGCasesSection";
import { casesData, resultsData } from "@/constants/esgSolutionData";
import ESGResultSection from "@/components/esg-solution/ESGResultSection";
import ESGFlowSection from "@/components/esg-solution/ESGFlowSection";

export default function page() {
  return (
    <div>
      <ESGHeaderSection />
      <ESGFeaturesSection />
      <ESGFlowSection />
      <ESGCasesSection data={casesData} />
      <ESGResultSection data={resultsData} />
    </div>
  );
}

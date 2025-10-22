import React from "react";
import ESGResultSection from "@/components/esg-solution/ESGResultSection";
import { resultsData } from "@/constants/esgSolutionData";
import ESGFlowSection from "@/components/esg-solution/ESGFlowSection";

export default function page() {
  return (
    <div>
      {/* <ESGFlowSection /> */}
      <div className="min-h-[100px] bg-blue-900"></div>
      <ESGResultSection data={resultsData} />
    </div>
  );
}

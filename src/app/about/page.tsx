import React from "react";
// import ESGFlowSlider from "@/components/esgsolution/ESGFlowSlider";
import ESGResultSection from "@/components/esgsolution/ESGResultSection";
import { casesData, resultsData } from "@/constants/esgSolutionData";

export default function page() {
  return (
    <div>
      {/* <ESGFlowSlider /> */}
      <ESGResultSection data={resultsData} />
    </div>
  );
}

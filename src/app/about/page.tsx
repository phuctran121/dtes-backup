import React from "react";
import ESGResultSection from "@/components/esgsolution/ESGResultSection";
import { resultsData } from "@/constants/esgSolutionData";
import ESGFlowSection from "@/components/esgsolution/ESGFlowSection";

export default function page() {
  return (
    <div>
      {/* <ESGFlowSection /> */}
      <div className="min-h-[100px] bg-blue-900"></div>
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-6xl font-bold">About Page</h1>
      </div>
    </div>
  );
}

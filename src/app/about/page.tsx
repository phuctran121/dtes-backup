import React from "react";
import ESGResultSection from "@/components/esg-solution/ESGResultSection";
import { resultsData } from "@/constants/esgSolutionData";
// import ESGFlowSection from "@/components/esgsolution/ESGFlowSection";
import CircularFeatures from "@/components/TestComponent";

export default function page() {
  const features = [
    { title: "3D Mapping", icon: "/assets/icons/box.svg" },
    { title: "3D Mapping", icon: "/assets/icons/building.svg" },
    { title: "4D Routing", icon: "/assets/icons/bank.svg" },
    { title: "3D Mapping", icon: "/assets/icons/star.svg" },
    { title: "Security", icon: "/assets/icons/task.svg" },
    { title: "3D Mapping", icon: "/assets/icons/box.svg" },
    { title: "3D Mapping", icon: "/assets/icons/box.svg" },
    { title: "3D Mapping", icon: "/assets/icons/box.svg" },
  ];
  return (
    <div>
      {/* <ESGFlowSection /> */}
      <div className="min-h-[100px] bg-blue-900"></div>
      <ESGResultSection data={resultsData} />
      <CircularFeatures features={features} radius={220} />
    </div>
  );
}

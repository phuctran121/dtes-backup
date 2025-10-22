"use client";
import React from "react";
import dynamic from "next/dynamic";

const ESGFlowSlider = dynamic(
  () => import("@/components/esg-solution/ESGFlowSlider"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full text-center py-20 text-gray-400">Loading...</div>
    ),
  }
);
export default function ESGFlowSection() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <ESGFlowSlider />
    </div>
  );
}

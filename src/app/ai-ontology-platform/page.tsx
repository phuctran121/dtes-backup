import React from "react";
import AOPHeaderSection from "@/components/aop/AOPHeaderSection";
import AOPAboutSection from "@/components/aop/AOPAboutSection";
import AOPFeaturesSection from "@/components/aop/AOPFeaturesSection";
import AOPResultSection from "@/components/aop/AOPResultSection";
import AOPApplicationSection from "@/components/aop/AOPApplicationSection";

export default function page() {
  return (
    <div>
      <AOPHeaderSection />
      <AOPAboutSection />
      <AOPFeaturesSection />
      <AOPApplicationSection />
      <AOPResultSection />
    </div>
  );
}

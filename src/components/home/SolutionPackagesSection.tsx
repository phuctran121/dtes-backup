import type { ReactElement } from "react";
import { PackageItem } from "@/types/home.types";
import SolutionPackageCard from "@/components/SolutionPackageCardItem";

interface SolutionPackagesSectionProps {
  data: PackageItem[];
}

export default function SolutionPackagesSection({
  data,
}: SolutionPackagesSectionProps): ReactElement {
  return (
    <section className="w-full min-h-screen flex items-center py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        {/* Section title */}
        <div className="mb-16 md:mb-24 text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-snug">
            고객 관리 운영이 필요한 곳이라면? <br className="hidden sm:block" />
            맞춤형 솔루션 제공
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {data.map((pkg, idx) => (
            <SolutionPackageCard key={idx} packageItem={pkg} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

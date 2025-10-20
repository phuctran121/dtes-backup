import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PackageItem } from "@/types/home.types";

interface SolutionPackageCardProps {
  packageItem: PackageItem;
  index: number;
}

export default function SolutionPackageCard({
  packageItem: p,
  index,
}: SolutionPackageCardProps) {
  return (
    <article className="flex flex-col h-full rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
      {/* Header */}
      <div
        className={`${p.headerBg} px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-center`}
      >
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white text-center">
          {p.title}
        </h3>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-grow items-center text-center gap-4 px-4 sm:px-6 py-6 sm:py-8">
        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-card-content whitespace-pre-line font-medium min-h-[40px]">
          {p.subtitle}
        </p>

        {/* Image/Icon */}
        <div className="flex items-center justify-center py-4 sm:py-6 min-h-[90px]">
          <Image
            src={p.image}
            alt={p.title}
            width={80}
            height={80}
            className="w-20 h-20 sm:size-28 object-contain"
            priority={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
          />
        </div>

        {/* Main text */}
        <p className="text-base sm:text-lg line-clamp-2 md:text-xl font-bold text-card-content leading-snug whitespace-pre-line min-h-[48px]">
          {p.mainText}
        </p>

        {/* Description + Note */}
        <div className="flex flex-col gap-1 sm:gap-2 min-h-[60px] py-4 font-medium text-gray-600">
          <p className="text-xs sm:text-sm">{p.desc}</p>
          <p className="text-xs sm:text-sm text-gray-500">{p.note}</p>
        </div>

        {/* Button */}
        <div className="w-full mt-auto pb-4 sm:pb-6">
          <Button
            className={`${p.btnClass} w-3/5 sm:w-2/5 py-4 sm:py-6 rounded-full text-sm sm:text-base font-medium transition-all`}
          >
            결제
          </Button>
        </div>
      </div>
    </article>
  );
}

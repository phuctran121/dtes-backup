import { InternationalStandardCard } from "@/types/home.types";
import InternationalStandardCardItem from "@/components/InternationalStandardCardItem";

interface InternationalStandardsSectionProps {
  data: InternationalStandardCard[];
}

export default function InternationalStandardsSection({
  data,
}: InternationalStandardsSectionProps) {
  return (
    <section className="w-full  bg-white mx-auto py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-8 lg:px-46">
        {/* Title */}
        <div className="mb-10 md:mb-14 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tighter leading-snug">
            국제 기술 기준
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {data.map((card, index) => (
            <InternationalStandardCardItem key={index} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

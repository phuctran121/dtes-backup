"use client";
import WhyDTESBox from "../WhyDTESCardItem";
import { WhyDTESBoxItem } from "@/types/home.types";
import dynamic from "next/dynamic";

interface WhyDTESProps {
  data: WhyDTESBoxItem[];
}

const WhyDTESMobile = dynamic(() => import("../home/WhyDTESMobile"), {
  ssr: false,
  loading: () => null,
});

export default function ESGResultSection({ data }: WhyDTESProps) {
  return (
    <section
      className="w-full py-16 md:py-24  bg-[url('/assets/esg/esg-result-background.webp')] 
             bg-cover bg-center bg-no-repeat"
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-46 text-center ">
        <h2 className="text-4xl font-extrabold mb-16 text-text-esg-title lg:block">
          RESULT
        </h2>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6 items-center">
          {/* Column Left */}
          <div className="flex flex-col justify-center gap-6">
            {data.slice(0, 1).map((b, i) => (
              <WhyDTESBox key={i} title={b.title} text={b.text} />
            ))}
          </div>

          {/* Column Mid */}
          <div className="flex flex-col items-center gap-6">
            {data.slice(1, 3).map((b, i) => (
              <div key={i} className="w-full">
                <WhyDTESBox title={b.title} text={b.text} />
              </div>
            ))}
          </div>

          {/* Column Right */}
          <div className="flex flex-col justify-center gap-8">
            {data.slice(3, 4).map((b, i) => (
              <WhyDTESBox key={i} title={b.title} text={b.text} />
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-wrap justify-between gap-4">
          {data.map((b, i) => (
            <div key={i} className="w-full sm:w-[48%]">
              <WhyDTESBox title={b.title} text={b.text} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

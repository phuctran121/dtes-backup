"use client";

import React, { memo, useMemo } from "react";
import dynamic from "next/dynamic";
import WhyDTESBox from "../WhyDTESCardItem";
import { WhyDTESBoxItem } from "@/types/home.types";

// Lazy-load mobile version with skeleton
const WhyDTESMobile = dynamic(() => import("./WhyDTESMobile"), {
  ssr: false,
  loading: () => (
    <div className="lg:hidden flex justify-center items-center py-16 text-white/70 text-lg">
      Loading...
    </div>
  ),
});

interface WhyDTESProps {
  data: WhyDTESBoxItem[];
}

function WhyDTES({ data }: WhyDTESProps) {
  const [left, mid, right] = useMemo(
    () => [data.slice(0, 2), data.slice(2, 4), data.slice(4, 6)],
    [data]
  );

  return (
    <section
      className="w-full min-h-[80vh] py-16 md:py-24 bg-transparent overflow-hidden"
      id="why-dtes"
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 text-center">
        {/* Title */}
        <header className="mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-title-white mb-8 leading-tight">
            건축 전에, 성능을 예측하세요
          </h2>
          <p className="text-title-white text-2xl md:text-4xl max-w-[1050px] mx-auto leading-relaxed">
            DTES는 건축 설계 및 시공 전, 실시간 에너지 시뮬레이션을 통해 에너지
            낭비를 줄이고 성능을 최적화할 수 있게 돕습니다.
          </p>
        </header>

        {/* Divider line */}
        <div className="relative flex justify-center mb-16">
          <div className="h-28 w-[1px] bg-white/60 rounded-full hidden lg:block"></div>
        </div>

        {/* Subheading */}
        <h3 className="text-5xl font-extrabold mb-16 text-title-white hidden lg:block">
          왜 DTES가 필요할까요?
        </h3>

        {/* Desktop layout */}
        <div className="hidden lg:grid grid-cols-3 gap-6 items-start">
          <div className="flex flex-col justify-center gap-6 mb-32">
            {left.map((b, i) => (
              <WhyDTESBox key={i} title={b.title} text={b.text} />
            ))}
          </div>

          <div className="flex flex-col items-center gap-6">
            {mid.map((b, i) => (
              <WhyDTESBox key={i} title={b.title} text={b.text} />
            ))}
          </div>

          <div className="flex flex-col justify-center gap-6 mb-32">
            {right.map((b, i) => (
              <WhyDTESBox key={i} title={b.title} text={b.text} />
            ))}
          </div>
        </div>

        {/* Mobile layout */}
        <WhyDTESMobile boxes={data} />
      </div>
    </section>
  );
}

export default memo(WhyDTES);

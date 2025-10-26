// components/ApplicationSection.tsx
"use client";

import React from "react";

export default function ApplicationSection() {
  const items = [
    {
      title: "ESG 리포트 생성",
      desc: "다양한 이해 관계자의 요구와 국내외 온실가스 규제에 대응하기 위한 기업의 온실가스 배출량 환경을",
    },
    {
      title: "규제 문서 해석",
      desc: "다양한 이해 관계자의 요구와 국내외 온실가스 규제에 대응하기 위한 기업의 온실가스 배출량 환경을",
    },
    {
      title: "설비 상관 분석",
      desc: "다양한 이해 관계자의 요구와 국내외 온실가스 규제에 대응하기 위한 기업의 온실가스 배출량 환경을",
    },
    {
      title: "고객 질의 AI",
      desc: "다양한 이해 관계자의 요구와 국내외 온실가스 규제에 대응하기 위한 기업의 온실가스 배출량 환경을",
    },
  ];

  return (
    <section
      className="w-full py-16 md:py-24 bg-[url('/assets/aop/aop-application-background.webp')] 
      bg-cover bg-center bg-no-repeat"
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-46 flex flex-col items-center justify-start py-16">
        <h2 className="text-2xl md:text-4xl font-bold text-text-esg-title mb-14">
          APPLICATION
        </h2>
        {/* 4-column grid on md+, stacked on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-x-6 gap-y-8 items-start">
          {items.map((it, idx) => {
            // idx 1 and 2 are the two middle items (0-based)
            const isMiddle = idx === 1 || idx === 2;

            return (
              <div
                key={idx}
                className={`relative w-full flex justify-center
                   ${isMiddle ? "lg:mt-[80%]" : "lg:mt-0"}`}
              >
                {/* outer rounded frame */}
                <div className="w-full md:max-w-none border-1 border-[#429BFF] rounded-[28px] p-5">
                  {/* inner card */}
                  <div className="bg-[#90C4FF] rounded-[18px] py-6 px-4 text-center text-white min-h-[180px] gap-8 md:gap-14 flex flex-col justify-center">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-medium tracking-tighter">
                      {it.title}
                    </h3>
                    <p className="text-sm md:text-base lg:text-lg leading-relaxed tracking-tighter opacity-90">
                      {it.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

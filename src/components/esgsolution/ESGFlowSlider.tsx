"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useState } from "react";
import Image from "next/image";

const steps = [
  {
    id: 1,
    title: "데이터 수집",
    desc: "지배구조 관련 등으로 수집하고",
    icon: "/icons/data.svg",
  },
  {
    id: 2,
    title: "AI 분석",
    desc: "인공지능이 수집된 데이터를 분석하여 리스크를 예측하고 최적화 방안을 제시합니다.",
    icon: "/icons/ai.svg",
  },
  {
    id: 3,
    title: "Dashboard 대시보드",
    desc: "실시간 ESG 지표와 성과를 시각화된 차트로 한눈에 확인할 수 있습니다.",
    icon: "/icons/dashboard.svg",
  },
  {
    id: 4,
    title: "Report Export",
    desc: "분석된 데이터를 리포트 형태로 내보낼 수 있습니다.",
    icon: "/icons/report.svg",
  },
];

export default function ESGFlowSlider() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="w-full bg-[#F8FBFF] py-16 flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        <span className="text-[#3B82F6]">FLOW</span> - ESG 플랫폼 운영 프로세스
      </h2>

      {/* Process bar */}
      <div className="flex items-center justify-center gap-8 mb-8">
        {["Data", "All", "Dashboard", "Report Export"].map((label, i) => (
          <div key={label} className="flex flex-col items-center">
            <div
              className={`w-2 h-2 rounded-full mb-2 ${
                activeIndex === i + 1 ? "bg-[#3B82F6]" : "bg-[#D6E2FF]"
              }`}
            />
            <span
              className={`text-sm ${
                activeIndex === i + 1
                  ? "text-[#3B82F6] font-semibold"
                  : "text-[#A8B6D0]"
              }`}
            >
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Slider */}
      <div className="w-full max-w-5xl">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1.2}
          centeredSlides
          spaceBetween={20}
          pagination={{ clickable: true }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex + 1)}
          breakpoints={{
            768: {
              slidesPerView: 3,
              centeredSlides: true,
            },
          }}
        >
          {steps.map((step, i) => (
            <SwiperSlide key={step.id}>
              <div
                className={`rounded-3xl p-8 h-[280px] flex flex-col justify-between text-white transition-all duration-500 ${
                  activeIndex === i + 1
                    ? "bg-gradient-to-br from-[#2563EB] to-[#1E40AF] shadow-lg"
                    : "bg-[#E8F0FF] text-[#94A3B8]"
                }`}
              >
                <div className="flex justify-between items-start">
                  <span
                    className={`text-sm w-6 h-6 rounded-full flex items-center justify-center ${
                      activeIndex === i + 1
                        ? "bg-white text-[#2563EB]"
                        : "bg-[#D6E2FF] text-[#94A3B8]"
                    }`}
                  >
                    {step.id}
                  </span>
                </div>

                <div className="flex flex-col items-start gap-4">
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm leading-relaxed">{step.desc}</p>
                </div>

                <div className="flex justify-end mt-4">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={64}
                    height={64}
                    className="opacity-90"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

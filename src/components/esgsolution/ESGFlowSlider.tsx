"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import ESGFlowCard from "./ESGFlowCard";
import ESGProgressBar from "./ESGProgressBar";

const steps = [
  {
    id: 1,
    title: "Data 데이터",
    label: "Data",
    desc: "환경, 사회, 지배구조 관련 데이터를 자동으로 수집하고 통합합니다.",
    icon: "/assets/icons/data-icon.svg",
  },
  {
    id: 2,
    title: "AI 분석",
    label: "All",
    desc: "인공지능이 수집된 데이터를 분석하여 리스크를 예측하고 최적화 방안을 제시합니다.",
    icon: "/assets/icons/robot-icon.svg",
  },
  {
    id: 3,
    title: "AI 분석",
    label: "Dashboard",
    desc: "실시간 ESG 지표와 성과를 시각화된 차트로 한눈에 확인할 수 있습니다.",
    icon: "/assets/icons/ai-icon.svg",
  },
  {
    id: 4,
    title: "Report Export 보고서 출력",
    label: "Report Export",
    desc: "GRI, SASB 등 글로벌 표준에 맞춘 ESG 보고서를 자동으로 생성하여 출력합니다.",
    icon: "/assets/icons/report-icon.svg",
  },
];

export default function ESGFlowSlider() {
  const [activeIndex, setActiveIndex] = useState(1);
  const swiperRef = useRef<SwiperType | null>(null);

  const goTo = (index: number) => {
    swiperRef.current?.slideTo(index - 1);
    setActiveIndex(index);
  };

  return (
    <section className="w-full gap-12 bg-[#F1F8FF] py-32 flex flex-col justify-center items-center overflow-hidden">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide text-center mb-4">
        <span className="text-[#174CE6]">FLOW</span> - ESG 플랫폼 운영 프로세스
      </h2>

      {/* Progress bar */}
      <ESGProgressBar steps={steps} activeIndex={activeIndex} onSelect={goTo} />

      {/* Swiper Slider */}
      <div className="relative w-full overflow-visible">
        <Swiper
          onBeforeInit={(swiper) => (swiperRef.current = swiper)}
          initialSlide={1}
          centeredSlides
          slidesPerView={1}
          spaceBetween={10}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex + 1)}
          className="overflow-visible"
          breakpoints={{
            1024: {
              slidesPerView: 2.6,
              spaceBetween: 20,
              centeredSlides: true,
            },
          }}
        >
          {steps.map((step, i) => (
            <SwiperSlide key={step.id}>
              <ESGFlowCard step={step} isActive={activeIndex === i + 1} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import ESGFlowCard from "./ESGFlowCard";

interface ESGFlowSwiperProps {
  steps: {
    id: number;
    title: string;
    label: string;
    desc: string;
    icon: string;
  }[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

export default function ESGFlowSwiper({
  steps,
  activeIndex,
  setActiveIndex,
}: ESGFlowSwiperProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
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
  );
}

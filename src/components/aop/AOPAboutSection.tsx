"use client";

import { ArrowUpRight } from "lucide-react";
import Building from "@/assets/icons/double-building.svg";
import Banking from "@/assets/icons/bank.svg";
import Task from "@/assets/icons/as-task.svg";
import Box from "@/assets/icons/box.svg";
import Circle from "@/assets/icons/triangle-circle.svg";
import Image from "next/image";

const cards = [
  {
    icon: "/assets/icons/double-building.svg",
    title: "기업 A사",
    desc: "ESG 경영 고도화를 위한 맞춤형 솔루션을 제공합니다. 데이터 수집부터 분석, 리포팅까지 통합 관리로 효율적인 ESG 경영 체계를 구축할 수 있습니다.",
  },
  {
    icon: "/assets/icons/as-task.svg",
    title: "ESG 점수 향상",
    desc: "AI 기반 분석으로 ESG 점수를 개선하고, GRI, SASB 등 글로벌 표준에 맞춘 보고서를 자동으로 생성하여 업무 효율을 극대화합니다.",
  },
  {
    icon: "/assets/icons/bank.svg",
    title: "지자체 환경본부",
    desc: "지역 탄소중립 목표 달성을 위한 통합 모니터링 시스템을 제공합니다. 실시간 데이터 기반으로 정책 수립과 이행 관리를 지원합니다.",
  },
  {
    icon: "/assets/icons/box.svg",
    title: "탄소배출 관리 시스템",
    desc: "배출원별 탄소 데이터를 정량하게 측정하고 관리합니다. AI 예측 분석으로 감축 목표 설정과 실행 계획 수립을 효율적으로 지원합니다.",
  },
  {
    icon: "/assets/icons/triangle-circle.svg",
    title: "탄소배출 공급망 시스템",
    desc: "협력사 전체의 탄소배출을 통합 관리하고 추적합니다. Scope 3 배출량 산정을 자동화하여 공급망 전반의 탄소 투명성을 확보합니다.",
  },
];

export default function AOPAboutSection() {
  return (
    <section
      className="w-full min-h-screen py-16 md:py-24 bg-[url('/assets/aop/aop-about-background.webp')] 
      bg-cover bg-center bg-no-repeat"
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-46">
        {/* unified grid: leftside + cards */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Left side now part of grid */}
          {/* Title */}
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl md:text-4xl font-semibold text-button-main">
              <span className="">ABOUT</span>
            </h2>
            <h2 className="text-xl md:text-4xl font-bold ">AI 온톨로지란?</h2>
            <p className="text-gray-700 text-sm md:text-lg max-w-96 font-medium leading-relaxed mt-4">
              데이터의 관계와 의미를 정의해, AI가 이해하고 추론하는 기반을
              제공합니다.
            </p>
          </div>

          {/* cards */}
          {cards.map((item, i) => (
            <div
              key={i}
              className="relative flex justify-center items-center flex-col gap-10 md:gap-18 bg-white rounded-2xl p-5 md:p-6 lg:p-8 shadow-sm hover:shadow-md transition-all border border-transparent hover:border-[#D6E3FF]"
            >
              <div className="flex items-start w-full justify-between mb-4">
                {/* <div className="-ml-[15px] size-18">{item.icon}</div> */}
                <Image
                  src={item.icon}
                  alt="ISO Logo"
                  width={120}
                  height={120}
                  loading="lazy"
                  decoding="async"
                  className="object-contain -ml-[8px] size-12 md:size-16 lg:size-18 transition-none group-hover:brightness-0 group-hover:invert"
                />
                <ArrowUpRight className="size-10 md:size-12 text-[#5197EC]" />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-medium mb-2 text-xl md:text-2xl lg:text-3xl text-[#3D3D3D]">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed min-h-[75px] tracking-tighter">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

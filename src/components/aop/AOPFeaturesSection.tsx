"use client";

import Image from "next/image";

const features = [
  {
    icon: "/assets/icons/circle-dot.svg",
    title: "지식 구조화",
    desc: "ESG 관련 개념, 지표, 규제를 체계적으로 정리하여 복잡한 정보를 명확하게 이해할 수 있는 지식 체계를 구축합니다.",
    active: true,
  },
  {
    icon: "/assets/icons/analy-ai.svg",
    title: "추론 기반 분석",
    desc: "단순 데이터 처리를 넘어 AI가 논리적 추론을 통해 숨겨진 패턴과 인사이트를 발견하고 예측 분석을 제공합니다.",
  },
  {
    icon: "/assets/icons/bulb-ai.svg",
    title: "자동 분류",
    desc: "환경, 사회, 지배구조 데이터를 자동 식별하고 관련 프레임워크에 매핑하여 보고서 작성의 효율성을 간소화합니다.",
  },
  {
    icon: "/assets/icons/hexagon.svg",
    title: "연계성 확장",
    desc: "개별 데이터 포인트 간 숨은 연관성을 발견하고 새로운 관계를 지속적으로 학습하여 통합적 ESG 관리를 가능하게 합니다.",
  },
];

export default function AOPFeaturesSection() {
  return (
    <section className="w-full min-h-screen py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-0 py-18">
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold tracking-wide text-center mb-20">
          <span className="text-[#174CE6]">FEATURES</span> - 4칸 카드
        </h2>

        {/* Cards grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((item, i) => (
            <div
              key={i}
              className={`group rounded-3xl p-4 md:p-12 flex justify-center items-start text-left lg:items-center lg:text-center flex-col gap-2 lg:gap-12 transition-all duration-300 hover:scale-[1.02] hover:bg-card-3
                  border border-[#2B4EE8] text-[#2E6BFF] hover:shadow-md`}
            >
              <h3
                className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-[#64ADFF] group-hover:text-white order-2 lg:order-1`}
              >
                {item.title}
              </h3>
              <Image
                src={item.icon}
                alt="ISO Logo"
                width={120}
                height={120}
                loading="lazy"
                decoding="async"
                className="object-contain size-14 md:size-18 lg:size-40 transition-none group-hover:brightness-0 group-hover:invert order-1 lg:order-2 mb-18 md:mb-24 lg:mb-0"
              />
              <p
                className={`text-xs md:text-sm lg:text-base font-light leading-relaxed text-[#64ADFF] group-hover:text-white order-3`}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Illustration */}
        <div className="flex justify-center mt-24">
          <Image
            src="/assets/aop/aop-tech-structure.webp"
            alt="ESG features illustration"
            width={1000}
            height={1000}
            loading="lazy"
            decoding="async"
            className="max-w-full h-auto select-none pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
}

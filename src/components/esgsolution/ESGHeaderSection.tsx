// import Image from "next/image";

export default function ESGHeaderSection() {
  return (
    <section className="relative w-full">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          src="/videos/esg_hero_section.mp4"
          className="w-full h-full object-cover pointer-events-none select-none"
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/esg/esg-header-background.webp"
          preload="none"
        />
        <source src="/videos/promo.webm" type="video/webm" />{" "}
        {/* Ưu tiên WebM nhẹ hơn */}
        <source src="/videos/promo.mp4" type="video/mp4" />
        {/* Overlay dark */}
        {/* <div className="absolute inset-0 bg-black/40" /> */}
      </div>

      {/* Overlay content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center container px-4 sm:px-8 lg:px-16 mx-auto py-32 gap-24 md:gap-12">
        {/* Top Title */}
        <div className="w-full pt-20">
          <h1 className="text-5xl md:text-7xl text-white font-medium leading-relaxed mb-4">
            ESG SOLUTION
          </h1>
          <p className="text-base md:text-lg tracking-tight font-light text-gray-200">
            데이터를 기반으로 ESG를 실행하고, 투명하게 관리합니다.
          </p>
        </div>

        {/* 3 Columns (Intro Texts) */}
        <div className="grid grid-cols-3 gap-10 w-full mt-38 items-center">
          <div className="flex flex-col items-start font-light text-white sm:text-xl md:text-2xl lg:text-3xl text-left">
            <p className="font-normal">왜 ESG인가?</p>
            <p className="text-gray-300">실제 설계도 반영</p>
          </div>
          <div className="flex flex-col items-center text-white sm:text-xl md:text-2xl lg:text-3xl">
            <p className="leading-tight font-light mb-2">
              기업의 지속가능성은 데이터로
            </p>
          </div>
          <div className="flex flex-col items-end text-white sm:text-sm md:text-2xl lg:text-3xl text-right">
            <p className="mb-2">
              실시간 분석 및 공시
              <br /> 자동화로
            </p>
          </div>
        </div>

        {/* Bottom Title */}
        <div className="flex flex-col items-center gap-2 md:gap-18 mt-6">
          <h2 className="text-xl md:text-3xl lg:text-5xl text-white">
            SMART ESG MANAGEMENT PLATFORM
          </h2>
          <p className="text-white font-light text-base md:text-lg">
            데이터로 측정하고, AI로 분석하는 ESG 경영 솔루션
          </p>
        </div>
      </div>
    </section>
  );
}

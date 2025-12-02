import React from "react";

const DigitalTwinSection = () => {
  return (
    <section className="relative min-h-[1200px] flex items-center justify-center overflow-hidden">
      {/* --- START: Background Video --- */}
      <video
        src="/videos/home-hero-section.mp4"
        autoPlay
        loop
        muted
        playsInline
        className={`
          absolute top-0 left-0 w-full h-full -z-10
          object-cover 
          scale-110
          object-[center_10%]
          [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]
          */
        `}
      />
      {/* --- END: Background Video --- */}

      <div className="relative flex flex-col gap-22 text-center mb-72 text-white select-none pointer-events-none">
        <p className="mb-2 lg:text-3xl md:text-2xl text-xl tracking-tighter leading-snug">
          설계의 시작
          <br />
          에너지 효율로부터
        </p>
        <h1 className="lg:text-8xl text-6xl font-normal tracking-tighter sm:tracking-normal">
          DIGITAL TWIN
          <br />
          ENERGY SIMULATOR
        </h1>
      </div>

      <span className="absolute left-[1%] md:left-[10%] top-[20%] lg:left-[12%] lg:top-[32%] text-white/90 md:text-xl lg:text-2xl text-sm font-normal select-none tracking-tighter">
        에너지 소비 절감
      </span>
      <span className="absolute left-[1%] md:left-[15%] top-[60%] lg:left-[20%] lg:top-[68%] text-white/90 md:text-xl lg:text-2xl text-sm font-normal select-none tracking-tighter">
        CO2 배출량 저감
      </span>
      <span className="absolute right-[1%] md:right-[10%] top-[26%] lg:right-[15%] lg:top-[35%] text-white/90 md:text-xl lg:text-2xl text-sm font-normal select-none tracking-tighter">
        운영비 감소
      </span>
      <span className="absolute right-[1%] md:right-[20%] top-[65%] lg:right-[32%] lg:top-[74%] text-white/90 md:text-xl lg:text-2xl text-sm font-normal select-none tracking-tighter">
        인증 대응 시간 단축
      </span>
    </section>
  );
};

export default DigitalTwinSection;

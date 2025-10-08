import React from "react";

const DigitalTwinSection = () => {
  return (
    <section className="relative min-h-[1200px] flex items-center justify-center overflow-hidden">
      <div className="relative flex flex-col gap-22 text-center mb-72 text-white select-none pointer-events-none">
        <p className="mb-2 lg:text-4xl text-2xl">
          설계의 시작
          <br />
          에너지 효율로부터
        </p>
        <h1 className="lg:text-8xl text-6xl  font-medium tracking-wide">
          DIGITAL TWIN
          <br />
          ENERGY SIMULATOR
        </h1>
      </div>

      <span className="absolute left-[12%] top-[32%] text-white md:text-xl lg:text-2xl text-sm font-medium select-none pointer-events-none">
        에너지 소비 절감
      </span>
      <span className="absolute left-[20%] top-[68%] text-white md:text-xl lg:text-2xl text-sm font-medium select-none pointer-events-none">
        CO2 배출량 저감
      </span>
      <span className="absolute right-[15%] top-[35%] text-white md:text-xl lg:text-2xl text-sm font-medium select-none pointer-events-none">
        운영비 감소
      </span>
      <span className="absolute right-[32%] top-[74%] text-white md:text-xl lg:text-2xl text-sm font-medium select-none pointer-events-none">
        인증 대응 시간 단축
      </span>
    </section>
  );
};

export default DigitalTwinSection;

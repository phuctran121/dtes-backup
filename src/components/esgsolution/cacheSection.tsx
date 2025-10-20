import Image from "next/image";

export default function HeaderSection() {
  return (
    <section className="relative w-full">
      {/* Background images (chỉ 1 ảnh hiển thị tại 1 thời điểm) */}
      {/* Desktop */}
      <div className="hidden md:block relative w-full">
        <Image
          src="/assets/esg/esg-header-background.webp"
          alt="ESG Desktop Background"
          width={1920} // chiều rộng thực tế ảnh
          height={1080} // chiều cao thực tế ảnh
          className="w-full min-h-screen object-cover object-center"
          priority
          quality={80}
          decoding="async"
        />
      </div>

      {/* Mobile */}
      <div className="block md:hidden relative w-full">
        <Image
          src="/assets/esg/esg-header-background-mb.png"
          alt="ESG Mobile Background"
          width={1920} // chiều rộng thực tế ảnh
          height={1080} // chiều cao thực tế ảnh
          className="w-full min-h-screen object-cover object-center"
          quality={80}
          decoding="async"
        />
      </div>

      {/* Overlay content */}
      <div className="absolute inset-0 h-full flex gap-12 mt-12 flex-col justify-center items-center text-center container mx-auto">
        {/* Top Title */}
        <div className="w-full">
          <h1 className="text-5xl md:text-7xl text-white font-medium leading-relaxed mb-4">
            ESG SOLUTION
          </h1>
          <p className="text-base md:text-lg tracking-tight font-light text-gray-200">
            데이터를 기반으로 ESG를 실행하고, 투명하게 관리합니다.
          </p>
        </div>

        {/* 3 Columns (Intro Texts) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full mt-36 items-center">
          <div className="flex flex-col items-center md:items-start text-white text-3xl text-left">
            <p className="mb-2">왜 ESG인가?</p>
            <p className="text-gray-300">실제 설계도 반영</p>
          </div>
          <div className="flex flex-col items-center text-white text-3xl">
            <p className="text-3xl leading-tight font-light mb-2">
              기업의 지속가능성은 데이터로
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end text-white text-3xl text-right">
            <p className="mb-2">
              실시간 분석 및 공시
              <br /> 자동화로
            </p>
          </div>
        </div>

        {/* Bottom Title */}
        <div className="flex flex-col items-center gap-18 mt-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl  text-white">
            SMART ESG MANAGEMENT PLATFORM
          </h2>
          <p className="text-gray-300 text-base md:text-lg">
            데이터로 측정하고, AI로 분석하는 ESG 경영 솔루션
          </p>
        </div>
      </div>
    </section>
  );
}

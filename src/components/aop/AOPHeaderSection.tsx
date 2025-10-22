import Image from "next/image";

export default function AOPHeaderSection() {
  return (
    <section className="relative w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Ảnh desktop */}
        <Image
          src="/assets/aop/aop-header-background.webp"
          alt="ESG Header Background"
          fill
          priority
          quality={75}
          className="hidden md:block object-cover object-center"
          sizes="(max-width: 768px) 100vw, 100vw"
          // placeholder="blur"
          // blurDataURL="/assets/esg/esg-header-background-blur.webp"
        />
        {/* Ảnh mobile */}
        <Image
          src="/assets/esg/esg-header-background-mb.webp"
          alt="ESG Header Background Mobile"
          fill
          priority
          quality={75}
          className="block md:hidden object-cover object-center"
          sizes="100vw"
          // placeholder="blur"
          // blurDataURL="/assets/esg/esg-header-background-mb-blur.webp"
        />
      </div>

      {/* Overlay content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center container sm:px-0 px-6 mx-auto py-32 gap-24 md:gap-12">
        {/* Top Title */}
        <div className="w-full pt-20">
          <h1 className="text-5xl md:text-7xl text-white font-medium leading-relaxed mb-4">
            AI ONTOLOGY PLATFORM
          </h1>
          <p className="text-base md:text-lg tracking-tight font-light text-gray-200">
            데이터의 의미를 연결하고, AI가 이해하는 지식 네트워크로.
          </p>
        </div>

        {/* 3 Columns (Intro Texts) */}
        <div className="grid grid-cols-3 gap-10 w-full mt-38 items-center pb-54">
          <div className="flex flex-col leading-tight font-light mb-2 items-start text-white sm:text-xl md:text-2xl lg:text-3xl text-left">
            <p>AI NETWORK 그래픽</p>
            <p>(노드 + 라인 연결)</p>
          </div>
          <div className="flex flex-col items-center text-white sm:text-xl md:text-2xl lg:text-3xl">
            <p className="leading-tight font-light mb-2">
              AI ONTOLOGY PLATFORM
            </p>
          </div>
          <div className="flex flex-col items-end text-white sm:text-sm md:text-2xl lg:text-3xl text-right">
            <p>AI가 데이터를 이해하고 연</p>
            <p>결하는 지식 구조 플랫폼</p>
          </div>
        </div>
      </div>
    </section>
  );
}

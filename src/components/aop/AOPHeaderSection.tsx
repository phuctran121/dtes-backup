export default function AOPHeaderSection() {
  return (
    <section className="relative w-full">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover object-center select-none pointer-events-none"
          src="/videos/aop-hero-section.mp4"
          poster="/assets/posters/aop-hero-section_poster.webp"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
      </div>

      {/* Overlay content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center container px-4 sm:px-8 lg:px-16 mx-auto py-32 gap-24 md:gap-12">
        {/* Top Title */}
        <div className="w-full pt-20">
          <h1 className="text-5xl md:text-7xl text-white font-medium leading-relaxed mb-4">
            AI ONTOLOGY PLATFORM
          </h1>
          <p className="text-base md:text-lg tracking-tighter font-light text-gray-200">
            데이터의 의미를 연결하고, AI가 이해하는 지식 네트워크로.
          </p>
        </div>

        {/* 3 Columns (Intro Texts) */}
        <div className="grid grid-cols-3 gap-10 w-full mt-38 items-center pb-54">
          <div className="flex flex-col leading-tight mb-2 items-start text-white sm:text-lg md:text-xl lg:text-2xl text-left">
            <p>AI NETWORK 그래픽</p>
            <p>(노드 + 라인 연결)</p>
          </div>
          <div className="flex flex-col items-center text-white sm:text-lg md:text-xl lg:text-2xl">
            <p className="leading-tight mb-2">AI ONTOLOGY PLATFORM</p>
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

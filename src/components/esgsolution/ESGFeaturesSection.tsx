import Image from "next/image";
import ESGFeatureIcons from "./ESGFeatureIcons";

export default function ESGFeaturesSection() {
  return (
    <section className="w-full py-20 md:py-28 bg-white">
      <div className="container sm:px-0 px-6 mx-auto md:px-8 lg:px-46 text-left">
        {/* Title */}
        <div className="mb-10 flex flex-col sm:flex-row justify-start items-start sm:items-center gap-10 md:gap-20 lg:gap-48">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl md:text-4xl font-semibold text-text-esg-title">
              <span className="">FEATURES</span>
            </h2>
            <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-tighter font-semibold">
              5칸 카드
            </h2>
          </div>
          <p className="text-gray-700 text-sm md:text-lg max-w-3xl font-medium leading-relaxed tracking-tighter">
            실시간 데이터 수집으로 환경, 사회, 지배구조 지표를 자동 추적하고,
            인공지능 분석을 통해 ESG 리스크를 예측하며 최적화된 실행 전략을
            제시합니다. 결과로 ESG 표준에 부합하는 보고서를 자동 생성하여 기업의
            지속가능경영과 투자사 신뢰도를 동시에 향상시킵니다.
          </p>
        </div>

        {/* Illustration */}
        <div className="flex justify-center overflow-hidden max-w-[800px] mx-auto mb-10">
          <video
            className="w-full object-cover select-none pointer-events-none scale-110"
            src="/videos/esg-features-section.mp4"
            poster="/assets/esg/esg-core.webp"
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            disablePictureInPicture
            disableRemotePlayback
            controlsList="nodownload nofullscreen noremoteplayback"
          />
        </div>

        {/* Icons */}
        <ESGFeatureIcons />
      </div>
    </section>
  );
}

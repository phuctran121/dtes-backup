import { InternationalStandardCard } from "@/types/home.types";
import InternationalStandardCardItem from "@/components/InternationalStandardCardItem";

interface InternationalStandardsSectionProps {
  data: InternationalStandardCard[];
}

export default function ESGCasesSection({
  data,
}: InternationalStandardsSectionProps) {
  return (
    <section className="w-full min-h-screen bg-white mx-auto py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        {/* Title */}
        <div className="mb-10 flex flex-col sm:flex-row justify-start items-start sm:items-center gap-10 md:gap-20 lg:gap-48">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl md:text-4xl font-extrabold text-text-esg-title">
              <span className="">CASES</span>
            </h2>
            <h2 className="text-xl md:text-4xl font-bold">도입 사례</h2>
          </div>
          <p className="text-gray-700 text-sm md:text-lg max-w-3xl font-medium leading-relaxed">
            실시간 데이터 수집으로 환경, 사회, 지배구조 지표를 자동 추적하고,
            인공지능 분석을 통해 ESG 리스크를 예측하며 최적화된 실행 전략을
            제시합니다. 결과로 ESG 표준에 부합하는 보고서를 자동 생성하여 기업의
            지속가능경영과 투자사 신뢰도를 동시에 향상시킵니다.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-16">
          {data.map((card, index) => (
            <InternationalStandardCardItem key={index} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

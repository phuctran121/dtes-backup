import { WhyCard } from "@/types/home.types";
import WhyCardItem from "@/components/WhyCardItem";

interface WhySectionProps {
  data: WhyCard[];
}

export default function WhySection({ data }: WhySectionProps) {
  return (
    <section className="w-full flex items-center py-16 md:py-24 border-t border-white/70">
      <div className="container mx-auto px-4 sm:px-8 lg:px-46 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6">
          왜 <span className="text-text-highlight">DTES</span>인가요?
        </h2>

        <p className="text-title-black text-sm sm:text-base md:text-lg max-w-2xl font-normal mx-auto mb-12 sm:mb-20 leading-relaxed">
          DTES는 건축 설계 및 시공 전, 실시간 에너지 시뮬레이션을 통해{" "}
          <br className="hidden sm:block" />
          에너지 낭비를 줄이고 성능을 최적화할 수 있게 돕습니다.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 justify-center">
          {data.map((card, index) => (
            <WhyCardItem key={index} card={card} />
          ))}
        </div>

        <div className="mt-16 sm:mt-20 lg:mt-24">
          <button className="bg-card-3 text-white text-sm sm:text-base font-medium px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all duration-200">
            서비스 문의하기 &gt;
          </button>
        </div>
      </div>
    </section>
  );
}

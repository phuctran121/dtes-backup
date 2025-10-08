import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { WhyCard } from "@/types/home.types";

interface WhySectionProps {
  data: WhyCard[];
}

export default function WhySection({ data }: WhySectionProps) {
  return (
    <section className="w-full min-h-screen flex items-center py-16 md:py-24 border-t border-white/70">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4 sm:mb-6">
          왜 <span className="text-text-highlight">DTES</span>인가요?
        </h2>
        <p className="text-title-black text-sm sm:text-base md:text-lg max-w-2xl font-normal mx-auto mb-12 sm:mb-20 leading-relaxed">
          DTES는 건축 설계 및 시공 전, 실시간 에너지 시뮬레이션을 통해{" "}
          <br className="hidden sm:block" />
          에너지 낭비를 줄이고 성능을 최적화할 수 있게 돕습니다.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 justify-center">
          {data.map((card, index) => (
            <Card
              key={index}
              className="rounded-2xl border-0 shadow-[0_2px_10px_rgba(0,0,0,0.05)] bg-white relative hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)] transition-shadow duration-300"
            >
              <CardContent className="flex flex-col items-start justify-between h-56 sm:h-64 lg:h-72 p-5 sm:p-6 text-left relative">
                <div className="flex flex-col gap-1 sm:gap-2">
                  <h3 className="text-2xl sm:text-3xl font-semibold mb-1">
                    {card.title}
                  </h3>
                  <p className="text-sub-title font-semibold text-sm sm:text-xl">
                    {card.description}
                  </p>
                </div>
                <Image
                  src={card.image}
                  alt={card.title}
                  width={80}
                  height={80}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain absolute bottom-4 right-4 sm:bottom-6 sm:right-6"
                />
              </CardContent>
            </Card>
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

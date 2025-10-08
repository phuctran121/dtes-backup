import { ArrowUpRight } from "lucide-react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { InternationalStandardCard } from "@/types/home.types";

interface InternationalStandardsSectionProps {
  data: InternationalStandardCard[];
}

export default function InternationalStandardsSection({
  data,
}: InternationalStandardsSectionProps) {
  return (
    <section className="w-full min-h-screen bg-white mx-auto py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        {/* Title */}
        <div className="mb-16 md:mb-24 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-snug">
            국제 기술 기준
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {data.map((card, index) => (
            <Card
              key={index}
              className={`relative p-6 sm:p-8 min-h-[480px] flex flex-col justify-between rounded-2xl transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg ${card.bg}`}
            >
              {/* Header */}
              <CardHeader className="relative flex flex-row justify-between items-start px-0">
                <Image
                  src={card.image}
                  alt="ISO Logo"
                  width={80}
                  height={80}
                  className="object-contain w-20 h-20 sm:size-22 "
                />
                <ArrowUpRight
                  className={`absolute -top-4 -right-2 size-16 lg:size-20 ${card.arrowColor}`}
                />
              </CardHeader>

              {/* Content */}
              <CardContent className="px-0">
                <CardTitle
                  className={`text-2xl sm:text-4xl font-bold mb-4 ${
                    index === 0 ? "text-white" : "text-card-inst-text"
                  }`}
                >
                  {card.title}
                </CardTitle>

                <ul className="space-y-2 text-sm sm:text-base font-semibold leading-relaxed">
                  {card.content.map((item, i) => (
                    <li
                      key={i}
                      className={
                        index === 0 ? "text-white" : "text-card-inst-text"
                      }
                    >
                      ・ {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

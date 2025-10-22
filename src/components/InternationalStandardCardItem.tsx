import { ArrowUpRight } from "lucide-react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { InternationalStandardCard } from "@/types/home.types";

interface InternationalStandardCardItemProps {
  card: InternationalStandardCard;
}

export default function InternationalStandardCardItem({
  card,
}: InternationalStandardCardItemProps) {
  return (
    <Card
      className={`group relative py-12 px-4 md:px-6 lg:px-8 min-h-[400px] md:min-h-[500px] lg:min-h-[540px] flex flex-col justify-between rounded-2xl transition-all
        duration-300 border-button-main hover:bg-card-3 hover:scale-[1.02] hover:shadow-lg`}
    >
      {/* Header */}
      <CardHeader className="relative flex flex-row justify-between items-start px-0">
        <Image
          src={card.image}
          alt="ISO Logo"
          width={120}
          height={120}
          loading="lazy"
          decoding="async"
          className="object-contain size-12 md:size-16 lg:size-18 transition-none group-hover:brightness-0 group-hover:invert"
        />
        <ArrowUpRight
          className={`absolute -top-2 md:-top-4 -right-2 size-12 md:size-16 lg:size-20 transition-all duration-300 text-card-inst-text group-hover:text-white`}
        />
      </CardHeader>

      {/* Content */}
      <CardContent className="px-0">
        <CardTitle
          className={`text-xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 lg:mb-8 transition-all duration-300 text-card-inst-text group-hover:text-white`}
        >
          {card.title}
        </CardTitle>

        <ul className="space-y-2 text-xs md:text-sm lg:text-base font-normal leading-relaxed">
          {card.content.map((item, i) => (
            <li
              key={i}
              className={`transition-all duration-300 text-card-inst-text group-hover:text-white`}
            >
              {card.content.length > 1 && "・"} {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

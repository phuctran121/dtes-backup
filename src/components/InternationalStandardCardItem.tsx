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
      className={`group relative  px-4 md:px-5 lg:px-6 min-h-[260px] md:min-h-[360px] lg:min-h-[400px] flex flex-col justify-between rounded-2xl transition-all
        duration-300 border-button-main hover:bg-card-3 hover:scale-[1.02] hover:shadow-lg ${
          card.py ? "py-6 md:py-8 lg:py-12" : ""
        }`}
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
          className={`object-contain size-12 md:size-16 lg:size-18 transition-none group-hover:brightness-0 group-hover:invert`}
        />
        <ArrowUpRight
          className={`absolute  ${
            card.py
              ? "size-12 md:size-14 lg:size-16 -top-2 md:-top-4 -right-2"
              : "size-8 md:size-10 lg:size-12 -right-2"
          } transition-all duration-300 text-card-inst-text group-hover:text-white`}
        />
      </CardHeader>

      {/* Content */}
      <CardContent className="px-0 ml-2">
        <CardTitle
          className={`text-xl md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-5 lg:mb-6 line-clamp-1 transition-all duration-300 text-card-inst-text group-hover:text-white`}
        >
          {card.title}
        </CardTitle>

        <ul className="space-y-1 text-xs md:text-sm lg:text-base font-normal leading-relaxed">
          {card.content.map((item, i) => (
            <li
              key={i}
              className={`transition-all duration-300 font-medium text-card-inst-text group-hover:text-white`}
            >
              {card.content.length > 1 && "・"} {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { WhyCard } from "@/types/home.types";

interface WhyCardItemProps {
  card: WhyCard;
}

export default function WhyCardItem({ card }: WhyCardItemProps) {
  return (
    <Card className="rounded-2xl border-0 shadow-[0_2px_10px_rgba(0,0,0,0.05)] bg-white relative hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)] transition-shadow duration-300">
      <CardContent className="flex flex-col items-start justify-between h-42 sm:h-50 lg:h-56 py-2 text-left relative">
        <div className="flex flex-col">
          <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-1 tracking-tighter line-clamp-1">
            {card.title}
          </h3>
          <p className="text-sub-title font-medium tracking-tighter text-sm md:text-base lg:text-lg ">
            {card.description}
          </p>
        </div>
        <Image
          src={card.image}
          alt={card.title}
          width={80}
          height={80}
          loading="lazy"
          decoding="async"
          className="size-16 sm:size-18 object-contain absolute bottom-2 right-4 sm:right-6"
        />
      </CardContent>
    </Card>
  );
}

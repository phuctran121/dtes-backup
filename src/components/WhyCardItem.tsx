import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { WhyCard } from "@/types/home.types";

interface WhyCardItemProps {
  card: WhyCard;
}

export default function WhyCardItem({ card }: WhyCardItemProps) {
  return (
    <Card className="rounded-2xl border-0 shadow-[0_2px_10px_rgba(0,0,0,0.05)] bg-white relative hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)] transition-shadow duration-300">
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
          loading="lazy"
          decoding="async"
          className="w-16 h-16 sm:w-20 sm:h-20 object-contain absolute bottom-4 right-4 sm:bottom-6 sm:right-6"
        />
      </CardContent>
    </Card>
  );
}

"use client";

import dynamic from "next/dynamic";
import { WhyDTESBoxItem } from "@/types/home.types";

const WhyDTESMobile = dynamic(() => import("./WhyDTESMobile"), {
  ssr: false,
});

export default function WhyDTESMobileWrapper({
  boxes,
}: {
  boxes: WhyDTESBoxItem[];
}) {
  return <WhyDTESMobile boxes={boxes} />;
}

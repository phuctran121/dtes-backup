"use client";

import Image from "next/image";

interface ESGFlowCardProps {
  step: {
    id: number;
    title: string;
    desc: string;
    icon: string;
  };
  isActive: boolean;
}

export default function ESGFlowCard({ step, isActive }: ESGFlowCardProps) {
  return (
    <div
      className={`rounded-3xl p-8 h-[350px] flex flex-col justify-between transition-colors duration-500 ease-in-out ${
        isActive
          ? "bg-gradient-to-b from-[#1C2DCE] via-[#1f46f4] to-[#8CBFFF] text-white shadow-2xl"
          : "bg-gradient-to-b from-[#CEE1FC] via-[#E5F0FE] to-[#EFF7FF] text-[#94A3B8]"
      }`}
    >
      <div className="flex items-center justify-between h-full p-0 md:p-4">
        <div className="flex flex-col justify-between h-full w-[45%]">
          <span
            className={`text-xl size-10 font-bold rounded-full flex items-center justify-center ${
              isActive
                ? "bg-white text-[#2563EB]"
                : "bg-[#D6E2FF] text-[#94A3B8]"
            }`}
          >
            {step.id}
          </span>
          <div className="flex flex-col items-start gap-4">
            <h3 className="text-xl md:text-2xl font-semibold">{step.title}</h3>
            <p className="text-xs md:text-base leading-snug">{step.desc}</p>
          </div>
        </div>
        <Image
          src={step.icon}
          alt={step.title}
          width={250}
          height={250}
          className="select-none pointer-events-none"
        />
      </div>
    </div>
  );
}

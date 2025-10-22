"use client";
import React, { memo } from "react";

interface WhyDTESBoxProps {
  title: string;
  text: string;
}

function WhyDTESBox({ title, text }: WhyDTESBoxProps) {
  return (
    <div className="rounded-4xl p-4 ring-2 ring-white/60 md:cursor-auto cursor-pointer">
      <div className="rounded-2xl bg-white order border-white/40 p-12 shadow-lg h-full flex flex-col justify-between gap-4">
        {title && (
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-black text-center">
            {title}
          </h3>
        )}
        {text && (
          <p className="text-black text-sm md:text-base lg:text-xl font-medium leading-relaxed">
            {text}
          </p>
        )}
      </div>
    </div>
  );
}

export default memo(WhyDTESBox);

"use client";
import React, { memo } from "react";

interface WhyDTESBoxProps {
  title: string;
  text: string;
  result?: boolean;
}

function WhyDTESBox({ title, text, result }: WhyDTESBoxProps) {
  return (
    <div className="rounded-4xl p-5 ring-1 ring-white md:cursor-auto cursor-pointer">
      <div className="rounded-2xl bg-white order border-white/40 py-8 px-6 shadow-lg h-full flex flex-col justify-between gap-5">
        {title && (
          <h3
            className={`text-base md:text-lg font-semibold text-black text-center tracking-tighter ${
              result ? "lg:mb-6 lg:text-2xl " : "lg:text-xl"
            }`}
          >
            {title}
          </h3>
        )}
        {text && (
          <p
            className={`text-black text-sm md:text-base leading-relaxed lg:text-lg font-medium ${
              result ? "tracking-tighter" : "tracking-tight"
            }`}
          >
            {text}
          </p>
        )}
      </div>
    </div>
  );
}

export default memo(WhyDTESBox);

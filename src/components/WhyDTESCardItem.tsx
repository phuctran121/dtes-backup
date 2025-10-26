"use client";
import React, { memo } from "react";

interface WhyDTESBoxProps {
  title: string;
  text: string;
}

function WhyDTESBox({ title, text }: WhyDTESBoxProps) {
  return (
    <div className="rounded-4xl p-5 ring-1 ring-white md:cursor-auto cursor-pointer">
      <div className="rounded-2xl bg-white order border-white/40 py-8 px-6 shadow-lg h-full flex flex-col justify-between gap-5">
        {title && (
          <h3 className="text-base md:text-lg lg:text-xl font-semibold text-black text-center tracking-tighter">
            {title}
          </h3>
        )}
        {text && (
          <p className="text-black text-sm md:text-base lg:text-lg font-medium leading-relaxed ">
            {text}
          </p>
        )}
      </div>
    </div>
  );
}

export default memo(WhyDTESBox);

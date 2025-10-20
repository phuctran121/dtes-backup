"use client";
import React, { memo } from "react";

interface WhyDTESBoxProps {
  title: string;
  text: string;
}

function WhyDTESBox({ title, text }: WhyDTESBoxProps) {
  return (
    <div className="rounded-3xl p-4 ring-1 ring-white/30 transition-all duration-200 hover:ring-white/60">
      <div className="rounded-2xl bg-white/95 border border-white/40 p-10 shadow-md h-full flex flex-col justify-between gap-4 backdrop-blur-sm">
        {title && (
          <h3 className="text-2xl font-semibold text-black text-center">
            {title}
          </h3>
        )}
        {text && (
          <p className="text-black text-lg font-medium leading-relaxed text-center">
            {text}
          </p>
        )}
      </div>
    </div>
  );
}

export default memo(WhyDTESBox);

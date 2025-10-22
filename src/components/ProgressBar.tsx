"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Step {
  id: number;
  label: string;
}

interface ProgressStepsProps {
  steps: Step[];
  activeIndex: number;
  onChange: (index: number) => void;
}

export function ProgressSteps({
  steps,
  activeIndex,
  onChange,
}: ProgressStepsProps) {
  return (
    <div className="relative w-full max-w-[760px] mx-auto mb-10">
      {/* Thanh line */}
      <div className="absolute top-1/2 left-[calc(10px)] right-[calc(10px)] -translate-y-1/2 h-[3px] bg-muted z-0" />

      <div className="flex justify-between items-center relative">
        {steps.map((step, i) => {
          const isActive = i === activeIndex;
          return (
            <div key={step.id} className="flex flex-col items-center">
              {/* Dot */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onChange(i)}
                className={cn(
                  "relative z-10 w-4 h-4 rounded-full transition-all duration-300 border-2",
                  isActive
                    ? "bg-primary border-primary shadow-[0_0_0_4px_rgba(59,130,246,0.1)]"
                    : "bg-muted border-muted-foreground/20 hover:border-muted-foreground/40"
                )}
              />
              {/* Label */}
              <span
                className={cn(
                  "mt-3 text-sm transition-colors",
                  isActive
                    ? "text-primary font-semibold"
                    : "text-muted-foreground"
                )}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

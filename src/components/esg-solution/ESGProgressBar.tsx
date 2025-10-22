"use client";

interface Step {
  id: number;
  label: string;
}

interface ESGProgressBarProps {
  steps: Step[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

export default function ESGProgressBar({
  steps,
  activeIndex,
  onSelect,
}: ESGProgressBarProps) {
  return (
    <div className="w-full max-w-[760px] px-6 mb-4 md:mb-6 lg:mb-10 ml-10">
      <div className="relative w-full">
        {/* line background */}
        <div className="absolute left-[20px] right-[50px] md:right-[80px] top-[3px] md:top-[4px] h-[2px] bg-[#E6F0FF] rounded-full" />
        <div className="relative flex justify-between items-center z-10">
          {steps.map((s, idx) => {
            const index = idx + 1;
            const isActive = index === activeIndex;
            return (
              <button
                key={s.id}
                onClick={() => onSelect(index)}
                aria-label={`Go to ${s.label}`}
                className="group flex flex-col items-center gap-3 bg-transparent border-0 p-0 cursor-pointer"
              >
                <div
                  className={`size-2 md:size-2.5 rounded-full transition-all duration-200 ${
                    isActive ? "bg-[#174CE6]" : "bg-[#CFE0FF]"
                  }`}
                />
                <span
                  className={`mt-3 text-base md:text-2xl leading-[22px] transition-colors duration-200 ${
                    isActive
                      ? "text-[#174CE6] font-semibold"
                      : "text-[#C7DCF8] font-medium"
                  }`}
                >
                  {s.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

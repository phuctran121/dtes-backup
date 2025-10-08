"use client";

import { motion, easeInOut } from "framer-motion";

interface HamburgerButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

const lineVariants = {
  closed: {
    opacity: 1,
    scaleX: 1,
    rotate: 0,
    y: 0,
    transition: { ease: easeInOut, duration: 0.3 },
  },
  openTop: {
    rotate: 45,
    y: 8,
    transition: { ease: easeInOut, duration: 0.3 },
  },
  openBottom: {
    rotate: -45,
    y: -8,
    transition: { ease: easeInOut, duration: 0.3 },
  },
  hidden: {
    opacity: 0,
    scaleX: 0,
    transition: { ease: easeInOut, duration: 0.3 },
  },
};

export default function HamburgerButton({
  isOpen,
  onToggle,
}: HamburgerButtonProps) {
  return (
    <button
      onClick={onToggle}
      className={`relative w-10 h-10 text-white hover:text-gray-900 focus:outline-none rounded-lg transition-colors duration-200 flex items-center justify-center ${
        isOpen ? "z-[60]" : "z-50"
      }`}
      aria-label="Toggle menu"
    >
      <div className="w-6 h-6 relative">
        <motion.span
          className={`absolute left-0 top-1 w-6 h-0.5 transition-colors duration-300 ${
            isOpen ? "bg-black" : "bg-white"
          }`}
          variants={lineVariants}
          animate={isOpen ? "openTop" : "closed"}
        />
        <motion.span
          className={`absolute left-0 top-3 w-6 h-0.5 transition-colors duration-300 ${
            isOpen ? "bg-black" : "bg-white"
          }`}
          variants={lineVariants}
          animate={isOpen ? "hidden" : "closed"}
        />
        <motion.span
          className={`absolute left-0 top-5 w-6 h-0.5 bg-black transition-colors duration-300 ${
            isOpen ? "bg-black" : "bg-white"
          }`}
          variants={lineVariants}
          animate={isOpen ? "openBottom" : "closed"}
        />
      </div>
    </button>
  );
}

"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";
import HamburgerButton from "@/components/HamburgerButton";
import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";
import MobileSidebar from "@/components/MobileSidebar";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const menuItems = [
    { name: "DTSE란?", href: "/" },
    { name: "지금 왜", href: "/about" },
    { name: "우리의 솔루션", href: "/" },
    { name: "영향력과 그 이상", href: "/" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        animate={{
          backgroundColor: isScrolled ? "rgba(0,5,77,0.4)" : "rgba(0,0,0,0)",
          backdropFilter: isScrolled ? "blur(10px)" : "blur(0px)",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-40 bg-none h-fit "
      >
        <div className="container mx-auto">
          <motion.div
            animate={{
              height: isScrolled ? "50px" : "88px",
            }}
            className="flex justify-between items-center h-20"
          >
            {/* Logo */}
            <div className="flex items-center justify-center gap-2">
              <Image
                src="/assets/icons/DTES_Logo.svg"
                alt="DTES Logo"
                width={64}
                height={64}
                loading="eager"
                priority
                draggable={false}
                className={`text-white logo  p-1 object-contain trasition-all duration-300 ${
                  isScrolled ? "size-10" : "size-12"
                }`}
              />
              <span
                className={`font-semibold  text-white transition-all duration-300 ${
                  isScrolled ? "text-xl" : "text-2xl"
                }`}
              >
                DTES
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-8 ml-10">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-white/60 hover:text-blue-600 px-3 py-2 transition-all duration-300 ${
                    isScrolled ? "text-sm" : "text-base "
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <div className="flex gap-4">
                <Button
                  className={`bg-transparent hover:bg-transparent text-white px-6 py-2 transition-all duration-300 cursor-pointer ${
                    isScrolled ? "text-sm" : "text-base "
                  }`}
                >
                  로그인
                </Button>
                <Button
                  className={`bg-card-3 text-white rounded-4xl transition-all duration-300 cursor-pointer ${
                    isScrolled ? "text-sm px-4 py-1" : "text-base px-6 py-2"
                  }`}
                >
                  무료 체험하기
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      <MobileSidebar
        isMenuOpen={isMenuOpen}
        onClose={closeMenu}
        menuItems={menuItems}
      />

      <motion.div
        animate={{
          height: isScrolled ? (isMenuOpen ? "88px" : "50px") : "88px",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="w-full z-[60] lg:hidden fixed top-0 left-0 right-0"
      >
        <div className="container mx-auto px-4 flex items-center justify-end h-full">
          <HamburgerButton
            isOpen={isMenuOpen}
            onToggle={() => setIsMenuOpen((prev) => !prev)}
          />
        </div>
      </motion.div>
    </>
  );
}

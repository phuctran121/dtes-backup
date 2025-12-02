"use client";
import { Button } from "@/components/ui/button";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import HamburgerButton from "@/components/HamburgerButton";
import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";
import { Suspense } from "react";

import dynamic from "next/dynamic";
const MobileSidebar = dynamic(() => import("@/components/MobileSidebar"), {
  ssr: false,
  loading: () => null,
});

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const navStyle = useMemo(
    () => ({
      backgroundColor: isScrolled ? "rgba(0,5,77,0.4)" : "rgba(0,0,0,0)",
      backdropFilter: isScrolled ? "blur(10px)" : "blur(0px)",
    }),
    [isScrolled]
  );

  // Throttle scroll
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = useMemo(
    () => [
      { name: "디테스 소개", href: "/" },
      { name: "디지털 트윈 플랫폼", href: "/" },
      { name: "ESG 컨설팅 & 솔루션", href: "/esg-solution" },
      { name: "AI 온톨로지 플랫폼", href: "/ai-ontology-platform" },
    ],
    []
  );

  return (
    <>
      <motion.nav
        animate={navStyle}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-40 bg-none h-fit "
      >
        <div className="container px-4 md:px-6 lg:px-8 mx-auto">
          <motion.div
            animate={{
              height: isScrolled ? "50px" : "80px",
            }}
            className="flex justify-between items-center h-20"
          >
            {/* Logo */}
            <Link
              href={"/"}
              className="flex items-center justify-center gap-2 cursor-pointer"
            >
              <Image
                src="/assets/icons/DTES_Logo.svg"
                alt="DTES Logo"
                width={64}
                height={64}
                loading="eager"
                priority
                draggable={false}
                className={`text-white logo  p-1 object-contain trasition-all duration-300 ${
                  isScrolled ? "size-8" : "size-10"
                }`}
              />
              <span
                className={`font-semibold  text-white transition-all duration-300 ${
                  isScrolled ? "text-xl" : "text-2xl"
                }`}
              >
                DTES
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-8 ml-10">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-[#9B9CB0] font-medium tracking-wide hover:text-blue-600 px-3 py-2 transition-all duration-300 ${
                    isScrolled ? "text-sm text-white/80" : "text-base "
                  }`}
                  prefetch
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

      {isMenuOpen && (
        <Suspense fallback={null}>
          <MobileSidebar
            isMenuOpen={isMenuOpen}
            onClose={closeMenu}
            menuItems={menuItems}
          />
        </Suspense>
      )}

      <motion.div
        animate={{
          height: isScrolled ? (isMenuOpen ? "88px" : "50px") : "88px",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="w-full z-[60] lg:hidden fixed top-0 left-0 right-0 pointer-events-none"
      >
        <div className="container mx-auto px-4 flex items-center justify-end h-full">
          <div className="pointer-events-auto">
            <HamburgerButton
              isOpen={isMenuOpen}
              onToggle={() => setIsMenuOpen((prev) => !prev)}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
}

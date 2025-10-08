"use client";

import { motion, AnimatePresence, easeInOut } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface MobileSidebarProps {
  isMenuOpen: boolean;
  onClose: () => void;
  menuItems: { name: string; href: string }[];
}

export default function MobileSidebar({
  isMenuOpen,
  onClose,
  menuItems,
}: MobileSidebarProps) {
  const sidebarVariants = {
    closed: { x: "100%", transition: { ease: easeInOut, duration: 0.3 } },
    open: { x: 0, transition: { ease: easeInOut, duration: 0.3 } },
  };

  const overlayVariants = {
    closed: { opacity: 0, transition: { ease: easeInOut, duration: 0.3 } },
    open: { opacity: 1, transition: { ease: easeInOut, duration: 0.3 } },
  };

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed top-0 right-0 z-50 h-full w-80 min-w-[40vw] bg-white shadow-2xl lg:hidden"
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Sidebar */}

            <div className="flex items-center p-6 border-b border-gray-100">
              {/* Logo */}
              <div className="flex items-center justify-center">
                <Image
                  src="/assets/home/DTEs.jpg"
                  alt="DTES Logo"
                  width={48}
                  height={48}
                  draggable={false}
                  className="text-white rounded-full p-1 object-contain trasition-all duration-300"
                />
                <span
                  className={`font-semibold  text-black text-2xl transition-all duration-300 
                  }`}
                >
                  DTES
                </span>
              </div>
            </div>

            <div className="flex flex-col">
              <nav className="flex-1 px-6 py-8">
                <ul className="space-y-2">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index, ease: easeInOut }}
                    >
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="flex items-center px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 text-base font-medium"
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <div className="p-6 border-t border-gray-100">
                <div className="text-center mb-6">
                  <Link href={"#"}>로그인</Link>
                </div>
                <Button
                  className="w-full bg-card-3 hover:bg-card-3 text-white py-3 text-base font-medium transition-colors duration-200"
                  onClick={onClose}
                >
                  무료 체험하기
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import Image from "next/image";
import { BookOpen, Download } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left Side */}
          <div className="lg:col-span-9 flex flex-col gap-6">
            {/* Logo */}
            <div className="flex items-center justify-start -ml-[6px] select-none pointer-events-none gap-2">
              <Image
                src="/assets/icons/DTES_Logo.svg"
                alt="DTES Logo"
                draggable={false}
                width={80}
                height={80}
                loading="lazy"
                decoding="async"
                className="text-white p-1 object-contain size-11"
              />
              <span className="font-semibold text-2xl text-white">DTES</span>
            </div>
            {/* Contact Info */}
            <div className="flex flex-col lg:flex-row gap-6 items-center text-xs sm:text-base leading-relaxed text-white/90">
              <div className="flex flex-wrap sm:flex-nowrap w-full lg:w-fit flex-row gap-4">
                {/* Column 1 */}
                <div className="space-y-1">
                  <p>대표이사 :</p>
                  <p>대표전화 : 0000-0000</p>
                  <p>개인정보책임자 :</p>
                </div>
                {/* Column 2 */}
                <div className="space-y-1">
                  <p>사업자등록번호 : 000-000-000</p>
                  <p>팩스 : 000-0000-0000</p>
                  <p>연락처 : DTES@contact.com</p>
                </div>
                {/* Column 3 */}
                <div className="space-y-1">
                  <p>주소 :</p>
                  <p>메일 : contact@dtes.kr</p>
                </div>
              </div>

              {/* Copyright */}
              <div className="space-y-1 ml-24 hidden lg:block">
                <p className="font-semibold text-white">개인정보처리방침</p>
                <p className="text-white/70 text-xs sm:text-base">
                  Copyright © DTES All rights reserved.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-3 flex justify-between lg:justify-end border-t pt-6 lg:pt-0 lg:border-0 border-white">
            {/* Copyright */}
            <div className="space-y-1 lg:hidden block">
              <p className="font-semibold text-white">개인정보처리방침</p>
              <p className="text-white/70 text-xs sm:text-base">
                Copyright © DTES All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-8">
              <div className="flex flex-col items-center space-y-2">
                <div className="size-12 sm:size-14 rounded-full bg-white flex items-center justify-center hover:scale-105 transition-transform">
                  <BookOpen className="text-black w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <p className="text-xs sm:text-base text-center leading-tight">
                  회사소개서
                </p>
                <p className="text-xs sm:text-base text-center leading-tight">
                  다운로드
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="size-12 sm:size-14 rounded-full bg-white flex items-center justify-center hover:scale-105 transition-transform">
                  <Download className="text-black w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <p className="text-xs sm:text-base text-center leading-tight">
                  e-book
                </p>
                <p className="text-xs sm:text-base text-center leading-tight">
                  보기
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

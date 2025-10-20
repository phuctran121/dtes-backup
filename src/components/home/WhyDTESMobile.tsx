"use client";

import React, { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/bundle";
import WhyDTESBox from "../WhyDTESCardItem";

interface WhyDTESMobileProps {
  boxes: { title: string; text: string }[];
}

function WhyDTESMobile({ boxes }: WhyDTESMobileProps) {
  return (
    <div className="lg:hidden w-full select-none">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={24}
        slidesPerView={1}
        className="pb-10 custom-swiper will-change-transform"
      >
        {boxes.map((b, i) => (
          <SwiperSlide key={i}>
            <div className="mx-4 py-4">
              <WhyDTESBox title={b.title} text={b.text} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default memo(WhyDTESMobile);

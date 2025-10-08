"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import WhyDTESBox from "./WhyDTESBox";

export default function WhyDTESMobile({
  boxes,
}: {
  boxes: { title: string; text: string }[];
}) {
  return (
    <div className="lg:hidden">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={24}
        slidesPerView={1}
        initialSlide={2}
        className="pb-10 custom-swiper"
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

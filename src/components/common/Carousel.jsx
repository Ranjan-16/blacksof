"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Carousel = ({ videoData = [] }) => {
  return (
    <div className="my-4">
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="cursor-grab"
      >
        {videoData.map(({ label, videoSrc, poster }, index) => (
          <SwiperSlide key={index} className="flex pb-16 flex-col justify-end">
            <div className="text-white flex flex-col justify-between text-center">
              <video
                autoPlay
                loop
                playsInline
                muted
                poster={poster}
                className="object-cover mt-10 w-full rounded-xl"
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <span className="sg-translate">{label}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;

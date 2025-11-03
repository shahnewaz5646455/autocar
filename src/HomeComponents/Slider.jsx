"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination"; // Required for dots

export default function Slider() {
  return (
    <div className="slider-container container">
      <Swiper
        //   modules={[Autoplay]}
        modules={[Autoplay, Pagination]} // ← FIXED: Include Pagination
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={800}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        className="slider"
      >
        <SwiperSlide className="swiper-slide">
          <img src="slider1.png" alt="Slide 1" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="slider1.png" alt="Slide 2" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="slider1.png" alt="Slide 3" />
        </SwiperSlide>
      </Swiper>

      <div className="another-img">
        <img src="another-img.png" alt="" />
      </div>
    </div>
  );
}

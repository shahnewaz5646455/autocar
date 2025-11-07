"use client";
import React, { useRef } from "react";
import StarIcon, {
  ArrowIcon,
  ArrowLeft,
  DelibaryIcon,
  LocationIcon,
} from "./StarIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
export default function FeaturedProduct() {
  return (
    <div className="product">
      <div className="feature-left d-flex flex-column ">
        <div className="titles">
          <h2>Featured Product</h2>
          <div>
            <div className="swiper-button-prev">
              <img src="arrowicon.svg" alt="" />
            </div>

            <div className="swiper-button-next">
              <img src="arrowicon.svg" alt="" />
            </div>
          </div>
        </div>
        <Swiper
          //   modules={[Autoplay]}
          modules={[ Navigation]} // ← FIXED: Include Pagination
          navigation={{
            // connect buttons
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          speed={800}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          className="slider"
        >
          <SwiperSlide className="slide ">
            <Card></Card>
          </SwiperSlide>
          <SwiperSlide className="slide ">
            <Card></Card>
          </SwiperSlide>
          <SwiperSlide className="slide ">
            <Card></Card>
          </SwiperSlide>
          <SwiperSlide className="slide ">
            <Card></Card>
          </SwiperSlide>
          <SwiperSlide className="slide ">
            <Card></Card>
          </SwiperSlide>
          <SwiperSlide className="slide ">
            <Card></Card>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export const Card = () => {
  return (
    <div className="card d-flex flex-column align-items-center">
      <div className="card-image">
        <div className="img-container">
          <img src="product1.png" alt="" />
        </div>
      </div>

      <div className="info ">
        <div className="star-reviews">
          <div className="reviews">
            <StarIcon className="star-icon"></StarIcon>
            <p>5.0 (3 Reviews) </p>
          </div>
          <div className="location">
            <LocationIcon className="location-icon"></LocationIcon>
            <span>Dhaka</span>
          </div>
        </div>
        <div className="heading">
          <h2>For Harley Sportster 883 XL1200 X48 Dyna CVO...</h2>

          <p>
            Manufacturer:<span>ZZVF</span>{" "}
          </p>
          <p>
            Part Number: <span>ZZVF</span>{" "}
          </p>
          <p>
            Vehicle Model: <span>i20, i20 Elite</span>{" "}
          </p>
        </div>

        <div className="pricing">
          <div className="price d-flex align-items-center">
            <h2 className="main">1,024 Tk</h2>
            <h2 className="second">1,024 Tk</h2>
          </div>

          <DelibaryIcon className="delibary-icon"></DelibaryIcon>
        </div>
      </div>
    </div>
  );
};

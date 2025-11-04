import React, { useRef } from "react";
import StarIcon, {
  ArrowIcon,
  ArrowLeft,
  DelibaryIcon,
  LocationIcon,
} from "./StarIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination"; // Required for dots
export default function Feature() {
  const leftPrevRef = useRef(null);
  const leftNextRef = useRef(null);

  // refs for right slider buttons
  const rightPrevRef = useRef(null);
  const rightNextRef = useRef(null);

  return (
    <div className="container">
      <div className="feature d-flex">
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
            modules={[Autoplay, Navigation]} // ← FIXED: Include Pagination
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
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 1,
                spaceBetween: 50,
              },
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            className="slider"
          >
            <SwiperSlide className="slide d-flex flex-row">
              <Card></Card>
              <Card></Card>
              <Card></Card>
            </SwiperSlide>
            <SwiperSlide className="slide d-flex flex-row">
              <Card></Card>
              <Card></Card>
              <Card></Card>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="feature-right d-none">
          <div className="titles">
            <h2>Featured Product</h2>
            <div>
              <div className="swiper-button-prev-shop">
                <img src="arrowicon.svg" alt="" />
              </div>

              <div className="swiper-button-next-shop">
                <img src="arrowicon.svg" alt="" />
              </div>
            </div>
          </div>

          <div className="shops">
            <Swiper
              //   modules={[Autoplay]}
              modules={[Autoplay, Navigation]} // ← FIXED: Include Pagination
              navigation={{
                // connect buttons
                nextEl: ".swiper-button-next-shop",
                prevEl: ".swiper-button-prev-shop",
              }}
              spaceBetween={10}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
              }}
              speed={800}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              className="slider"
            >
              <SwiperSlide className="slide">
                <ShopCard></ShopCard>
                <ShopCard></ShopCard>
                <ShopCard></ShopCard>
                <ShopCard></ShopCard>
              </SwiperSlide>
              <SwiperSlide className="slide">
                <ShopCard></ShopCard>
                <ShopCard></ShopCard>
                <ShopCard></ShopCard>
                <ShopCard></ShopCard>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

const Card = () => {
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

const ShopCard = () => {
  return (
    <div className="shop">
      <div className="right">
        <div className="img">
          <img src="nextstage.svg" alt="" />
        </div>
        <div className="info">
          <h2>Nextage</h2>
          <p>
            <span>
              <StarIcon className="star-icon"></StarIcon>
            </span>
            5.0 (210 Reviews){" "}
          </p>
        </div>
      </div>
      <div className="left">
        <LocationIcon className="location-icon"></LocationIcon>
        <span>Dhaka</span>
      </div>
    </div>
  );
};

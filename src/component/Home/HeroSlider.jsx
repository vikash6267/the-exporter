import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { Autoplay, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";
import { useState } from "react";

const images = [
  "https://saivleen.com/wp-content/uploads/2024/05/benefits-of-wholegrains-1200x628-facebook-1200x628-1.jpg",
  "https://saivleen.com/wp-content/uploads/2024/05/gourmet-chocolate-dessert-wooden-table-decorated-with-spices-generated-by-ai.png",
  "https://saivleen.com/wp-content/uploads/2024/05/AdobeStock_191057762.jpeg",
  "https://saivleen.com/wp-content/uploads/2024/05/16-june-blog.jpg",
  "https://saivleen.com/wp-content/uploads/2024/05/types-of-millets-to-eat-in-2024-bajra-ragi-samai.jpg",
];

function HeroSlider() {
  return (
    <div className="relative w-full lg:h-[80vh] md:h-[70vh] h-[50vh]">
      <Swiper
        modules={[Autoplay, EffectFade]}
        spaceBetween={30}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="absolute inset-0 w-full h-full"
      >
        {images.map((url, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${url})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

      <div className="absolute inset-0 flex items-start justify-center z-20 p-4 lg:w-[58vw] w-[100vw] flex-col ">
        <div className="text-white">
          <h1 className="text-xl font-bold  mb-4">
            Welcome to{" "}
            <span className="flip-text text-[#e2571a]">
              The Bharat Exporter
            </span>
          </h1>
          <p className="text-3xl sm:text-xl md:text-xl lg:text-6xl xl:text-7xl font-bold font-sans">
            CULINARY EXPORTS REDEFINING PALATES WORLDWIDE
          </p>
          <p className="text-[12x] ">
            We are a premier food exporter specializing in delivering the finest
            culinary delights to discerning palates around the world
          </p>
        </div>

        <Link to="/product" className=" bg-[#e2571a] p-2 mt-5 px-5 font-sans font-semibold uppercase hover:bg-[#5A5A5A] hover:text-white transition duration-300 ease-in-out">
          View All Product
        </Link>
      </div>
    </div>
  );
}

export default HeroSlider;

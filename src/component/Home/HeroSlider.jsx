import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { Autoplay, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function HeroSlider() {
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const [slider, setSlider] = useState([]);

  const getAllBlogs = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/hero/getAll`);

      if (response?.data?.success) {
        setSlider(response.data.sliders);
      }
      console.log(response.data.sliders);
    } catch (error) {
      console.log(error);
      console.log("Something went wrong");
    }
  };
  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <div className="relative w-full lg:h-[80vh] md:h-[70vh] h-[50vh]">
      <Swiper
        modules={[Autoplay, EffectFade]}
        spaceBetween={30}
        effect="fade"
        autoplay={{
          delay: 1000,
          disableOnInteraction: true,
        }}
        loop={true}
        className="absolute inset-0 w-full h-full"
      >
        {slider?.map((url, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${url?.image})` }}
            ></div>

            <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

            <div className="absolute inset-0 flex items-start justify-center z-20 p-4 lg:w-[58vw] w-[100vw] flex-col ">
              <div className="text-white">
                <h1 className="text-xl font-bold  mb-4">
                  Welcome to{" "}
                  <span className="flip-text text-[#e2571a]">
                    The Bharat Exporter
                  </span>
                </h1>

                <p className="text-3xl  sm:text-xl md:text-xl lg:text-6xl xl:text-7xl font-bold font-sans">
                  {url.title}
                </p>

                <p className="text-xl mt">{url.desc}</p>
              </div>

              <Link
                to="/product"
                className=" bg-[#e2571a] p-2 mt-5 px-5 font-sans font-semibold uppercase hover:bg-[#5A5A5A] hover:text-white transition duration-300 ease-in-out"
              >
                View All Product
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeroSlider;

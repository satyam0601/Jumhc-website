import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

import "./Slider.css";
import SwiperCore, { Navigation } from "swiper/core";
SwiperCore.use([Navigation]);

function Slider() {
  return (
    <>
      <Swiper navigation={true} loop={true} className="mySwiper">
        <SwiperSlide>
          <img src="images/img1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/img2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/img3.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import "./index.scss";
import SwiperCore, { Autoplay,Pagination,Navigation} from 'swiper/core';

SwiperCore.use([Autoplay,Pagination,Navigation]);

function Carousel() {  
  return (
    <>
      <Swiper 
      spaceBetween={30} 
      centeredSlides={true} 
      autoplay={{"delay": 2500, "disableOnInteraction": false}} 
      pagination={{ "clickable": true }} 
      navigation={true} 
      className="mySwiper">
        <SwiperSlide><img src='./images/slider1.jpg' alt='logo' /></SwiperSlide>
        <SwiperSlide><img src='./images/slider2.jpg' alt='logo' /></SwiperSlide>
        <SwiperSlide><img src='./images/slider3.jpg' alt='logo' /></SwiperSlide>
    </Swiper>
    </>
  )
}

export default Carousel
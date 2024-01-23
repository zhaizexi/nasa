"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
interface Props {
  members: string[];
}

const MemberSection: React.FC<Props> = ({ members }) => {
  return (
    <>
      <Swiper
        loop={true}
        direction={"vertical"}
        slidesPerView={9}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper h-full"
      >
        {members.map((member, index) => (
          <SwiperSlide key={index} className="h-[60px] text-[40px] flex items-center text-white select-none justify-center lg:justify-start">
            {member}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MemberSection;

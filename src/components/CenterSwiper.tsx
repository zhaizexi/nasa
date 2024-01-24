"use client";

import React, { useRef, useState, memo } from "react";
import { Swiper, SwiperClass, SwiperRef } from "swiper/react";
import {} from "swiper/modules";
import Button from "@mui/material/Button";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import { SwiperOptions } from "swiper/types";

interface Props<T = any> {
  title: string;
  items: T[];
  slideProps?: any;
  renderItem: (item: T,center: boolean) => JSX.Element;
  slidesPerView?: number;
  center?: boolean;
  breakpoints?: {
    [width: number]: SwiperOptions;
  };
}

export default memo(function CenterSwiper({
  items,
  renderItem,
  title,
  slideProps,
  slidesPerView=2,
  center = true,
  breakpoints = {
    1440: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
  }
}: Props) {
  const swiperRef = useRef<SwiperRef | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveIndex(swiper.activeIndex);
  };
  const handleNext = () => {
    swiperRef.current?.swiper.slideNext();
  };
  const handlePrev = () => {
    swiperRef.current?.swiper.slidePrev();
  };
  return (
    <div className={`relative ${title ? "pt-16" : ""} px-4 xl:px-0`}>
      <Swiper
        ref={swiperRef}
        slidesPerView={slidesPerView}
        spaceBetween={0}
        centeredSlides={center}
        onSlideChange={handleSlideChange}
        breakpoints={breakpoints}
        modules={[]}
        className="mySwiper"
      >
        {items.map((item) => {
          return renderItem(item,center);
        })}
      </Swiper>
      <div className="absolute top-0 left-0 w-full h-full">
        <h2 className={`absolute top-0 ${center ? "left-4 lg:left-[16.7%] 2xl:left-1/4" : ""} z-10 font-primary text-gray-dark lg:text-6xl text-3xl font-semibold leading-normal tracking-normal uppercase`}>
          {title}
        </h2>
        <div className="container mx-auto h-full f-full relative hidden xl:block">
          {activeIndex > 0 && (
            <Button
              variant="contained"
              size="large"
              className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 min-w-0 bg-jpl-red text-white z-20"
              onClick={handlePrev}
            >
              <KeyboardArrowLeftOutlinedIcon />
            </Button>
          )}
          {activeIndex < items.length - 1 && (
            <Button
              variant="contained"
              size="large"
              className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 min-w-0 bg-jpl-red text-white z-20"
              onClick={handleNext}
            >
              <KeyboardArrowRightOutlinedIcon />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
});

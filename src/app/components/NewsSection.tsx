"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperClass, SwiperRef, SwiperSlide } from "swiper/react";

// import required modules
import {} from "swiper/modules";
import Image from "next/image";
import Button from "@mui/material/Button";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
interface Props {
  news: News[];
}

export default function NewsSection(props: Props) {
  const { news } = props;
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
    <section className="mt-20">
      <div className="relative pt-16 px-4 xl:px-0">
        <Swiper
          ref={swiperRef}
          slidesPerView={2}
          spaceBetween={0}
          centeredSlides={true}
          onSlideChange={handleSlideChange}
          breakpoints={{
            1440: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
          }}
          modules={[]}
          className="mySwiper"
        >
          {news.map((news, index) => (
            <SwiperSlide
              key={index}
              className="pr-10 group -translate-x-1/2 select-none"
            >
              <div className="block group-[.swiper-slide-active]:hidden group-[.swiper-slide-next]:hidden absolute w-full h-full bg-white/60 z-10"></div>
              <div className="group/item cursor-pointer">
                <div className="bg-gray-dark relative mb-6 overflow-hidden lg:mb-10 aspect-video">
                  <Image
                    className="transition-all duration-300 scale-105 delay-200 group-hover/item:scale-100"
                    src={news.img}
                    alt={news.title}
                    priority={false}
                    unoptimized
                    fill={true}
                  />
                </div>
                <div className="transition-all duration-300 delay-200  group-hover/item:-translate-y-5">
                  <div className="flex flex-wrap">
                    <p className="text-subtitle divide-gray-mid flex divide-x mb-4">
                      <span>{news.subject}</span>{" "}
                      <span className="sr-only">.</span>
                    </p>
                  </div>{" "}
                  <p className="text-gray-dark text-xl font-medium leading-tight tracking-tight lg:text-3xl">
                    {news.title}
                  </p>
                </div>
                <div className="absolute bottom-0 text-jpl-red -translate-x-4 delay-200 opacity-0 group-hover/item:translate-x-0 group-hover/item:opacity-100 text-2xl leading-normal transition duration-300 ">
                  <svg
                    width="26"
                    height="16"
                    viewBox="0 0 26 16"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    className="IconArrow"
                  >
                    <path
                      d="M17.935.929L25.006 8l-7.071 7.071-1.414-1.414L21.177 9H1V7h20.177l-4.656-4.657L17.935.93z"
                      fill="currentColor"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute top-0 left-0 w-full h-full">
          <h2 className="absolute top-0 left-4 lg:left-[16.7%] 2xl:left-1/4 z-10 font-primary text-gray-dark lg:text-6xl text-3xl font-semibold leading-normal tracking-normal uppercase">
            Latest News
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
            {activeIndex < news.length - 1 && (
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
    </section>
  );
}

"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperRef, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Button from "@mui/material/Button";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import { Target, Mission } from '@prisma/client';
interface Props {
  celestials: Array<Target & {
    missions: {
        mission: Mission;
    }[];
}>;
}

const CelestialSection: React.FC<Props> = ({ celestials }) => {
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
    <div className="lg:mt-0 lg:mb-0 mb-14 mt-3 pt-10 relative">
      <Swiper
        ref={swiperRef}
        loop={true}
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides={true}
        onSlideChange={handleSlideChange}
        breakpoints={{
          1440: {
            slidesPerView: 5,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        modules={[]}
        className="mySwiper"
      >
        {celestials.map((celestial, index) => (
          <SwiperSlide key={index} className="pr-10 group select-none">
            <div className="block group-[.swiper-slide-active]:hidden group-[.swiper-slide-next]:hidden group-[.swiper-slide-prev]:hidden absolute w-full h-full bg-black/60 z-10"></div>
            <div className="group/item cursor-pointer">
              <div className="bg-gray-dark relative mb-3 aspect-square">
                <Image
                  className="transition-all duration-300 scale-100 delay-200 group-[.swiper-slide-active]:scale-110"
                  src={celestial.imgUrl}
                  alt={celestial.name}
                  priority={false}
                  unoptimized
                  fill={true}
                />
              </div>
              <div className="opacity-0 group-[.swiper-slide-active]:opacity-100 group-[.swiper-slide-next]:opacity-100 group-[.swiper-slide-prev]:opacity-100 relative text-wrapper -mt-18 pt-22 w-3/5 h-auto pl-6 mx-auto">
                <div className="absolute left-0 top-0 h-full w-[1px] bg-gradient-to-t from-white/40 to-transparent to-80%"></div>
                <div className="shifted-text group-hover:-mt-3 group-[.swiper-slide-active]:-mt-3 lg:mt-0 -mt-3 transition-all duration-500 ease-in-out">
                  <p className="mb-1 text-3xl font-semibold">
                    {celestial.name}
                  </p>{" "}
                  <p className="text-gray-light-mid mb-1 text-lg whitespace-nowrap">
                    Current missions: {celestial.missions.filter(m => m.mission.status === 'current').length}
                  </p>{" "}
                  <p className="text-gray-light-mid mb-2 text-lg whitespace-nowrap">
                    Past missions: {celestial.missions.filter(m => m.mission.status === 'past').length}
                  </p>{" "}
                  <div className="explore-text group-hover:opacity-100 group-[.swiper-slide-active]:opacity-100 group-hover:ml-0 group-[.swiper-slide-active]:ml-0 lg:-ml-3 lg:opacity-0 ml-0 transition-all duration-300 ease-in">
                    <span className="text-subtitle text-jpl-red-light flex items-center">
                      Explore
                      <svg
                        width="8"
                        height="14"
                        viewBox="0 0 8 14"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        focusable="false"
                        className="IconCaret ml-1 text-base"
                      >
                        <path
                          d="M7.864 7.004L1.5 13.368.086 11.954l4.948-4.95-4.948-4.95L1.5.64l6.364 6.364z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="container mx-auto h-full f-full relative hidden xl:block">
          <Button
            variant="contained"
            size="large"
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 min-w-0 bg-jpl-red text-white z-20"
            onClick={handlePrev}
          >
            <KeyboardArrowLeftOutlinedIcon />
          </Button>
          <Button
            variant="contained"
            size="large"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 min-w-0 bg-jpl-red text-white z-20"
            onClick={handleNext}
          >
            <KeyboardArrowRightOutlinedIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CelestialSection;

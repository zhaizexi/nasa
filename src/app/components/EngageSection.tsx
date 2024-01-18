"use client";

import { SwiperSlide } from "swiper/react";
import {} from "swiper/modules";
import Image from "next/image";
import CenterSwiper from "@/components/CenterSwiper";
interface Props {
  engages: Engage[];
}

const renderEnage = (engage: Engage) => {
  return (
    <SwiperSlide
      key={engage.name}
      className="pr-10 group !-translate-x-1/2 select-none"
    >
      <div className="block group-[.swiper-slide-active]:hidden group-[.swiper-slide-next]:hidden absolute left-0 right-10 h-full bg-white/60 z-10"></div>
      <div className="group/item cursor-pointer">
        <div className="bg-gray-dark relative overflow-hidden aspect-[490/430]">
          <Image
            className="transition-all duration-300 scale-105 delay-200 group-hover/item:scale-100"
            src={engage.img}
            alt={engage.name}
            priority={false}
            unoptimized
            fill={true}
          />
          <div className="absolute bottom-0 left-0 right-0 text-contrast px-6 py-4 text-white xl:px-10 xl:py-6 lg:px-8 transition-all duration-300 delay-200  group-hover/item:-translate-y-5">
            <div className="relative">
              <div className="flex flex-wrap">
                <p className="text-subtitle divide-gray-mid flex divide-x mb-4">
                  <span>{engage.subject}</span>{" "}
                  <span className="sr-only">.</span>
                </p>
              </div>{" "}
              <p className="text-gray-dark text-xl font-medium leading-tight tracking-tight lg:text-3xl">
                {engage.name}
              </p>
              <div className="absolute bottom-0 text-white -translate-x-4 delay-200 opacity-0 group-hover/item:translate-x-0 group-hover/item:opacity-100 text-2xl leading-normal transition duration-300 ">
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
          </div>
        </div>
      </div>
    </SwiperSlide>
  );
};

export default function EngageSection(props: Props) {
  return (
    <CenterSwiper
      title="ENGAGE WITH JPL"
      items={props.engages}
      renderItem={renderEnage}
    />
  );
}

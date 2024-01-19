'use client';

import { SwiperSlide } from "swiper/react";
import {} from "swiper/modules";
import Image from "next/image";
import CenterSwiper from "@/components/CenterSwiper";
import { News, Topic } from '@prisma/client';

type NewsType = News & {topic: Topic|null}
interface Props {
  news: NewsType[];
}

const renderNews= (news:NewsType) => {
  return (
    <SwiperSlide
      key={news.title}
      className="pr-10 group -translate-x-1/2 select-none"
    >
      <div className="block group-[.swiper-slide-active]:hidden group-[.swiper-slide-next]:hidden absolute w-full h-full bg-white/60 z-10"></div>
      <div className="group/item cursor-pointer">
        <div className="bg-gray-dark relative mb-6 overflow-hidden lg:mb-10 aspect-video">
          <Image
            className="transition-all duration-300 scale-105 delay-200 group-hover/item:scale-100"
            src={news.maskUrl}
            alt={news.title}
            priority={false}
            unoptimized
            fill={true}
          />
        </div>
        <div className="transition-all duration-300 delay-200  group-hover/item:-translate-y-5">
          <div className="flex flex-wrap">
            <p className="text-subtitle divide-gray-mid flex divide-x mb-4">
              <span>{news.topic?.title}</span> <span className="sr-only">.</span>
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
  );
};

export default function NewsSection(props: Props) {
  
  return (
    <CenterSwiper title="LATEST NEWS" items={props.news} renderItem={renderNews} />
  );
}

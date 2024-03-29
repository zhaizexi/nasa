"use client";

import { Ref, useCallback, useEffect, useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Thumbs,
  FreeMode,
  Navigation,
  EffectFade,
} from "swiper/modules";
import VideoJS from "@/components/VideoJS";
import Player from "video.js/dist/types/player";
import { ClassNames } from "@emotion/react";
import TransitionLine from "@/components/TransitionLine";
import { Slide } from '@prisma/client';

const duration = 7000;

const HomeBanner: React.FC<{slides: Slide[];}> = ({slides}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  const playerRef = useRef<Player>();

  const [activeIndex, setActiveIndex] = useState(-1);

  const handlePlayerReady = (player: Player) => {
    playerRef.current = player;
    
    // You can handle player events here, for example:
    player.on("ready", () => {
      setActiveIndex(0);
    });
    player.on("waiting", () => {
      console.log('waiting');
    });

    player.on("dispose", () => {
      console.log("player will dispose");
    });
  };

  const videoJsOptions = {
    autoplay: true,
    controls: false,
    muted: true,
    fill: true,
    responsive: true,
    sources: [
      {
        src: slides[activeIndex > 0 ? activeIndex : 0]?.videoUrl,
        type: "video/mp4",
      },
    ],
  };

  const onSlideChange = useCallback((swiper: SwiperClass) => {
    const index = swiper.activeIndex;
    if (index === activeIndex) {
      return;
    }
    setActiveIndex(index);
  },[activeIndex])

  return (
    <>
      <ClassNames>
        {({ css, cx }) => (
          <div
            className={cx(
              "relative max-w-screen-3xl mx-auto ",
              css`
                .mySwiper {
                  width: 100%;
                  --swiper-pagination-bullet-size: 12px;
                  --swiper-theme-color: rgb(231, 59, 84);
                  .swiper-pagination {
                    z-index: 20 !important;
                    position: absolute !important;
                    bottom: 70px !important;
                    left: 16px !important;
                    width: max-content !important;
                  }
                  @media (min-width: 1024px) {
                    .swiper-pagination {
                      display: none;
                    }
                  }
                  
                }
                .thumbsSwiper {
                }
              `
            )}
          >
            <Swiper
              spaceBetween={0}
              autoplay={{
                delay: duration,
                disableOnInteraction: false,
              }}
              rewind={true}     
              modules={[Autoplay, Thumbs, EffectFade]}
              onSlideChange={onSlideChange}
              thumbs={{ swiper: thumbsSwiper }}
              className="mySwiper container h-[500px] lg:h-[800px]"
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className="absolute bottom-0 lg:bottom-1/2 lg:translate-y-1/2 lg:px-10 2xl:px-0 lg:pb-10 lg:pt-0 text-contrast px-4 pt-40 pb-24 text-white">
                    <div className="lg:w-3/4 xl:w-1/2 block">
                      <p className="font-primary text-jpl-red-light lg:text-3xl lg:mb-0 mb-2 text-xl font-semibold tracking-normal uppercase">
                        DARE MIGHTY THINGS
                        <span className="sr-only">.</span>
                      </p>{" "}
                      <div>
                        <a
                          // href=""
                          className="group  cursor-pointer block"
                        >
                          <p className="lg:text-9xl leading-tighter text-5xl font-extrabold tracking-tighter">
                            <span className="mr-2">{slide.title}</span>{" "}
                            <span className="text-jpl-red-light lg:hidden hover:ml-2 ml-0 text-4xl transition-all duration-200 ease-in">
                              <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 26 16"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                focusable="false"
                                className="IconArrow inline"
                              >
                                <path
                                  d="M17.935.929L25.006 8l-7.071 7.071-1.414-1.414L21.177 9H1V7h20.177l-4.656-4.657L17.935.93z"
                                  fill="currentColor"
                                  fillRule="evenodd"
                                ></path>
                              </svg>
                            </span>
                          </p>{" "}
                          <div className="hover:ml-5 text-jpl-red-light text-7xl lg:block hidden ml-0 transition-all duration-200 ease-in">
                            <svg
                              width="1em"
                              height="1em"
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
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
             <div className="absolute bottom-0 inset-x-0 z-10 lg:block hidden  bg-black bg-opacity-50 h-40">
              {activeIndex > -1 && <TransitionLine activeIndex={activeIndex} />}
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={5}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="thumbsSwiper container mx-auto  text-contrast   text-left text-white pt-5 pb-22"
              >
                {slides.map((slide) => (
                  <SwiperSlide key={slide.title} className="group border-white/50 border-r">
                    <div
                      className="
                        h-12 cursor-pointer
                        group-[.swiper-slide-thumb-active]:text-white
                        group-[.swiper-slide-thumb-active]:opacity-100
                        hover:text-white
                        hover:text-opacity-100
                        flex
                        items-start
                        px-5
                        -ml-5
                        font-semibold
                        text-base text-left text-white text-opacity-75
                        transition-all duration-200 ease-in"
                    >
                      {slide.title}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <VideoJS
              className="absolute w-full h-full top-0 -z-10 bg-black"
              options={videoJsOptions}
              onReady={handlePlayerReady}
            />
          </div>
        )}
      </ClassNames>
    </>
  );
};

export default HomeBanner;

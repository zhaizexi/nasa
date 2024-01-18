import Image from "next/image";
import HomeBanner from "./components/HomeBanner";
import NewsSection from "./components/NewsSection";
import CelestialSection from "./components/CelestialSection";
import labImg from "@/assets/image/lab.jpg";
import starBgImg from "@/assets/image/bg-stars.jpg";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import EngageSection from "./components/EngageSection";
async function getPageData() {
  const slides: Slide[] = [
    {
      title: "Exploring the universe and searching for new worlds",
      href: "",
      video: "./video/Eagle.mp4",
    },
    {
      title: "Exploring our solar system",
      href: "",
      video: "./video/MSR.m4v",
    },
    {
      title: "Studying our home planet from air and space",
      href: "",
      video: "./video/OMB.m4v",
    },
    {
      title: "Looking for life beyond Earth",
      href: "",
      video: "./video/Clippe.mp4",
    },
    {
      title: "Creating robots to go where humans can’t",
      href: "",
      video: "./video/Robot.mp4",
    },
    {
      title: "Developing technology to improve life on Earth",
      href: "",
      video: "./video/NISAR.mp4",
    },
  ];
  const news: News[] = [
    {
      title:
        "This US-Indian Satellite Will Monitor Earth’s Changing Frozen Regions",
      href: "",
      subject: "Climate Change",
      img: "/news/1.jpg",
    },
    {
      title: "What Are Some Skywatching Highlights in January 2024?",
      href: "",
      subject: "VIDEO",
      img: "/news/2.jpg",
    },
    {
      title: "NASA’s Curiosity Rover Captures a Martian Day, From Dawn to Dusk",
      href: "",
      subject: "Mars",
      img: "/news/3.jpg",
    },
    {
      title:
        "NASA’s Juno to Get Close Look at Jupiter’s Volcanic Moon Io on Dec. 30",
      href: "",
      subject: "Solar System",
      img: "/news/4.jpg",
    },
    {
      title: "NASA’s Deep Space Network Turns 60 and Prepares for the Future",
      href: "",
      subject: "Technology",
      img: "/news/5.jpg",
    },
    {
      title: "Meet the Infrared Telescopes That Paved the Way for NASA’s Webb",
      href: "",
      subject: "Stars and Galaxies",
      img: "/news/6.jpg",
    },
    {
      title: "As the Arctic Warms, Its Waters Are Emitting Carbon",
      href: "",
      subject: "Climate Change",
      img: "/news/7.jpg",
    },
    {
      title: "NASA’s Tech Demo Streams First Video From Deep Space via Laser",
      href: "",
      subject: "Technology",
      img: "/news/8.jpg",
    },
    {
      title: "Solar System",
      href: "",
      subject:
        "NASA Study Finds Life-Sparking Energy Source and Molecule at Enceladus",
      img: "/news/9.jpg",
    },
    {
      title: "NASA’s NEOWISE Celebrates 10 Years, Plans End of Mission",
      href: "",
      subject: "Asteroids and Comets",
      img: "/news/10.jpg",
    },
    {
      title:
        "NASA’s Perseverance Rover Deciphers Ancient History of Martian Lake",
      href: "",
      subject: "Mars",
      img: "/news/11.jpg",
    },
  ];
  const celestials: Celestial[] = [
    {
      name: "Earth",
      img: "/celestial/Earth.webp",
      missions: {
        current: 24,
        past: 30,
      },
    },
    {
      name: "Mars",
      img: "/celestial/Mars.webp",
      missions: {
        current: 5,
        past: 18,
      },
    },
    {
      name: "Jupiter",
      img: "/celestial/Jupiter.webp",
      missions: {
        current: 1,
        past: 1,
      },
    },
    {
      name: "Europa",
      img: "/celestial/Europa.webp",
      missions: {
        current: 0,
        past: 1,
      },
    },
    {
      name: "Asteroids and Comets",
      img: "/celestial/Vesta.webp",
      missions: {
        current: 3,
        past: 7,
      },
    },
    {
      name: "Saturn",
      img: "/celestial/satur.webp",
      missions: {
        current: 0,
        past: 1,
      },
    },
    {
      name: "Interstellar Space",
      img: "/celestial/interstellar.webp",
      missions: {
        current: 2,
        past: 0,
      },
    },
    {
      name: "Exoplanets",
      img: "/celestial/exoplanets.webp",
      missions: {
        current: 2,
        past: 5,
      },
    },
    {
      name: "Stars and Galaxies",
      img: "/celestial/stars.webp",
      missions: {
        current: 5,
        past: 8,
      },
    },
  ];
  const engages: Engage[] = [
    {
      name: "Events",
      subject: "Calendar",
      img: "/engage/event.jpg"
    },
    {
      name: "JPL and the Community",
      subject: "",
      img: "/engage/community.jpg"
    },
    {
      name: "Lecture Series",
      subject: "",
      img: "/engage/lecture.jpg"
    },
  ]
  return {
    slides,
    news,
    celestials,
    engages,
  };
}

export default async function Home() {
  const { slides, news, celestials, engages } = await getPageData();
  return (
    <main>
      <HomeBanner slides={slides} />
      <section className="relative -mt-14 z-20">
        <div className="container mx-auto ">
          <div className="lg:py-18 lg:px-0 text-body-lg px-8 py-10 pr-0 bg-neutral-100 z-30 gap-y-10 lg:col-end-9 grid grid-cols-12 gap-6">
            <div className="lg:block hidden"></div>
            <div className="lg:col-span-2 sm:col-span-5 col-span-full z-30">
              <div>
                <a
                  href="https://www.jpl.nasa.gov/missions"
                  target="_self"
                  className="group  cursor-pointer block"
                >
                  <p className="text-subtitle text-jpl-red mb-4">MISSIONS</p>
                </a>
              </div>{" "}
              <p className="text-body-sm mb-4">Currently active</p>{" "}
              <p className="text-stats-xl">40</p>
            </div>
            <div className="lg:col-span-3 sm:col-span-6 col-span-full z-30">
              <div>
                <a
                  href="https://www.jpl.nasa.gov/missions/mars-2020-perseverance-rover"
                  target="_self"
                  className="group  cursor-pointer block"
                >
                  <p className="text-subtitle text-jpl-red mb-4">
                    TIME ON MARS
                  </p>
                </a>
              </div>{" "}
              <p className="text-body-sm mb-4">Mars Perseverance</p>{" "}
              <div>
                <time
                  dateTime="P2Y11MT9H45M33S"
                  className="BaseTimer whitespace-nowrap"
                >
                  <span className="transition-opacity duration-500 ease-in-out opacity-0 opacity-100">
                    <span>
                      <span
                        aria-hidden="true"
                        className="inline-block align-top text-center"
                      >
                        <span className="text-stats-xl">02</span> <br />{" "}
                        <span className="unit text-body-xs uppercase">Yrs</span>
                      </span>
                    </span>
                    <span>
                      <span className="text-stats-xl text-stats-separator">
                        &nbsp;:&nbsp;
                      </span>{" "}
                      <span
                        aria-hidden="true"
                        className="inline-block align-top text-center"
                      >
                        <span className="text-stats-xl">11</span> <br />{" "}
                        <span className="unit text-body-xs uppercase">Mos</span>
                      </span>
                    </span>
                    <span>
                      <span className="text-stats-xl text-stats-separator">
                        &nbsp;:&nbsp;
                      </span>{" "}
                      <span
                        aria-hidden="true"
                        className="inline-block align-top text-center"
                      >
                        <span className="text-stats-xl">00</span> <br />{" "}
                        <span className="unit text-body-xs uppercase">
                          Days
                        </span>
                      </span>
                    </span>
                  </span>
                </time>
              </div>
            </div>
            <div className="lg:col-span-3 sm:col-span-5 col-span-full z-30">
              <div>
                <a
                  href="https://eyes.nasa.gov/dsn/dsn.html"
                  target="_blank"
                  rel="noopener"
                  className="group  cursor-pointer block"
                >
                  <p className="text-subtitle text-jpl-red mb-4">
                    DEEP SPACE NETWORK
                  </p>
                </a>
              </div>{" "}
              <p className="text-body-sm mb-4">Currently transmitting</p>{" "}
              <p className="text-stats-lg">James Webb Space Telescope</p>{" "}
              <div className="text-gray-mid-dark flex flex-nowrap items-center justify-start mt-2 text-sm">
                <span className="animate-pulse mr-1">
                  <span className="sr-only">
                    James Webb Space Telescope is sending to Goldstone.
                  </span>{" "}
                  <svg
                    width="32"
                    height="12"
                    viewBox="0 0 32 12"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    className="IconArrows -ml-1"
                  >
                    <g fill="currentColor" fillRule="evenodd">
                      <path
                        d="M4 11.657l-.707-.707L8.243 6l-4.95-4.95L4 .343 9.657 6 4 11.657z"
                        transform="translate(2)"
                      ></path>{" "}
                      <path
                        d="M10 11.657l-.707-.707L14.243 6l-4.95-4.95L10 .343 15.657 6 10 11.657z"
                        transform="translate(2)"
                      ></path>{" "}
                      <path
                        d="M16 11.657l-.707-.707L20.243 6l-4.95-4.95L16 .343 21.657 6 16 11.657z"
                        transform="translate(2)"
                      ></path>{" "}
                      <path
                        d="M22 11.657l-.707-.707L26.243 6l-4.95-4.95L22 .343 27.657 6 22 11.657z"
                        transform="translate(2)"
                      ></path>
                    </g>
                  </svg>
                </span>{" "}
                <span aria-hidden="true" className="mr-1">
                  Goldstone
                </span>{" "}
                <span className="animate-pulse">
                  <span className="sr-only">
                    James Webb Space Telescope is receiving from Goldstone.
                  </span>{" "}
                  <svg
                    width="32"
                    height="12"
                    viewBox="0 0 32 12"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    className="IconArrows"
                  >
                    <g fill="currentColor" fillRule="evenodd">
                      <path
                        d="M4 11.657l-.707-.707L8.243 6l-4.95-4.95L4 .343 9.657 6 4 11.657z"
                        transform="translate(2)"
                      ></path>{" "}
                      <path
                        d="M10 11.657l-.707-.707L14.243 6l-4.95-4.95L10 .343 15.657 6 10 11.657z"
                        transform="translate(2)"
                      ></path>{" "}
                      <path
                        d="M16 11.657l-.707-.707L20.243 6l-4.95-4.95L16 .343 21.657 6 16 11.657z"
                        transform="translate(2)"
                      ></path>{" "}
                      <path
                        d="M22 11.657l-.707-.707L26.243 6l-4.95-4.95L22 .343 27.657 6 22 11.657z"
                        transform="translate(2)"
                      ></path>
                    </g>
                  </svg>
                </span>
              </div>
            </div>
            <div className="lg:col-span-3 sm:col-span-6 col-span-full z-30">
              <div>
                <a
                  href="https://www.jpl.nasa.gov/asteroid-watch"
                  target="_self"
                  className="group  cursor-pointer block"
                >
                  <p className="text-subtitle text-jpl-red mb-4">
                    ASTEROID WATCH
                  </p>
                </a>
              </div>{" "}
              <p className="text-body-sm mb-4">Next close approach (safe)</p>{" "}
              <p className="text-stats-lg">Jan. 14, 2024</p>{" "}
              <div className="BaseUnitToggle text-gray-mid-dark mt-2">
                <p className="sr-only">157,000 Miles</p>{" "}
                <span className="text-sm">Proximity 157,000</span>{" "}
                <fieldset
                  aria-label="Change Unit"
                  className="text-body-xs inline-block"
                >
                  <label aria-label="Miles" className="cursor-pointer">
                    <input type="radio" value="imperial" className="sr-only" />{" "}
                    <span aria-hidden="true" className="unit">
                      MI
                    </span>
                  </label>{" "}
                  <span aria-hidden="true" className="select-none">
                    |
                  </span>{" "}
                  <label aria-label="Kilometers" className="cursor-pointer">
                    <input type="radio" value="metric" className="sr-only" />{" "}
                    <span aria-hidden="true" className="unit">
                      KM
                    </span>
                  </label>
                </fieldset>
              </div>{" "}
              <div>
                <a
                  href="/asteroid-watch/next-five-approaches"
                  className="group  cursor-pointer block"
                  aria-label="View the next five approaches"
                >
                  <div className="lg:-mb-8 hover:ml-3 text-jpl-red-light text-7xl ml-0 transition-all duration-200 ease-in">
                    <svg
                      width="40"
                      height="40"
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
          <div className="absolute right-0 top-0 w-1/2 h-full bg-neutral-100"></div>
        </div>
      </section>
      <section className="mt-20">
        <NewsSection news={news} />
      </section>
      <section className="max-w-screen-3xl relative mx-auto lg:my-18 my-10">
        <div className="lg:mb-0 mb-10 relative w-full aspect-[1024/306]">
          <Image
            src="/laboratory/jpl_day.jpg"
            alt="laboratory"
            fill={true}
            priority={false}
          />
        </div>
        <div className="lg:px-4 2xl:px-0">
          <div className="container relative z-10 mx-auto bg-white lg:-mt-26 lg:pt-22 lg:grid grid-cols-12 gap-6">
            <div className="lg:px-0 lg:col-end-8 xl:col-end-9 col-start-2 px-4">
              <h2 className="lg:mb-8 mb-5 text-h2">
                Jet Propulsion Laboratory
              </h2>{" "}
              <div className="BlockText lg:pr-14 text-body-lg">
                <p>
                  Have you been awed by views of desolate Martian Valleys,
                  swirling storms above Jupiter, and the icy blades ringing
                  Saturn? Then you have journeyed with NASA JPL spacecraft and
                  rovers.
                </p>
                <br />
                <p>
                  Our missions have flown to every planet and the Sun in a quest
                  to understand our place in the universe, and to search for the
                  possibility of life beyond Earth.
                </p>
              </div>{" "}
              <div className="mt-5">
                <a
                  href=""
                  className="group text-subtitle text-theme-red hover:text-theme-red-hover cursor-pointer inline-block"
                >
                  <span className="py-2">
                    <span className="text-jpl-red flex items-center group">
                      Learn more
                      <KeyboardArrowRightIcon className="transition group-hover:translate-x-3" />
                    </span>{" "}
                  </span>
                </a>
              </div>
            </div>
            <div className="lg:mt-0 lg:mx-0 xl:col-span-3 sm:mx-auto lg:w-auto sm:w-80 lg:col-start-8 xl:col-start-9 col-span-4 mx-6 mt-12">
              <div className="shadow-jpl">
                <Image
                  src={labImg}
                  alt="laboratory"
                  priority={false}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
                <div className="px-6 pt-6 pb-4">
                  <div className="mb-2 text-3xl font-medium">Virtual Tour</div>{" "}
                  <p className="text-body-sm">
                    Explore the JPL campus virtually with interactive 360
                    panoramas of Mission Control, the Spacecraft Assembly
                    Facility, the visitor museum, and more.
                  </p>{" "}
                  <div className="mt-3">
                    <a
                      href="https://www.jpl.nasa.gov/virtual-tour/"
                      target="_blank"
                      rel="noopener"
                      className="group text-subtitle text-theme-red can-hover:hover:text-theme-red-hover cursor-pointer inline-block"
                    >
                      <span className="py-2">
                        <span className="text-jpl-red flex items-center group">
                          Take the tour
                          <KeyboardArrowRightIcon className="transition group-hover:translate-x-3" />
                        </span>{" "}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto lg:my-18 my-10">
        <div className="flex flex-col justify-center items-center text-jpl-red italic text-3xl	">
          <div className="h-[1px] w-24 bg-jpl-red"></div>
          <div className="py-6 text-[30px]">
            JPL is federally funded by NASA and managed by Caltech.
          </div>
          <div className="h-[1px] w-24 bg-jpl-red"></div>
        </div>
      </section>
      <section className="max-w-screen-3xl mx-auto overflow-hidden text-white bg-black lg:my-18 my-10 relative">
        <Image
          className="absolute z-0"
          src={starBgImg}
          alt="starbg"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
        <div className="z-10 lg:py-24 pt-14 pb-5">
          <div className="relative">
            <div className="container mx-auto relative">
              <p className="text-subtitle text-jpl-red-light mb-3">Missions</p>{" "}
              <h2 className="mb-3 text-h2">Exploring the Universe</h2>
              <p className="text-body-md">
                Spacecraft developed at JPL have flown to every planet in the
                solar system and the Sun, and beyond.
              </p>
            </div>
            <CelestialSection celestials={celestials} />
            <div className="absolute top-full lg:top-0  right-0 w-full ">
              <div className="container mx-auto flex justify-end w-full">
                <div className="text-subtitle cursor-pointer text-jpl-red-light ">
                  <span className="flex items-center">
                    All Missions
                    <KeyboardArrowRightIcon className="transition group-hover:translate-x-3" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-12 gap-6 lg:px-0 container px-4 mx-auto lg:my-24 my-12">
        <div className="col-start-1 lg:col-start-2 col-end-12 xl:col-end-6">
          <p className="text-subtitle text-jpl-red mb-3">Robotics</p>
          <h2 className="mb-5 text-h2">RoMan</h2>
        </div>
        <div className="col-start-1 lg:col-start-2 col-end-12 lg:col-end-6 text-body-lg">
          Roman was built to advance the ability of autonomous robots to
          interact with the wide variety of objects that they might encounter in
          human-scale environments, be they small and hard to grasp or large,
          heavy, and difficult to move.
        </div>
        <div className="col-start-1 lg:col-start-2 col-end-12 lg:col-end-6">
          <div className="text-gray-dark text-body-lg sm:flex sm:text-left text-center my-10 justify-between">
            <div className="stat sm:mb-0 mb-6 mr-0">
              <p className="text-subtitle text-gray-mid-dark mb-4">Mass</p>{" "}
              <div className="BaseUnitToggle">
                <p className="sr-only">250.043 Pounds</p>{" "}
                <span className="text-stats-xl">250.043</span>{" "}
                <fieldset
                  aria-label="Change Unit"
                  className="text-body-xs inline-block lg:block"
                >
                  <label aria-label="Pounds" className="cursor-pointer">
                    <input type="radio" value="imperial" className="sr-only" />{" "}
                    <span aria-hidden="true" className="unit">
                      LB
                    </span>
                  </label>{" "}
                  <span aria-hidden="true" className="select-none">
                    |
                  </span>{" "}
                  <label aria-label="Kilograms" className="cursor-pointer">
                    <input type="radio" value="metric" className="sr-only" />{" "}
                    <span aria-hidden="true" className="unit">
                      KG
                    </span>
                  </label>
                </fieldset>
              </div>
            </div>
            <div className="stat sm:mb-0 mb-6 mr-0">
              <p className="text-subtitle text-gray-mid-dark mb-4">Length</p>{" "}
              <div className="BaseUnitToggle">
                <p className="sr-only">4.13 Feet</p>{" "}
                <span className="text-stats-xl">4.13</span>{" "}
                <fieldset
                  aria-label="Change Unit"
                  className="text-body-xs inline-block lg:block"
                >
                  <label aria-label="Feet" className="cursor-pointer">
                    <input type="radio" value="imperial" className="sr-only" />{" "}
                    <span aria-hidden="true" className="unit">
                      FT
                    </span>
                  </label>{" "}
                  <span aria-hidden="true" className="select-none">
                    |
                  </span>{" "}
                  <label aria-label="Meters" className="cursor-pointer">
                    <input type="radio" value="metric" className="sr-only" />{" "}
                    <span aria-hidden="true" className="unit">
                      M
                    </span>
                  </label>
                </fieldset>
              </div>
            </div>
            <div className="stat sm:mb-0 mb-6 mr-0">
              <p className="text-subtitle text-gray-mid-dark mb-4">Speed</p>{" "}
              <div className="BaseUnitToggle">
                <p className="sr-only">14.8 Feet per second</p>{" "}
                <span className="text-stats-xl">14.8</span>{" "}
                <fieldset
                  aria-label="Change Unit"
                  className="text-body-xs inline-block lg:block"
                >
                  <label
                    aria-label="Feet per second"
                    className="cursor-pointer"
                  >
                    <input type="radio" value="imperial" className="sr-only" />{" "}
                    <span aria-hidden="true" className="unit">
                      FT/S
                    </span>
                  </label>{" "}
                  <span aria-hidden="true" className="select-none">
                    |
                  </span>{" "}
                  <label
                    aria-label="Meters per second"
                    className="cursor-pointer"
                  >
                    <input type="radio" value="metric" className="sr-only" />{" "}
                    <span aria-hidden="true" className="unit">
                      M/S
                    </span>
                  </label>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
        <div className="col-start-1 lg:col-start-2 col-end-12 lg:col-end-6">
          <a
            href=""
            aria-label="Meet ROMAN"
            className="bg-jpl-red text-white font-semibold px-12 py-3 text-contrast-none lg:mr-3 mb-3 lg:inline-block block"
          >
            <span className="flex justify-center">Meet ROMAN</span>
          </a>
          <a
            href=""
            aria-label="See All Robots"
            className="bg-jpl-white text-jpl-red border border-jpl-red font-semibold px-12 py-3 text-contrast-none lg:mr-3 mb-3 lg:inline-block block"
          >
            <span className="flex justify-center">See All Robots</span>
          </a>
        </div>
        <div className="row-start-3 lg:row-start-2 xl:row-start-1 col-start-1 lg:col-start-6 col-end-12  row-span-4">
          <Image
            src="/robot/RoMan.jpg"
            alt="roman"
            width={640}
            height={480}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </section>
      <section className="bg-neutral-100 lg:py-24 lg:mt-24 py-12 mt-12">
        <EngageSection engages={engages} />
      </section>
    </main>
  );
}

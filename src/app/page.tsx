import Image from "next/image";
import HomeBanner from "./components/HomeBanner";
import NewsSection from "./components/NewsSection";
import labImg from "@/assets/image/lab.jpg";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
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
  return {
    slides,
    news,
  };
}

export default async function Home() {
  const { slides, news } = await getPageData();
  return (
    <div>
      <HomeBanner slides={slides} />
      <div className="relative -mt-14 z-20">
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
      </div>
      <NewsSection news={news} />
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
    </div>
  );
}

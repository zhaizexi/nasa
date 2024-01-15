import HomeBanner from "./components/HomeBanner";

export default function Home() {
  return (
    <div>
      <HomeBanner />
      <section
        aria-label="Featured mission statistics"
        className="HomepageStats -mt-14 relative z-20 overflow-hidden"
      >
        <div className="MixedBleedGrid lg:pl-0 pl-4">
          <div className="bg-gray-light text-gray-dark col-start-container col-end-container lg:py-18 lg:px-0 text-body-lg px-8 py-10 pr-0">
            <div className="gap-y-10 lg:col-end-9 grid grid-cols-12 gap-6">
              <div className="lg:block hidden"></div>{" "}
              <div className="lg:col-span-2 sm:col-span-5 col-span-full">
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
              </div>{" "}
              <div className="lg:col-span-3 sm:col-span-6 col-span-full">
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
                    <span>Loading…</span>{" "}
                    <span className="transition-opacity duration-500 ease-in-out opacity-0 opacity-100">
                      <span>
                        {" "}
                        <span
                          aria-hidden="true"
                          className="inline-block align-top text-center"
                        >
                          <span className="text-stats-xl">02</span> <br />{" "}
                          <span className="unit text-body-xs uppercase">
                            Yrs
                          </span>
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
                          <span className="unit text-body-xs uppercase">
                            Mos
                          </span>
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
              </div>{" "}
              <div className="lg:col-span-3 sm:col-span-5 col-span-full">
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
                      <g fill="currentColor" fill-rule="evenodd">
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
                      <g fill="currentColor" fill-rule="evenodd">
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
              </div>{" "}
              <div className="lg:col-span-3 sm:col-span-6 col-span-full">
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
                      <input
                        type="radio"
                        value="imperial"
                        className="sr-only"
                      />{" "}
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
                    <div className="lg:-mb-8 can-hover:group-hover:ml-3 text-jpl-red-light text-7xl ml-0 transition-all duration-200 ease-in">
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
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="bg-gray-light col-start-container-end col-end-bleed sm:block hidden"></div>
        </div>
      </section>
    </div>
  );
}

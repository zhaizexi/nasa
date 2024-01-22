import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import "./globals.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

import Link from "next/link";
import NavBar from "./components/NavBar";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Container, Fab, Toolbar } from "@mui/material";
import classNames from "classnames";
import ScrollTop from "./components/ScrollTop";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MediaBar from "./components/MediaBar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export async function getLayoutData() {
  const sites: Site[] = [
    {
      key: "1",
      title: "JPL",
      url: "",
    },
    {
      key: "2",
      title: "Careers",
      url: "",
    },
    {
      key: "3",
      title: "Education",
      url: "",
    },
    {
      key: "4",
      title: "Science & Technology",
      url: "",
    },
  ];
  const categories: Category[] = [
    {
      name: "ABOUT JPL",
      items: [
        {
          name: "Who We Are",
          href: "",
        },
        {
          name: "Executive Council",
          href: "",
        },
        {
          name: "Directors",
          href: "",
        },
        {
          name: "Careers",
          href: "",
        },
        {
          name: "Internships",
          href: "",
        },
        {
          name: "The JPL Story",
          href: "",
        },
        {
          name: "JPL Achievements",
          href: "",
        },
        {
          name: "Documentary Series",
          href: "",
        },
        {
          name: "Annual Reports",
          href: "",
        },
        {
          name: "JPL Plan: 2023-2026",
          href: "",
        },
      ],
    },
    {
      name: "MISSIONS",
      items: [
        {
          name: "Current",
          href: "",
        },
        {
          name: "Past",
          href: "",
        },
        {
          name: "Future",
          href: "",
        },
        {
          name: "All",
          href: "",
        },
      ],
    },
    {
      name: "NEWS",
      items: [
        {
          name: "All",
          href: "",
        },
        {
          name: "Earth",
          href: "",
        },
        {
          name: "Solar System",
          href: "",
        },
        {
          name: "Stars and Galaxies",
          href: "",
        },
        {
          name: "Subscribe to JPL News",
          href: "",
        },
      ],
    },
    {
      name: "GALLERIES",
      items: [
        {
          name: "Images",
          href: "",
        },
        {
          name: "Videos",
          href: "",
        },
        {
          name: "Audio",
          href: "",
        },
        {
          name: "Podcasts",
          href: "",
        },
        {
          name: "Apps",
          href: "",
        },
        {
          name: "Visions of the Future",
          href: "",
        },
        {
          name: "Slice of History",
          href: "",
        },
        {
          name: "Robotics at JPL",
          href: "",
        },
      ],
    },
    {
      name: "EVENTS",
      items: [
        {
          name: "Lecture Series",
          href: "",
        },
        {
          name: "Team Competitions",
          href: "",
        },
        {
          name: "Speakers Bureau",
          href: "",
        },
        {
          name: "Calendar",
          href: "",
        },
      ],
    },
    {
      name: "VISIT",
      items: [
        {
          name: "Public Tours",
          href: "",
        },
        {
          name: "Virtual Tour",
          href: "",
        },
        {
          name: "Directions and Maps",
          href: "",
        },
      ],
    },
    {
      name: "TOPICS",
      items: [
        {
          name: "JPL Life",
          href: "",
        },
        {
          name: "Solar System",
          href: "",
        },
        {
          name: "Mars",
          href: "",
        },
        {
          name: "Earth",
          href: "",
        },
        {
          name: "Climate Change",
          href: "",
        },
        {
          name: "Exoplanets",
          href: "",
        },
        {
          name: "Stars and Galaxies",
          href: "",
        },
        {
          name: "Robotics",
          href: "",
        },
      ],
    },
    {
      name: "MORE",
      items: [
        {
          name: "Asteroid Watch",
          href: "",
        },
        {
          name: "NASA's Eyes Visualizations",
          href: "",
        },
        {
          name: "Universe - Internal Newsletter",
          href: "",
        },
        {
          name: "Social Media",
          href: "",
        },
      ],
    },
  ];
  return {
    sites,
    categories,
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { sites, categories } = await getLayoutData();
  return (
    <html lang="en">
      <body className={classNames(roboto.className, "overflow-x-hidden")}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <CssBaseline />

          <div className="NavDesktopTopHat z-50 px-4 bg-black lg:block relative hidden">
            <div className="container mx-auto">
              <nav
                aria-label="JPL Sites"
                className="flex items-center text-sm font-medium text-white bg-black"
              >
                {sites.map((site, idx) => (
                  <div key={site.key} className="group flex px-3">
                    <Link
                      href={site.url}
                      aria-current="page"
                      className="group nuxt-link-exact-active nuxt-link-active  cursor-pointer"
                    >
                      <span
                        className={classNames({
                          "hover:border-jpl-red-light inline-block py-2 border-b-2 border-transparent":
                            true,
                          "border-jpl-red-light": idx === 0,
                        })}
                      >
                        {site.title}
                      </span>
                    </Link>
                  </div>
                ))}
              </nav>
            </div>
          </div>
          <NavBar />
          <Toolbar id="back-to-top-anchor" className="min-h-0" />
          <main className="-mt-28">{children}</main>
          <footer className="bg-dark-blue text-white py-8">
            <div className="grid grid-cols-12 gap-6 lg:pt-20 container px-4 pt-10 mx-auto">
              <div className="lg:block lg:col-span-9 hidden col-span-12">
                <div className="grid grid-cols-9 gap-6">
                  {categories.map((category, idx) => (
                    <div
                      key={idx}
                      className="sm:mb-3 xl:col-span-2 md:col-span-3 col-span-4 mb-8"
                    >
                      <div className="text-subtitle text-jpl-blue mb-3">
                        {category.name}
                      </div>
                      {category.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block cursor-pointer hover:underline px-4 py-1 -ml-4"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-3 col-span-12">
                <div className="text-subtitle text-jpl-blue lg:mb-5 mb-3">
                  Get the Latest from JPL
                </div>
                <form className="lg:mb-10 mb-8">
                  <div className="border-opacity-40 relative flex items-center border border-white">
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Enter your email address"
                      aria-label="Email"
                      className="border-0 text-opacity-90 pl-14 relative z-10 w-full py-3 pr-3 text-sm text-white bg-transparent focus-visible:outline-none"
                    />{" "}
                    <div className="absolute inset-0 flex items-center">
                      <button
                        type="submit"
                        aria-label="Submit"
                        className="relative z-20 p-3 pl-5"
                      >
                        <svg
                          width="22"
                          height="16"
                          viewBox="0 0 22 16"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          focusable="false"
                          className="text-xl text-white"
                        >
                          <path
                            d="M11 9l11-7v14H0V2l11 7zm11-9L11 7 0 0h22z"
                            fill="currentColor"
                            fillRule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </form>
                <div className="text-subtitle text-jpl-blue lg:mb-5 mb-3">
                  Follow Us
                </div>
                <div className="lg:mb-14 mb-12">
                  <MediaBar />
                </div>
                <div className="lg:mb-8 mb-5">
                  <svg
                    width="156"
                    height="38"
                    viewBox="0 0 313 76"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    className="LogoCaltech lg:text-base text-sm text-white"
                  >
                    <path
                      d="M62.88 23.95C59.503 9.15 48.675 1.7 34.471 1.7 13.313 1.7.941 18.884.941 38.85.94 58.815 11.822 76 34.47 76c14.105 0 23.541-6.853 29.203-21.058l-12.118-5.564c-2.583 8.245-7.847 14.305-17.085 14.305-14.106 0-19.966-12.516-19.966-24.833 0-12.317 5.86-24.833 19.966-24.833 8.046 0 14.502 5.364 15.595 13.21L62.88 23.95zm47.421 15.298c0-14.304-10.828-16.49-21.654-16.49-11.026 0-21.457 4.57-21.457 16.39l12.12.497c0-5.464 2.283-7.55 9.337-7.55 5.264 0 9.536 1.391 9.536 6.357v1.491c-3.079 1.092-8.742 2.085-13.113 2.98l-5.066.993c-7.45 1.49-15.296 5.861-15.296 15.695 0 9.734 7.548 15.793 17.085 15.793 6.257 0 11.72-1.986 16.39-5.76 0 1.29.397 3.376 1.192 4.568h12.813c-.695-1.092-1.887-3.278-1.887-8.444v-26.52zM98.183 56.233c0 6.457-7.252 9.238-12.913 9.238-4.37 0-7.848-2.484-7.848-6.258 0-4.767 3.775-6.059 8.344-6.953l6.655-1.39c2.186-.399 4.173-.994 5.762-1.79v7.153zm20.792 17.98h12.118V1.502h-12.118v72.71zm20.306-61.209V62.69c0 7.65 3.377 12.118 13.31 12.118 3.775 0 6.754-.596 9.636-1.192v-9.933c-1.788.2-3.676.596-5.365.596-4.668 0-5.462-2.186-5.462-6.158v-25.43h10.827v-8.74H151.4V.871l-12.119 12.132zm73.44 38.957c0-17.979-7.353-29.203-24.139-29.203-16.29 0-25.727 11.324-25.727 26.322 0 15.001 9.436 26.324 25.727 26.324 13.707 0 20.96-6.555 24.734-12.317l-10.232-5.96c-1.192 1.688-4.967 7.152-14.502 7.152-6.556 0-12.814-4.867-13.013-12.318h37.151zm-37.152-9.337c1.292-5.364 5.961-9.933 13.013-9.933 8.145 0 11.422 7.252 11.422 9.933H175.57zm88.175-5.562c-3.08-7.55-9.04-14.304-21.259-14.304-16.289 0-25.726 11.324-25.726 26.322 0 15.001 9.437 26.324 24.832 26.324 13.61 0 19.371-8.045 22.748-15.397l-10.33-5.463c-1.887 4.57-4.966 9.735-12.218 9.735-8.443 0-12.318-7.35-12.318-15.199 0-7.846 4.371-15.196 13.012-15.196 4.77 0 9.041 3.078 10.63 8.045l10.63-4.867zm3.774 37.15h12.118V48.385c0-6.158 2.782-13.906 11.92-13.906 6.16 0 8.941 2.981 8.941 9.933v29.8h12.117V40.936c0-14.603-9.833-18.178-18.376-18.178-6.854 0-11.722 2.682-14.403 6.16h-.199V1.501h-12.118v72.711z"
                      fill="currentColor"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <p className="mb-12">
                  JPL is a federally funded research and development center
                  managed for NASA by Caltech.
                </p>
              </div>
            </div>
            <div className="3xl:px-0 container px-4 mx-auto mt-5">
              <div className="text-subtitle text-jpl-blue mb-5">
                More from JPL
              </div>{" "}
              <div className="lg:block hidden">
                <a
                  href="https://www.jpl.jobs/"
                  target="_blank"
                  className="BaseButton text-contrast-none mb-5 mr-8 -dark inline-block"
                >
                  <span className="label block">Careers</span>
                </a>
                <a
                  href="https://www.jpl.nasa.gov/edu/"
                  target="_blank"
                  className="BaseButton text-contrast-none mb-5 mr-8 -dark inline-block"
                >
                  <span className="label block">Education</span>
                </a>
                <a
                  href="https://scienceandtechnology.jpl.nasa.gov/"
                  target="_blank"
                  className="BaseButton text-contrast-none mb-5 mr-8 -dark inline-block"
                >
                  <span className="label block">Science &amp; Technology</span>
                </a>
                <a
                  href="https://acquisition.jpl.nasa.gov/"
                  target="_blank"
                  className="BaseButton text-contrast-none mb-5 mr-8 -dark inline-block"
                >
                  <span className="label block">Acquisition</span>
                </a>
                <a
                  href="https://thejplstore.com/"
                  target="_blank"
                  className="BaseButton text-contrast-none mb-5 mr-8 -dark inline-block"
                >
                  <span className="label block">JPL Store</span>
                </a>
              </div>{" "}
              <div className="lg:hidden auto-col-2">
                <div>
                  <a
                    href="https://www.jpl.jobs/"
                    className="hover:hover:underline inline-block px-4 py-1 -ml-4"
                  >
                    Careers
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.jpl.nasa.gov/edu/"
                    className="hover:hover:underline inline-block px-4 py-1 -ml-4"
                  >
                    Education
                  </a>
                </div>
                <div>
                  <a
                    href="https://scienceandtechnology.jpl.nasa.gov/"
                    className="hover:hover:underline inline-block px-4 py-1 -ml-4"
                  >
                    Science &amp; Technology
                  </a>
                </div>
                <div>
                  <a
                    href="https://acquisition.jpl.nasa.gov/"
                    className="hover:hover:underline inline-block px-4 py-1 -ml-4"
                  >
                    Acquisition
                  </a>
                </div>
                <div>
                  <a
                    href="https://thejplstore.com/"
                    className="hover:hover:underline inline-block px-4 py-1 -ml-4"
                  >
                    JPL Store
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-opacity-15 lg:py-16 lg:mt-10 pt-10 pb-3 mt-8 bg-black">
              <div className="3xl:px-0 container px-4 mx-auto">
                <div>
                  <div className="text-subtitle text-jpl-blue mb-5">
                    Related NASA Sites
                  </div>{" "}
                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <a
                        href="https://solarsystem.nasa.gov/basics/"
                        className="hover:hover:underline inline-block px-4 py-1 -ml-4"
                      >
                        Basics of Spaceflight
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://climatekids.nasa.gov/"
                        className="hover:hover:underline inline-block px-4 py-1 -ml-4"
                      >
                        Climate Kids
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://climate.nasa.gov/"
                        className="hover:hover:underline inline-block px-4 py-1 -ml-4"
                      >
                        Earth / Global Climate Change
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://exoplanets.nasa.gov/"
                        className="hover:hover:underline inline-block px-4 py-1 -ml-4"
                      >
                        Exoplanet Exploration
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://mars.nasa.gov/"
                        className="hover:hover:underline inline-block px-4 py-1 -ml-4"
                      >
                        Mars Exploration
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://solarsystem.nasa.gov/"
                        className="hover:hover:underline inline-block px-4 py-1 -ml-4"
                      >
                        Solar System Exploration
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://spaceplace.nasa.gov/"
                        className="hover:hover:underline inline-block px-4 py-1 -ml-4"
                      >
                        Space Place
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://eyes.nasa.gov/"
                        className="hover:hover:underline inline-block px-4 py-1 -ml-4"
                      >
                        NASA&#39;s Eyes Visualization Project
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://voyager.jpl.nasa.gov/"
                        className="hover:hover:underline inline-block px-4 py-1 -ml-4"
                      >
                        Voyager Interstellar Mission
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-opacity-15 border-opacity-40 lg:border-t pt-5 pb-3 text-sm bg-black border-black">
              <div className="3xl:px-0 lg:flex lg:flex-wrap lg:px-4 lg:container justify-between mx-auto">
                <div className="divide-opacity-40 lg:justify-start lg:-ml-4 flex flex-wrap justify-center mb-2 divide-x divide-white">
                  <div className="lg:mb-2 mb-5">
                    <a
                      href="http://www.nasa.gov/"
                      className="group  cursor-pointer can-hover:hover:underline inline-block px-4 py-1 font-bold leading-none"
                    >
                      NASA
                    </a>
                  </div>
                  <div className="lg:mb-2 mb-5">
                    <a
                      href="http://www.caltech.edu/"
                      className="group  cursor-pointer can-hover:hover:underline inline-block px-4 py-1 font-bold leading-none"
                    >
                      Caltech
                    </a>
                  </div>
                  <div className="lg:mb-2 mb-5">
                    <a
                      href="/caltechjpl-privacy-policies-and-important-notices"
                      className="group  cursor-pointer can-hover:hover:underline inline-block px-4 py-1 font-bold leading-none"
                    >
                      Privacy
                    </a>
                  </div>
                  <div className="lg:mb-2 mb-5">
                    <a
                      href="/jpl-image-use-policy"
                      className="group  cursor-pointer can-hover:hover:underline inline-block px-4 py-1 font-bold leading-none"
                    >
                      Image Policy
                    </a>
                  </div>
                  <div className="lg:mb-2 mb-5">
                    <a
                      href="/frequently-asked-questions"
                      className="group  cursor-pointer can-hover:hover:underline inline-block px-4 py-1 font-bold leading-none"
                    >
                      FAQ
                    </a>
                  </div>
                  <div className="lg:mb-2 mb-5">
                    <a
                      href="/contact-jpl"
                      className="group  cursor-pointer can-hover:hover:underline inline-block px-4 py-1 font-bold leading-none"
                    >
                      Feedback
                    </a>
                  </div>
                </div>{" "}
                <div className="lg:text-left lg:border-0 border-opacity-40 lg:pt-0 lg:px-0 px-4 pt-5 mb-4 text-center border-t border-black">
                  {" "}
                  <div className="lg:inline-block lg:mb-0 block mb-2">
                    <span className="font-bold">Site Managers:</span>{" "}
                    <span>Veronica McGregor, Randal Jackson</span>
                  </div>
                  <div className="lg:inline-block lg:mb-0 block mb-2 ml-5">
                    <span className="font-bold">Site Editors:</span>{" "}
                    <span>Tony Greicius, Naomi Hartono</span>
                  </div>
                  <div className="lg:inline-block lg:mb-0 block mb-2 ml-5">
                    <span className="font-bold">CL#:</span> <span>21-0018</span>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          <ScrollTop>
            <Fab
              size="small"
              aria-label="scroll back to top"
              className="bg-white cursor-pointer"
            >
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

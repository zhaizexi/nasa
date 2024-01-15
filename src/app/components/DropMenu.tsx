import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import Image from "next/image";
import profilePic from "@/assets/image/Campus.jpg";
import classNames from "classnames";
import { memo, useEffect, useRef } from "react";

interface Props {
  onClose: () => void;
  menu?: string;
}

const DropMenu = memo(function DropMenu({ menu, onClose }: Props) {
  const activeMenu = useRef<string>();
  const handleClickAway = () => {
    if (menu === activeMenu.current) {
      activeMenu.current = undefined;
      onClose();
      return;
    }
    activeMenu.current = menu;
  };

  useEffect(() => {}, [menu]);

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div
        className={classNames({
          "hidden gap-4 grid-cols-3 absolute top-28 container left-1/2 -translate-x-1/2 bg-dark-blue bg-opacity-95 3xl:px-0 px-4 py-10 text-white transition-all":
            true,
          "xs:grid" : !!menu,
          "opacity-0": !menu,
        })}
      >
        <div className="grid grid-cols-4">
          <div className="col-span-3">
            <div>
              <a
                href="/missions/mars-2020-perseverance-rover"
                className="group  cursor-pointer block"
              >
                <div className="mb-4">
                  <div data-v-47d42ddc="">
                    <div
                      data-v-47d42ddc=""
                      className="BaseImagePlaceholder aspect-ratio-sixteen-nine dark-theme no-logo"
                    >
                      <div data-v-47d42ddc="">
                        <Image
                          alt=""
                          className="BaseImage  hover:scale-100 transition duration-300 ease-in-out transform scale-105 object-cover"
                          src={profilePic}
                        />
                      </div>{" "}
                    </div>
                  </div>
                </div>{" "}
                <p className="text-subtitle-sm mb-2">Featured Mission</p>{" "}
                <span className="sr-only">.</span> <p>Perseverance Rover</p>
              </a>
            </div>
          </div>
        </div>
        <div>
          <p className="text-medium text-6xl">About JPL</p>{" "}
          <p className="text-sm leading-relaxed">
            JPL is a research and development lab federally funded by NASA and
            managed by Caltech.
          </p>
        </div>
        <div className="grid order-3 grid-cols-4 gap-6">
          <div data-v-34158131="" className="col-span-2">
            <div data-v-34158131="" className="-mt-2 -ml-2">
              <div className="text-subtitle text-blue inline-block mb-4">
                <a href="/who-we-are" className="group  cursor-pointer p-2">
                  About JPL
                </a>
              </div>
            </div>{" "}
            <div data-v-34158131="" className="">
              <div data-v-34158131="" className="mb-0">
                <div
                  data-v-34158131=""
                  className="block text-lg font-medium leading-tight text-white"
                >
                  <a
                    href="/who-we-are"
                    className="group  cursor-pointer can-hover:hover:underline inline-block px-2 py-3 -ml-2"
                  >
                    Who We Are
                  </a>
                </div>
              </div>
              <div data-v-34158131="" className="mb-0">
                <div
                  data-v-34158131=""
                  className="block text-lg font-medium leading-tight text-white"
                >
                  <a
                    href="/who-we-are/executive-council"
                    className="group  cursor-pointer can-hover:hover:underline inline-block px-2 py-3 -ml-2"
                  >
                    Executive Council
                  </a>
                </div>
              </div>
              <div data-v-34158131="" className="mb-0">
                <div
                  data-v-34158131=""
                  className="block text-lg font-medium leading-tight text-white"
                >
                  <a
                    href="https://www.jpl.nasa.gov/virtual-tour/"
                    className="group  cursor-pointer can-hover:hover:underline inline-block px-2 py-3 -ml-2"
                  >
                    Virtual Tour
                  </a>
                </div>
              </div>
              <div data-v-34158131="" className="mb-0">
                <div
                  data-v-34158131=""
                  className="block text-lg font-medium leading-tight text-white"
                >
                  <a
                    href="https://www.jpl.jobs/"
                    className="group  cursor-pointer can-hover:hover:underline inline-block px-2 py-3 -ml-2"
                  >
                    Careers
                  </a>
                </div>
              </div>
              <div data-v-34158131="" className="mb-0">
                <div
                  data-v-34158131=""
                  className="block text-lg font-medium leading-tight text-white"
                >
                  <a
                    href="https://www.jpl.nasa.gov/edu/intern/"
                    className="group  cursor-pointer can-hover:hover:underline inline-block px-2 py-3 -ml-2"
                  >
                    Internships
                  </a>
                </div>
              </div>
              <div data-v-34158131="" className="mb-0">
                <div
                  data-v-34158131=""
                  className="block text-lg font-medium leading-tight text-white"
                >
                  <a
                    href="/a-plan-for-jpl"
                    className="group  cursor-pointer can-hover:hover:underline inline-block px-2 py-3 -ml-2"
                  >
                    JPL Plan: 2023-2026
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div data-v-34158131="" className="col-span-2">
            <div data-v-34158131="" className="-mt-2 -ml-2">
              <div className="text-subtitle text-blue inline-block mb-4">
                <span className="p-2">History</span>
              </div>
            </div>{" "}
            <div data-v-34158131="" className="">
              <div data-v-34158131="" className="mb-0">
                <div
                  data-v-34158131=""
                  className="block text-lg font-medium leading-tight text-white"
                >
                  <a
                    href="/who-we-are/history"
                    className="group  cursor-pointer can-hover:hover:underline inline-block px-2 py-3 -ml-2"
                  >
                    The JPL Story
                  </a>
                </div>
              </div>
              <div data-v-34158131="" className="mb-0">
                <div
                  data-v-34158131=""
                  className="block text-lg font-medium leading-tight text-white"
                >
                  <a
                    href="https://www.jpl.nasa.gov/timeline/"
                    className="group  cursor-pointer can-hover:hover:underline inline-block px-2 py-3 -ml-2"
                  >
                    JPL Achievements
                  </a>
                </div>
              </div>
              <div data-v-34158131="" className="mb-0">
                <div
                  data-v-34158131=""
                  className="block text-lg font-medium leading-tight text-white"
                >
                  <a
                    href="/who-we-are/documentary-series-jpl-and-the-space-age"
                    className="group  cursor-pointer can-hover:hover:underline inline-block px-2 py-3 -ml-2"
                  >
                    Documentary Series
                  </a>
                </div>
              </div>
              <div data-v-34158131="" className="mb-0">
                <div
                  data-v-34158131=""
                  className="block text-lg font-medium leading-tight text-white"
                >
                  <a
                    href="/who-we-are/faces-of-leadership-the-directors-of-jpl"
                    className="group  cursor-pointer can-hover:hover:underline inline-block px-2 py-3 -ml-2"
                  >
                    JPL Directors
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ClickAwayListener>
  );
});
export default DropMenu;

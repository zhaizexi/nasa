"use client";

import LogoIcon from "@/assets/image/logo.svg";
import { useCallback, useEffect, useRef, useState } from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import classNames from "classnames";
import { css, ClassNames } from "@emotion/react";

import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchBar from "../(home)/components/SearchBar";
import MenuIcon from "@mui/icons-material/Menu";
import DropMenu from "../(home)/components/DropMenu";

const headerHeight = 158;
function HideOnScroll(props: { children: React.ReactElement }) {
  const { children } = props;
  const trigger = useScrollTrigger({
    threshold: headerHeight,
  });
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const handleScroll = () => setInView(window.scrollY < headerHeight);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <ClassNames>
      {({ css, cx }) => {
        const slidCls = cx({
          "relative bg-transparent shadow-none text-white": true,
          "sticky bg-white !shadow-lg !text-gray-800": !trigger && !inView,
          "group is-fixed": trigger || inView,
        })
        return (
        
        <Slide
          appear={false}
          direction="down"
          in={!trigger}
          className={slidCls}
        >
          {children}
        </Slide>
      )}}
    </ClassNames>
  );
}
const pages = [
  "About JPL",
  "Missions",
  "News",
  "Galleries",
  "Events",
  "Visit",
  "Topics",
];

const NavBar: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [activeNav, setActiveNav] = useState<string>();

  const handleOpenNav = (key: string) => {
    setActiveNav(key);
  };

  const handleClosNav = useCallback(() => {
    setActiveNav(undefined);
  }, []);

  return (
    <>
      <HideOnScroll>
        <AppBar component="header">
          <div className="h-28 max-w-screen-3xl mx-auto w-full group-[.is-fixed]:bg-gradient-to-b from-black/75 to-transparent">
            <Toolbar
            component={"nav"}
            className="lg:container flex items-center justify-between mx-auto relative h-full "
            aria-label="Global"
          >
            <div className="flex">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">logo</span>
                <LogoIcon />
              </a>
            </div>
            <Box className="flex xs:hidden flex-1 justify-end">
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box className="hidden xs:flex flex-1 justify-end">
              {pages.map((page) => (
                <Button
                  key={page}
                  className={classNames({
                    "px-4 py-2 rounded-none	": true,
                    "border-b-2": page === activeNav,
                  })}
                  onClick={() => handleOpenNav(page)}
                >
                  {page}
                </Button>
              ))}
              <SearchBar />
            </Box>
          </Toolbar>
          </div>
          
          <DropMenu menu={activeNav} onClose={handleClosNav} />
        </AppBar>
      </HideOnScroll>
    </>
  );
};

export default NavBar;

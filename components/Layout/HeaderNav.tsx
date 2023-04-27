import React, { useState } from "react";

import Link from "next/link";
import { useTheme } from "next-themes";

import Backdrop from "components/UIElements/Backdrop";
import SideDrawer from "./SideDrawer";
import useResizeWidth from "hooks/useResizeWidth";

import { RiMenu3Line } from "react-icons/ri";
import { BsSun } from "react-icons/bs";
import { FiMoon } from "react-icons/fi";
import { SiGithub } from "react-icons/si";

export default function HeaderNav() {
  const { theme, setTheme } = useTheme();
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const widthSize = useResizeWidth();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <header
      className={`w-full max-w-5xl flex flex-row justify-between items-center pt-3 fixed top-0 z-10 header-color`}
    >
      <Link href="/" passHref>
        <button className={`flex flex-row items-center ml-2 `}>
          <span
            className={`mx-3 font-black text-lg max800:text-sm point-color`}
          >
            KANG BLOG
          </span>
        </button>
      </Link>
      <nav className="flex items-center mr-2 ">
        <button
          type="button"
          onClick={toggleTheme}
          className="animate-pulse hover-color"
        >
          {theme === "light" ? <BsSun size="30px" /> : <FiMoon size="30px" />}
        </button>

        <Link href="https://github.com/kagrin97">
          <a target="_blank" className="mx-4 hover-color">
            <SiGithub size="22px" />
          </a>
        </Link>

        {widthSize && !Boolean(widthSize >= 800) && (
          <button className="menu-btn hover-color" onClick={openDrawerHandler}>
            <RiMenu3Line size="22px" />
          </button>
        )}

        {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
        <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler} />
      </nav>
    </header>
  );
}

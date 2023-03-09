import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import Image from "next/image";

import Backdrop from "components/UIElements/Backdrop";
import SideDrawer from "./SideDrawer";
import useResizeWidth from "hooks/useResizeWidth";

import { RiMenu3Line } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";

import navlinks, { Navlinks } from "data/navlinks";

export default function HeaderNav() {
  const router = useRouter();
  const path = `/${router.pathname.split("/")[1]}`;
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
    <nav className="flex flex-row items-center mr-5">
      <button
        type="button"
        onClick={toggleTheme}
        className="mr-3 animate-pulse"
      >
        <Image
          src={theme === "light" ? "/imgs/해.png" : "/imgs/달.png"}
          alt="Toggle light/dark mode"
          width={50}
          height={50}
          className="rounded-3xl hover:cursor-pointer"
        />
      </button>

      <Link href="https://github.com/kagrin97">
        <a target="_blank">
          <Image
            src={
              theme === "light"
                ? "/imgs/github-green.png"
                : "/imgs/github-green-dark.png"
            }
            alt="Github"
            width={30}
            height={30}
            className="hover:cursor-pointer rounded-full"
          />
        </a>
      </Link>

      <div className="mx-5">
        <Link href="/" key="Home">
          <a className="hover:text-green-400">
            <AiOutlineHome size="25px" />
          </a>
        </Link>
      </div>

      {!Boolean(widthSize >= 800) && (
        <button
          className="menu-btn hover:text-green-400"
          onClick={openDrawerHandler}
        >
          <RiMenu3Line size="22px" />
        </button>
      )}

      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <div className="m-auto">
          {navlinks.map((nav: Navlinks) => (
            <Link href={nav.link} key={nav.title}>
              <div className="hover:cursor-pointer hover:text-green-400 mb-5 text-3xl">
                <a
                  href={nav.link}
                  className={`flex justify-center ${
                    nav.link === path ? "text-green-400" : ""
                  }`}
                >
                  <span className="mr-4">{nav.title}</span>
                </a>
              </div>
            </Link>
          ))}
        </div>
      </SideDrawer>
    </nav>
  );
}

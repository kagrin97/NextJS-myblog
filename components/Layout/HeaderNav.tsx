import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import Image from "next/image";

import navlinks from "data/navlinks";

import Backdrop from "components/UIElements/Backdrop";
import SideDrawer from "./SideDrawer";
import useResizeWidth from "hooks/useResizeWidth";

export default function HeaderNav() {
  const path = "/" + useRouter().pathname.split("/")[1];

  const { theme, setTheme } = useTheme();

  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  const widthSize = useResizeWidth();

  return (
    <nav className={`flex flex-row items-center mr-5`}>
      <button
        type="button"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className={`mr-3 animate-pulse`}
      >
        {theme === "light" ? (
          <Image
            src={`/달.png`}
            alt={"라이트다크모드로 전환하는 버튼"}
            width={50}
            height={50}
            className={`rounded-3xl hover:cursor-pointer`}
          />
        ) : (
          <Image
            src={`/해.png`}
            alt={"라이트다크모드로 전환하는 버튼"}
            width={50}
            height={50}
            className={`rounded-3xl hover:cursor-pointer`}
          />
        )}
      </button>
      {theme === "light" ? (
        <Link href="https://github.com/kagrin97">
          <a target="_blank">
            <Image
              src={`/github-green.png`}
              alt="깃허브"
              width={30}
              height={30}
              className={`hover:cursor-pointer rounded-full`}
            />
          </a>
        </Link>
      ) : (
        <Link href="https://github.com/kagrin97">
          <a target="_blank">
            <Image
              src={`/github-green-dark.png`}
              alt="깃허브"
              width={30}
              height={30}
              className={`hover:cursor-pointer rounded-full`}
            />
          </a>
        </Link>
      )}
      <div className={`mr-5`}>
        <Link href={"/"} key={"Home"}>
          <a className={`ml-4 hover:text-green-400`}>Home</a>
        </Link>
      </div>

      {!(widthSize >= 800) && (
        <button onClick={openDrawerHandler} className={` hover:text-green-400`}>
          Menu
        </button>
      )}

      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <div className={`m-auto`}>
          {navlinks.map((nav) => (
            <Link href={nav.link} key={nav.title}>
              <div
                className={`hover:cursor-pointer hover:text-green-400 mb-5 text-3xl`}
              >
                <a
                  href={nav.link}
                  className={` flex justify-center ${
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

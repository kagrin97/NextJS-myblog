import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import Image from "next/image";

import navlinks from "data/navlinks";

export default function HeaderNav() {
  const path = useRouter().pathname;

  const [menu, setMenu] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = (e: any) => {
    const text = e.target.innerText;
    if (text === "Menu") {
      setMenu((menu) => !menu);
    } else {
      setMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", toggleMenu);
    return () => {
      window.removeEventListener("click", toggleMenu);
    };
  }, []);

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
      <div className={`mr-5`}>
        <Link href={"/"} key={"Home"}>
          <a className={`hover:text-green-400`}>Home</a>
        </Link>
      </div>
      {!(window.innerWidth >= 800) && (
        <button
          onClick={() => toggleMenu}
          className={` hover:text-green-400 ${menu ? "text-green-400" : ""}`}
        >
          Menu
        </button>
      )}

      <div
        className={`${
          menu
            ? "absolute top-20 right-3 bg-white z-10 dark:bg-neutral-600"
            : "hidden"
        } pl-5 rounded-lg`}
      >
        {navlinks.map((nav) => (
          <Link href={nav.link} key={nav.title}>
            <div className={`hover:cursor-pointer hover:text-green-400 `}>
              <a
                href={nav.link}
                className={`mr-5 flex justify-between ${
                  nav.link === path ? "text-green-400" : ""
                }`}
              >
                <span className="mr-4">{nav.title}</span>
                <span>+{nav?.length}</span>
              </a>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
}
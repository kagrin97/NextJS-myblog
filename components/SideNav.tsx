import React from "react";

import { useRouter } from "next/router";
import Link from "next/link";

import navlinks from "data/navlinks";
import Profile from "./Profile";

const SideNav = () => {
  const path = "/" + useRouter().pathname.split("/")[1];

  return (
    <nav className="flex items-start justify-between flex-wrap mr-2 sticky top-20 dark:bg-neutral-800 ">
      <Profile />
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          {navlinks.map((nav) => (
            <Link href={nav.link} key={nav.title}>
              <div className={`hover:cursor-pointer hover:text-green-400 mt-4`}>
                <a
                  href={nav.link}
                  className={`mr-5 flex justify-between ${
                    nav.link === path ? "text-green-400" : ""
                  }`}
                >
                  <span className="mr-4 text-lg">{nav.title}</span>
                  <span>{nav?.length}</span>
                </a>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default SideNav;

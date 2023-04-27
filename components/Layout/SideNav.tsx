import React from "react";

import { useRouter } from "next/router";
import Link from "next/link";

import navlinks, { Navlinks } from "data/navlinks";
import Profile from "components/UIElements/Profile";

const SideNav = () => {
  const path = "/" + useRouter().asPath.split("/")[1];

  return (
    <nav className="flex items-start justify-between flex-wrap mr-2 sticky top-20 dark:bg-neutral-800 ">
      <Profile />
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <ul className="text-sm lg:flex-grow">
          {navlinks.map((nav: Navlinks) => (
            <Link href={nav.link} key={nav.title}>
              <li className={`hover:cursor-pointer hover-color mt-1.5`}>
                <a
                  href={nav.link}
                  className={`mr-5 flex justify-between ${
                    nav.link === path ? "point-color" : ""
                  }`}
                >
                  <span className="mr-4 text-base">{nav.title}</span>
                  <span>{nav?.length}</span>
                </a>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default SideNav;

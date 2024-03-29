import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Link from "next/link";
import { useRouter } from "next/router";

import { CSSTransition } from "react-transition-group";
import navlinks, { Navlinks } from "data/navlinks";

import useIsBrowser from "hooks/useIsBrowser";

type Props = {
  show: boolean;
  onClick: () => void;
};

const SideDrawer = (props: Props) => {
  const isBrowser = useIsBrowser();

  const path = "/" + useRouter().asPath.split("/")[1];

  const content = (
    <CSSTransition
      in={props.show}
      timeout={500}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside
        className={`flex fixed left-0 top-0 z-40 h-screen w-4/5 bg-gray-100 dark:bg-neutral-800 shadow-lg shadow-indigo-500/40`}
        onClick={props.onClick}
      >
        <ul className="m-auto">
          {navlinks.map((nav: Navlinks) => (
            <Link href={nav.link} key={nav.title}>
              <li className="hover:cursor-pointer hover-color mb-5 text-2xl">
                <a
                  href={nav.link}
                  className={`flex justify-center ${
                    nav.link === path ? "point-color" : ""
                  }`}
                >
                  <span className="mr-4">{nav.title}</span>
                </a>
              </li>
            </Link>
          ))}
        </ul>
      </aside>
    </CSSTransition>
  );

  if (!isBrowser) {
    return null;
  }

  return ReactDOM.createPortal(
    content,
    document.getElementById("drawer-hook") as HTMLElement
  );
};

export default SideDrawer;

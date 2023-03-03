import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

type Props = {
  show: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

const SideDrawer = (props: Props) => {
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
        {props.children}
      </aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(
    content,
    document.getElementById("drawer-hook") as HTMLElement
  );
};

export default SideDrawer;

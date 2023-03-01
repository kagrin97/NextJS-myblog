import React from "react";
import ReactDOM from "react-dom";

type Props = {
  onClick: () => void;
};

const Backdrop = (props: Props) => {
  return ReactDOM.createPortal(
    <div
      className={`fixed left-0 top-0 z-30 h-screen w-full bg-black/70`}
      onClick={props.onClick}
    ></div>,
    document.getElementById("backdrop-hook") as HTMLElement
  );
};

export default Backdrop;

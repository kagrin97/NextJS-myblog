import { useState, useEffect } from "react";

const useMenuToggleWidth = (breakpoint = 800) => {
  const [showMenuWith, setshowMenuWith] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth >= breakpoint) {
      setshowMenuWith(false);
    } else {
      setshowMenuWith(true);
    }
  }, [windowWidth, breakpoint]);

  return showMenuWith;
};

export default useMenuToggleWidth;

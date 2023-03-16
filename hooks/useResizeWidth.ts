import { useState, useEffect } from "react";

export default function useResizeWidth() {
  const [widthSize, setWidthSize] = useState(window.innerWidth);
  let resizeTimer: ReturnType<typeof setTimeout>;

  const handleResizeWidth = () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      setWidthSize(window.innerWidth);
    }, 500);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResizeWidth);

    return () => {
      window.removeEventListener("resize", handleResizeWidth);
    };
  }, []);

  return widthSize;
}

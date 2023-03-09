import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function TopBtn() {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setIsScroll(true);
    window.removeEventListener("scroll", handleScroll);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <React.Fragment>
      {isScroll && (
        <a
          className="fixed bottom-5 right-5 z-10 hover:cursor-pointer"
          onClick={scrollToTop}
        >
          <Image
            src={`/top.png`}
            alt="top버튼"
            width={40}
            height={40}
            objectFit={`cover`}
          />
        </a>
      )}
    </React.Fragment>
  );
}

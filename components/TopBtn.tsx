import Image from "next/image";
import { useEffect, useState } from "react";

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

  return (
    <>
      {isScroll && (
        <a href="#" className="fixed bottom-5 right-5">
          <Image
            src={`/top.png`}
            alt="top버튼"
            width={40}
            height={40}
            objectFit={`cover`}
          />
        </a>
      )}
    </>
  );
}

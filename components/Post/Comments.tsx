import React, { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export default function Comments() {
  const ref = useRef(null);
  const { theme } = useTheme();

  const makeComments = () => {
    const script = document.createElement("script");

    script.src = "https://utteranc.es/client.js";
    script.async = false;
    script.setAttribute("repo", "kagrin97/NextJS-myblog");
    script.setAttribute("issue-term", "title");
    if (theme === "dark") {
      script.setAttribute("theme", "dark-blue");
    } else {
      script.setAttribute("theme", "github-light");
    }
    script.setAttribute("label", "blog-comment");
    ref.current.appendChild(script);
  };

  const removeExistedComments = () => {
    const existingScript = ref.current.querySelector(".utterances");
    if (existingScript) {
      existingScript.remove();
    }
  };
  useEffect(() => {
    makeComments();
    removeExistedComments();
  }, [theme]);

  return <div ref={ref}></div>;
}

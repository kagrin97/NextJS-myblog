import React, { useEffect, useRef } from "react";

export default function Comments() {
  const ref = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://utteranc.es/client.js";
    script.async = true;
    script.setAttribute("repo", "kagrin97/NextJS-myblog");
    script.setAttribute("issue-term", "title");
    script.setAttribute("theme", "github-light");
    script.setAttribute("label", "blog-comment");
    ref.current.appendChild(script);
  }, []);

  return <div ref={ref}></div>;
}

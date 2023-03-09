import "styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <React.Fragment></React.Fragment>;
  } else {
    return (
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

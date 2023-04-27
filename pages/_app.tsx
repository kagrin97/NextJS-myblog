import "styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import PWAInstallPrompt from "components/UIElements/PWAInstallPrompt";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
      {/* <PWAInstallPrompt /> */}
    </ThemeProvider>
  );
}

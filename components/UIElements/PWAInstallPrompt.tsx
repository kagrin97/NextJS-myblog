import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import Image from "next/image";

const PWAInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showSnackbar, setShowSnackbar] = useState(false);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleBeforeInstallPrompt = (event: Event) => {
    event.preventDefault();
    setDeferredPrompt(event);
    setShowSnackbar(true);
  };

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();

      deferredPrompt.userChoice.then(() => {
        setDeferredPrompt(null);
        setShowSnackbar(false);
      });
    }
  };

  const handleDismissClick = () => {
    setShowSnackbar(false);
  };

  return ReactDOM.createPortal(
    <div
      className={`fixed bottom-0 left-0 right-0 z-20 p-4 bg-gray-800 opacity-90 text-white ${
        showSnackbar ? "block" : "hidden"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Image src="/icons/icon-48x48.png" width="32px" height="32px" />
          <p className="ml-2">이 사이트의 앱을 설치하세요.</p>
        </div>
        <div className="flex items-center">
          <button
            className="p-1 text-gray-400 hover:text-white"
            onClick={handleInstallClick}
          >
            Install
          </button>
          <button
            className="p-1 ml-2 text-gray-400 hover:text-white"
            onClick={handleDismissClick}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 11l4.147 4.146a.5.5 0 01-.708.708L12 11.707l-4.146 4.147a.5.5 0 01-.708-.708L11.293 11l-4.147-4.146a.5.5 0 01.708-.708L11 10.293l4.146-4.147a.5.5 0 01.708.708L11.707 11z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("install-pwa-modal") as HTMLElement
  );
};

export default PWAInstallPrompt;

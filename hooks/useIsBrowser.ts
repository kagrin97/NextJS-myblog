import { useState, useEffect } from "react";

function useIsBrowser() {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  return isBrowser;
}

export default useIsBrowser;

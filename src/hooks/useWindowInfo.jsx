import { useEffect, useState } from "react";

export function useWindowInfo() {
  const [windowInfo, setWindowInfo] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowInfo({
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowInfo;
}

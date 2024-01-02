import { useState, useEffect } from "react";

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    let timeoutId;

    function handleResize() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
      }, 100);
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return windowDimensions;
}

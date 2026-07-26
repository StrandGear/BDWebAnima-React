import { useState, useEffect } from "react";

export const useWindowSize = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize(); // trigger immediately
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    windowWidth,
    isMobile: windowWidth < 1024, // Adjust this breakpoint to your design threshold (e.g., 768 or 1920)
  };
};
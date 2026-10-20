// src/Layout.jsx
import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  const [isMobile, setIsMobile] = useState(() => {
    return window.innerWidth < 1024 || window.innerHeight > window.innerWidth;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024 || window.innerHeight > window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  return <Outlet context={{ isMobile }} />;
};
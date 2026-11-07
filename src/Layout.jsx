// src/Layout.jsx
import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

export const Layout = () => {
  const [isMobile, setIsMobile] = useState(() => {
    return window.innerWidth < 1024 || window.innerHeight > window.innerWidth;
  });

  const location = useLocation();

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

  useEffect(() => {
  const hostname = window.location.hostname.toLowerCase();
  const path = location.pathname.toLowerCase();

  const isRemoteIsland =
    hostname.includes("remote-island") ||
    hostname.includes("remoteisland") ||
    path.startsWith("/remoteisland") ||
    path.startsWith("/remote-island") ||
    path === "/ri";

  document.title = isRemoteIsland ? "Remote Island" : "Building Democracy";
  const iconPath = isRemoteIsland
    ? "/img/favicon-island.png"
    : "/img/favicon-democracy.png";

  let link =
    document.getElementById("dynamic-favicon") ||
    document.querySelector("link[rel*='icon']");
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    link.id = "dynamic-favicon";
    document.head.appendChild(link);
  }
  link.href = iconPath;
}, [location.pathname]);

  return <Outlet context={{ isMobile }} />;
};
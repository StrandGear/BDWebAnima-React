import React from "react";
import { Outlet } from "react-router-dom";
import { useWindowSize } from "./useWindowSize";

export const Layout = () => {
  const { isMobile, windowWidth } = useWindowSize();

  return (
    <div className="app-layout">
      {/* Pass isMobile and windowWidth down to all routes automatically */}
      <Outlet context={{ isMobile, windowWidth }} />
    </div>
  );
};
// src/components/DesktopLayout/DesktopLayout.jsx
import React from "react";
import { useWindowSize } from "./useWindowSize";
import "./DesktopLayout.css";

export const DesktopLayout = ({ children, targetWidth = 1920, targetHeight = 1080 }) => {
  const size = useWindowSize();
  const width = size?.width ?? size?.innerWidth ?? size?.[0] ?? window.innerWidth;
  const height = size?.height ?? size?.innerHeight ?? size?.[1] ?? window.innerHeight;
  
  const scale = Math.min(width / targetWidth, height / targetHeight);

  return (
    <div className="desktop-layout-outer">
      <div
        className="desktop-layout-canvas"
        style={{
          transform: `translate(-50%, -50%) scale(${scale})`,
        }}
      >
        {children}
      </div>
    </div>
  );
};
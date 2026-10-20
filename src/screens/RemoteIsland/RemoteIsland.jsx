import React from "react";
import { useOutletContext } from "react-router-dom";
import { Ri } from "../Mobile_Ri/Ri";
import { RemoteIslandStart } from "../RemoteIslandStart/RemoteIslandStart";

export const RemoteIsland = () => {
  const { isMobile } = useOutletContext();

  return <>{isMobile ? <Ri /> : <RemoteIslandStart />}</>;
};
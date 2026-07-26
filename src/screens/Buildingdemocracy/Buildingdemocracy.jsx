// src/screens/Buildingdemocracy.jsx
import React from "react";
import { useWindowSize } from "../../useWindowSize";
import { BuildingdemocracyMobile } from "../BuildingdemocracyMobile/BuildingdemocracyMobile";
import {BuildingdemocracyDesktop} from "../BuildingdemocracyDesktop/BuildingdemocracyDesktop";

export const Buildingdemocracy = () => {
  const isMobile = useWindowSize();

  return (
    <>
      {isMobile ? (
        <BuildingdemocracyMobile />
      ) : (
        <BuildingdemocracyDesktop />
      )}
    </>
  );
};
// src/screens/Buildingdemocracy.jsx
import React from "react";
import { useWindowSize } from "../../useWindowSize";
//import { BuildingdemocracyMobile } from "../BuildingdemocracyMobile/BuildingdemocracyMobile";
import { Bd } from "../Mobile_Bd";
import {BuildingdemocracyDesktop} from "../BuildingdemocracyDesktop/BuildingdemocracyDesktop";
import { useOutletContext } from "react-router-dom";

export const Buildingdemocracy = () => {
  const { isMobile } = useOutletContext();

  return <>{isMobile ? <Bd /> : <BuildingdemocracyDesktop />}</>;
};
import React  from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
//import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Desktop
import { Buildingdemocracy } from "./screens/Buildingdemocracy";
import { UnityBuildingdemocracy } from "./screens/UnityBuildingdemocracy";
import { BuildingdemocracyScreen } from "./screens/BuildingdemocracyScreen";
import { DivWrapper } from "./screens/DivWrapper";
import { RemoteIslandStart } from "./screens/RemoteIslandStart";
import { RemoteislandGallery } from "./screens/RemoteislandGallery";
import { Screen4 } from "./screens/Screen4";
import { Screen6 } from "./screens/Screen6";

//Mobile
import { Aboutus } from "./screens/Mobile_Aboutus";
import { Bd } from "./screens/Mobile_Bd";
import { BdScreen } from "./screens/Mobile_BdScreen";
import { BdWrapper } from "./screens/Mobile_BdWrapper";
import { Home } from "./screens/Mobile_Home";
import { Impressum } from "./screens/Mobile_Impressum";
import { ImpressumM } from "./screens/Mobile_ImpressumM";
import { KreativeWorkshops } from "./screens/Mobile_KreativeWorkshops";
import { Mitgliedwerden } from "./screens/Mobile_Mitgliedwerden";
import { Mitwirkende } from "./screens/Mobile_Mitwirkende";
import { Portfolio } from "./screens/Mobile_Portfolio";
import { Quiz } from "./screens/Mobile_Quiz";
import { Ri } from "./screens/Mobile_Ri";
import { RiScreen } from "./screens/Mobile_RiScreen";
import { RiWrapper } from "./screens/Mobile_RiWrapper";
import { Rollenspiele } from "./screens/Mobile_Rollenspiele";
import { SozialeSpiele } from "./screens/Mobile_SozialeSpiele";
import { Startscreen } from "./screens/Mobile_Startscreen";

import { Layout } from "./Layout";

const router = createHashRouter([      //if breaks change back to  const router = createBrowserRouter
  {
    element: <Layout />,                  // Wrap everything inside the Layout
    children: [
    {
      path: "/*",
      element: <Buildingdemocracy />,
    },
    {
      path: "/buildingdemocracy-start",
      element: <Buildingdemocracy />,
    },
    {
      path: "/buildingdemocracy-impressum",
      element: <BuildingdemocracyScreen />,
    },
    {
      path: "/remoteislandstart",
      element: <RemoteIslandStart />,
    },
    {
      path: "/buildingdemocracy-gallery",
      element: <DivWrapper />,
    },
    {
      path: "/buildingdemocracy-start-2",
      element: <Screen4 />,
    },
    {
      path: "/remoteisland-gallery",
      element: <RemoteislandGallery />,
    },
    {
      path: "/buildingdemocracy-start-5",
      element: <Screen6 />,
    },
    {
      path: "/bd",
      element: <Bd />,
    },
    {
      path: "/bd-2",
      element: <BdScreen />,
    },
    {
      path: "/bd-1",
      element: <BdWrapper />,
    },
    {
      path: "/impressum",
      element: <Impressum />,
    },
    {
      path: "/mitwirkende",
      element: <Mitwirkende />,
    },
    {
      path: "/ri",
      element: <Ri />,
    },
    {
      path: "/ri-1",
      element: <RiScreen />,
    },
    {
      path: "/ri-2",
      element: <RiWrapper />,
    },
    {
      path: "/startscreen",
      element: <Startscreen />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/aboutus",
      element: <Aboutus />,
    },
    {
      path: "/portfolio",
      element: <Portfolio />,
    },
    {
      path: "/quiz",
      element: <Quiz />,
    },
    {
      path: "/rollenspiele",
      element: <Rollenspiele />,
    },
    {
      path: "/kreative-workshops",
      element: <KreativeWorkshops />,
    },
    {
      path: "/soziale-spiele",
      element: <SozialeSpiele />,
    },
    {
      path: "/mitgliedwerden",
      element: <Mitgliedwerden />,
    },
    {
      path: "/impressum-m",
      element: <ImpressumM />,
    },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};

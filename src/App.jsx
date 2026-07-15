import React  from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Buildingdemocracy } from "./screens/Buildingdemocracy";
import { UnityBuildingdemocracy } from "./screens/UnityBuildingdemocracy";
import { BuildingdemocracyScreen } from "./screens/BuildingdemocracyScreen";
import { DivWrapper } from "./screens/DivWrapper";
import { RemoteIslandStart } from "./screens/RemoteIslandStart";
import { RemoteislandGallery } from "./screens/RemoteislandGallery";
import { Screen4 } from "./screens/Screen4";
import { Screen6 } from "./screens/Screen6";

const router = createBrowserRouter([
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
]);

export const App = () => {
  return <RouterProvider router={router} />;
};

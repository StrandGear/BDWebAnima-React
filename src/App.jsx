import React from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

// Layout & Switchers
import { Layout } from "./Layout";
import { Buildingdemocracy } from "./screens/Buildingdemocracy";
import { RemoteIsland } from "./screens/RemoteIsland";

// Other desktop screens
import { BuildingdemocracyScreen } from "./screens/ImpressumDesktop";
import { DivWrapper } from "./screens/BuildingdemocracyGallery";
import { Screen4 } from "./screens/Screen4";

// Sub-screens (mobile/tablet sub-routes)
import { BdScreen } from "./screens/Mobile_BdScreen";
import { BdWrapper } from "./screens/Mobile_BdWrapper";
import { Startscreen } from "./screens/Mobile_Startscreen";

//import { UnityFullscreen } from "./screens/UnityFullscreen/UnityFullscreen";

const DomainRoot = () => {
  const hostname = window.location.hostname.toLowerCase();

  // If the user visits remote-island.de, render RemoteIsland directly at "/"
  // (or use <Navigate to="/remoteisland" replace /> if you want the URL bar to show /remoteisland)
  if (hostname.includes("remote-island") || hostname.includes("remoteisland")) {
    return <RemoteIsland />;
  }

  return <Buildingdemocracy />;
};

const router = createBrowserRouter([
  {
    element: <Layout />, // Passes context={{ isMobile }} down
    children: [
      {
        path: "/",
        element: <DomainRoot />, // <-- Now "/" checks the domain!
      },
      {
        path: "/buildingdemocracy-start",
        element: <Buildingdemocracy />,
      },
      {
        path: "/bd",
        element: <Buildingdemocracy />,
      },
      {
        path: "/bd-1",
        element: <BdWrapper />,
      },
      {
        path: "/bd-2",
        element: <BdScreen />,
      },
      {
        path: "/remoteisland",
        element: <RemoteIsland />,
      },
      {
        path: "/ri",
        element: <RemoteIsland />,
      },
      {
        path: "/remote-island-start",
        element: <RemoteIsland />,
      },
      {
        path: "/remoteislandstart",
        element: <RemoteIsland />,
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
        path: "/*",
        element: <DomainRoot />,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
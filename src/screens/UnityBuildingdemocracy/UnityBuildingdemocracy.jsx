import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { Unity, useUnityContext } from "react-unity-webgl";
import "../../services/firebase";

export const UnityBuildingdemocracy = () => {
  const [isFirebaseReady, setIsFirebaseReady] = useState(false);

  useEffect(() => {
    // Small delay to ensure the window.firebase object is fully attached
    const timer = setTimeout(() => {
      setIsFirebaseReady(true);
    }, 500); 
    return () => clearTimeout(timer);
  }, []);

  const { unityProvider } = useUnityContext({
    loaderUrl: "../../../public/unity/Build/9edd899bc6b6e0bbc4f46ff33ca0bba6.loader.js",
    dataUrl: "../../../public/unity/Build/9a6aeb4cf4dcafeee9a1d054dc7408fa.data",
    frameworkUrl: "../../../public/unity/Build/a29c1b8001122d8afb2a4eebb2644813.framework.js",
    codeUrl: "../../../public/unity/Build/4c54c85938a146a1353ebe1dcb687fba.wasm",
    streamingAssetsUrl: "../../../public/unity/StreamingAssets"
  });

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      {isFirebaseReady ? (
        <Unity
          unityProvider={unityProvider}
          style={{ width: "100%", height: "100%" }}
        />
      ) : (
        <div>Loading Game...</div>
      )}
    </div>
  );
};
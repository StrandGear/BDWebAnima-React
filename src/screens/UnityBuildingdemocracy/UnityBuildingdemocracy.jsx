// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./style.css";
// import { Unity, useUnityContext } from "react-unity-webgl";
// import "../../services/firebase";

// export const UnityBuildingdemocracy = () => {
//   const [isFirebaseReady, setIsFirebaseReady] = useState(false);

//   useEffect(() => {
//     // Small delay to ensure the window.firebase object is fully attached
//     const timer = setTimeout(() => {
//       setIsFirebaseReady(true);
//     }, 500); 
//     return () => clearTimeout(timer);
//   }, []);

  const { unityProvider } = useUnityContext({
    loaderUrl: "../../../public/unity/Build/9edd899bc6b6e0bbc4f46ff33ca0bba6.loader.js",
    dataUrl: "../../../public/unity/Build/c52841c9150b40a1a91d58d841fd5675.data",
    frameworkUrl: "../../../public/unity/Build/005d4f487ee79e378e58dbac699c4593.framework.js",
    codeUrl: "../../../public/unity/Build/5f016967b961d2540b171381efa4120a.wasm",
    streamingAssetsUrl: "../../../public/unity/StreamingAssets"
  });

//   return (
//     <div style={{ width: "100%", height: "100vh" }}>
//       {isFirebaseReady ? (
//         <Unity
//           unityProvider={unityProvider}
//           style={{ width: "100%", height: "100%" }}
//         />
//       ) : (
//         <div>Loading Game...</div>
//       )}
//     </div>
//   );
// };
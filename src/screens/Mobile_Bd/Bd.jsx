import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Unity, useUnityContext } from "react-unity-webgl";
import "../../services/firebase"; 
import "./style.css";

export const Bd = () => {
  const [isFirebaseReady, setIsFirebaseReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsFirebaseReady(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const { unityProvider } = useUnityContext({
    loaderUrl: "/public/unity/Build/9edd899bc6b6e0bbc4f46ff33ca0bba6.loader.js",
    dataUrl: "/public/unity/Build/9a6aeb4cf4dcafeee9a1d054dc7408fa.data",
    frameworkUrl: "/public/unity/Build/a29c1b8001122d8afb2a4eebb2644813.framework.js",
    codeUrl: "/public/unity/Build/4c54c85938a146a1353ebe1dcb687fba.wasm",
    streamingAssetsUrl: "/public/unity/StreamingAssets"
  });

  return (
    <div className="BD">
      <div className="wiederholungsraster">
        <div className="auto-flex">
          <div className="div" />
          <div className="div" />
          <div className="div" />
        </div>
      </div>

      {/* --- STRICTLY POSITIONED UNITY CONTAINER --- */}
      <div 
        className="unity-mobile-container" 
        style={{
          position: "absolute",
          top: "15%", // Pushes it down below your top toggle bar
          left: "50%",
          transform: "translateX(-50%)", // Centers it perfectly
          width: "340px", // Set this to the exact width you want for the game
          height: "730px", // Set this to the exact height you want
          zIndex: 5, // Keeps it as a background layer
          borderRadius: "30px", // Gives it rounded "phone" corners
          overflow: "hidden", // Ensures the game doesn't bleed out of the rounded corners
          backgroundColor: "#1C1C1C", // A dark placeholder background while loading
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center"
        }}
      >
        {isFirebaseReady ? (
          <Unity 
            unityProvider={unityProvider} 
            style={{ width: "100%", height: "100%" }} 
          />
        ) : (
          <div className="loading-text" style={{ color: "#fff" }}>Loading Game...</div>
        )}
      </div>

      <div className="rechteck" />
      <div className="rechteck-2" />
      
      {/* Top Toggle */}
      <Link className="gruppe-2" to="/ri" style={{ zIndex: 20 }}>
        <div className="text-wrapper">BUILDING DEMOCRACY</div>
        <div className="text-wrapper-2">REMOTE ISLAND</div>
        <div className="schalter">
          <div className="uncheck" />
        </div>
      </Link>
      
      <div className="NS-dok-logo" />
      
      <Link className="text-wrapper-3" to="/mitwirkende" style={{ zIndex: 20 }}>
        Impressum
      </Link>
      <Link className="text-wrapper-4" to="/impressum" style={{ zIndex: 20 }}>
        Mitwirkende
      </Link>
      
      {/* --- ARROWS AND TEXT GUARANTEED TO BE ON TOP --- */}
      <Link className="gruppe-3" to="/bd-1" style={{ zIndex: 20, position: "absolute" }}>
        <img className="polygon" alt="Polygon" src="/img/polygon-1-4.png" />
        <div className="ergebnis-beitr-ge">
          Ergebnis-
          <br />
          beiträge
        </div>
      </Link>
      
      <Link className="gruppe-4" to="/bd-2" style={{ zIndex: 20, position: "absolute" }}>
        <div className="spielaleitung">
          Spielaleitung
          <br />
          Download
        </div>
        <img className="polygon" alt="Polygon" src="/img/polygon-3-3.png" />
      </Link>
    </div>
  );
};
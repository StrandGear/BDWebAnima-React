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
    loaderUrl: "/BDWebAnima-React/unity/Build/9edd899bc6b6e0bbc4f46ff33ca0bba6.loader.js",
    dataUrl: "/BDWebAnima-React/unity/Build/c52841c9150b40a1a91d58d841fd5675.data",
    frameworkUrl: "/BDWebAnima-React/unity/Build/005d4f487ee79e378e58dbac699c4593.framework.js",
    codeUrl: "/BDWebAnima-React/unity/Build/5f016967b961d2540b171381efa4120a.wasm",
    streamingAssetsUrl: "/BDWebAnima-React/unity/StreamingAssets"
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

      {/* Responsive Unity WebGL Container */}
      <div className="unity-mobile-container">
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
      <Link className="gruppe-2" to="/ri">
        <div className="text-wrapper">BUILDING DEMOCRACY</div>
        <div className="schalter">
          <div className="uncheck" />
        </div>
        <div className="text-wrapper-2">REMOTE ISLAND</div>
      </Link>
      
      <div className="NS-dok-logo" />
      
      <div className="footer-links">
        <Link className="footer-link" to="/impressum">Mitwirkende</Link>
        <Link className="footer-link" to="/mitwirkende">Impressum</Link>
      </div>
      
      {/* Side Control Links */}
      <Link className="gruppe-3" to="/bd-1">
        <img className="polygon" alt="Previous" src="/BDWebAnima-React/img/polygon-1-4.png" />
        <div className="ergebnis-beitr-ge">
          Ergebnis-
          <br />
          beiträge
        </div>
      </Link>
      
      <Link className="gruppe-4" to="/bd-2">
        <div className="spielaleitung">
          Spielaleitung
          <br />
          Download
        </div>
        <img className="polygon" alt="Next" src="/BDWebAnima-React/img/polygon-3-3.png" />
      </Link>
    </div>
  );
};
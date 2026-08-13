import React, { useState, useEffect } from "react";
import { useWindowSize } from "../../useWindowSize";
import { Link } from "react-router-dom";
import { Unity, useUnityContext } from "react-unity-webgl"; // Import these
import "../../services/firebase"; // Keep your Firebase bridge
import "./style.css";

export const BuildingdemocracyDesktop = () => {
  
  const [isFirebaseReady, setIsFirebaseReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsFirebaseReady(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Configure paths (make sure these files are in your /public folder)
  const { unityProvider } = useUnityContext({
    loaderUrl: "/public/unity/Build/9edd899bc6b6e0bbc4f46ff33ca0bba6.loader.js",
    dataUrl: "/public/unity/Build/9a6aeb4cf4dcafeee9a1d054dc7408fa.data",
    frameworkUrl: "/public/unity/Build/a29c1b8001122d8afb2a4eebb2644813.framework.js",
    codeUrl: "/public/unity/Build/4c54c85938a146a1353ebe1dcb687fba.wasm",
    streamingAssetsUrl: "/public/unity/StreamingAssets"
  });
  
  return (
    <div className="buildingdemocracy">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="wiederholungsraster">
            <div className="auto-flex">
              <div className="div" />
              <div className="div" />
              <div className="div" />
            </div>
            <div className="auto-flex">
              <div className="div" />
              <div className="div" />
              <div className="div" />
            </div>
            <div className="auto-flex">
              <div className="div" />
              <div className="div" />
              <div className="div" />
            </div>
            <div className="auto-flex">
              <div className="div" />
              <div className="div" />
              <div className="div" />
            </div>
            <div className="auto-flex">
              <div className="div" />
              <div className="div" />
              <div className="div" />
            </div>
          </div>
          <Link className="schalter-mit" to="/remoteislandstart">
            <div className="text-wrapper">BUILDING DEMOCRACY</div>
            <div className="text-wrapper-2">REMOTE ISLAND</div>
            <div className="schalter">
              <div className="rechteck" />
              <div className="uncheck" />
            </div>
          </Link>
          <div className="NS-dok-logo" />
          <div className="smartphone" />
          <Link className="text-wrapper-3" to="/buildingdemocracy-impressum">
            Impressum
          </Link>
          <div className="spielaleitung">
            Spielaleitung
            <br />
            Download
          </div>
          <Link className="text-wrapper-4" to="/buildingdemocracy-start-5">
            Mitwirkende
          </Link>
          <div className="gruppe">
            {isFirebaseReady ? (
              <Unity 
                unityProvider={unityProvider} 
                style={{ width: "100%", height: "100%", borderRadius: "20px", zIndex: 5, }} 
              />
            ) : (
              <div className="loading-text">Loading Game...</div>
            )}
          </div>
          <Link
            className="k-nigin-luise-schule-wrapper"
            to="/buildingdemocracy-start-2"
          >
            <p className="k-nigin-luise-schule">
              <span className="span">
                Königin-Luise-
                <br />
                Schule:{" "}
              </span>
              <span className="text-wrapper-6">Klasse 10b, 2026</span>
            </p>
          </Link>
          <div className="gruppe-3">
            <p className="p">
              <span className="span">
                Königin-Luise-
                <br />
                Schule:{" "}
              </span>
              <span className="text-wrapper-6">Klasse 10b, 2026</span>
            </p>
          </div>
          <div className="gruppe-4">
            <p className="k-nigin-luise-schule-2">
              <span className="span">
                Königin-Luise-
                <br />
                Schule:{" "}
              </span>
              <span className="text-wrapper-6">Klasse 10b, 2026</span>
            </p>
          </div>
          <div className="gruppe-5">
            <p className="k-nigin-luise-schule-3">
              <span className="span">
                Königin-Luise-
                <br />
                Schule:{" "}
              </span>
              <span className="text-wrapper-6">Klasse 10b, 2026</span>
            </p>
          </div>
          <Link to="/buildingdemocracy-start-5">
          <img className="polygon" alt="Polygon" src="/img/polygon-2-3.png" />
          </Link>
          {/* <img className="polygon" alt="Polygon" src="/img/polygon-2-3.png" /> */}
          <Link to="/buildingdemocracy-start-2">
            <img className="img" alt="Polygon" src="/img/polygon-3-3.png" />
          </Link>
          <Link className="gruppe-6" to="/buildingdemocracy-gallery">
            <div className="gruppe-7">
              <div className="rechteck-2" />
              <div className="rechteck-3" />
              <div className="rechteck-4" />
              <div className="rechteck-5" />
            </div>
            <div className="text-wrapper-7">Ansicht ändern</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from "react";
import { useWindowSize } from "../../useWindowSize";
import { Link } from "react-router-dom";
import { Unity, useUnityContext } from "react-unity-webgl"; // Import these
import "../../services/firebase"; // Keep your Firebase bridge
import { fetchApprovedTestimonies } from "../../services/testimonyService";
import "./style.css";

// Static (non-carousel) testimony card: renders once and never reshuffles.
// Shows only the photo + org name, and always links through to the full
// carousel screen (Screen4) so people can tap any of the 4 previews to
// browse everything there.
const CAROUSEL_ROUTE = "/buildingdemocracy-start-2";

const StaticTestimonyCard = ({ className, textClassName, testimony }) => {
  if (!testimony) return null; // hide the slot rather than show a placeholder

  const style = testimony.imageUrl
    ? {
        backgroundImage: `url(${testimony.imageUrl})`,
        backgroundPosition: "50% 50%",
        backgroundSize: "cover",
      }
    : undefined;

  return (
    <Link className={className} to={CAROUSEL_ROUTE} style={style}>
      <div className={textClassName}>
        <p className="text-wrapper-6" style={{ margin: 0 }}>
          {testimony.orgaName}
        </p>
      </div>
    </Link>
  );
};

export const BuildingdemocracyDesktop = () => {
  
  const [isFirebaseReady, setIsFirebaseReady] = useState(false);
  const [testimonies, setTestimonies] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => setIsFirebaseReady(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let cancelled = false;
    fetchApprovedTestimonies().then((data) => {
      if (!cancelled) setTestimonies(data);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  // Left-to-right slot order matches actual on-screen position (by `left` px).
  const [slot0, slot1, slot2, slot3] = testimonies;

  const { unityProvider } = useUnityContext({
    loaderUrl: "/BDWebAnima-React/unity/Build/9edd899bc6b6e0bbc4f46ff33ca0bba6.loader.js",
    dataUrl: "/BDWebAnima-React/unity/Build/9a6aeb4cf4dcafeee9a1d054dc7408fa.data",
    frameworkUrl: "/BDWebAnima-React/unity/Build/a29c1b8001122d8afb2a4eebb2644813.framework.js",
    codeUrl: "/BDWebAnima-React/unity/Build/4c54c85938a146a1353ebe1dcb687fba.wasm",
    streamingAssetsUrl: "/BDWebAnima-React/unity/StreamingAssets"
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
          <StaticTestimonyCard
            className="k-nigin-luise-schule-wrapper"
            textClassName="k-nigin-luise-schule"
            testimony={slot2}
          />
          <StaticTestimonyCard
            className="gruppe-3"
            textClassName="p"
            testimony={slot1}
          />
          <StaticTestimonyCard
            className="gruppe-4"
            textClassName="k-nigin-luise-schule-2"
            testimony={slot3}
          />
          <StaticTestimonyCard
            className="gruppe-5"
            textClassName="k-nigin-luise-schule-3"
            testimony={slot0}
          />
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

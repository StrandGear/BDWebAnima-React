import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Unity, useUnityContext } from "react-unity-webgl";
import "../../services/firebase"; 
import "./style.css";
import { LegalText, legalContent, mitwirkendeContent } from "./LegalText";
import { fetchVideoUrls } from "../../services/videoService";


export const VideoModal = ({ setActiveView, videoKey = "bd_video" }) => {
  const [videoUrl, setVideoUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    fetchVideoUrls().then((urls) => {
      if (!cancelled) {
        if (urls && urls[videoKey]) {
          setVideoUrl(urls[videoKey]);
        }
        setIsLoading(false);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [videoKey]);

  return (
    <div className="video-modal-backdrop" onClick={() => setActiveView("game")}>
      <div className="video-modal-container" onClick={(e) => e.stopPropagation()}>
        <button 
          className="video-modal-close" 
          onClick={() => setActiveView("game")}
          aria-label="Close"
        >
          ✕
        </button>

        {isLoading ? (
          <div className="loading-text" style={{ color: "#fff" }}>
            Loading Video...
          </div>
        ) : videoUrl ? (
          <video 
            src={videoUrl} 
            controls 
            autoPlay 
            className="popup-video-element"
          />
        ) : (
          <div className="error-text" style={{ color: "#fff" }}>
            Video could not be loaded.
          </div>
        )}
      </div>
    </div>
  );
};

export const Bd = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Track initial active view passed from navigation state (e.g. from /bd-wrapper or /bd-2)
  const [activeView, setActiveView] = useState(
    location.state?.activeView || "game"
  );

  // Sync state if navigation state changes while mounted
  useEffect(() => {
    if (location.state?.activeView) {
      setActiveView(location.state.activeView);
    }
  }, [location.state]);

  const [isFirebaseReady, setIsFirebaseReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsFirebaseReady(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const { unityProvider } = useUnityContext({
    loaderUrl: "/unity/Build/9edd899bc6b6e0bbc4f46ff33ca0bba6.loader.js",
    dataUrl: "/unity/Build/6640e2f4be267caee486349ef91bf17e.data",
    frameworkUrl: "/unity/Build/005d4f487ee79e378e58dbac699c4593.framework.js",
    codeUrl: "/unity/Build/5f016967b961d2540b171381efa4120a.wasm",
    streamingAssetsUrl: "/unity/StreamingAssets"
  });

  // Handler to toggle overlay view or return to game
  const handleToggleView = (targetView) => {
    const nextView = activeView === targetView ? "game" : targetView;
    setActiveView(nextView);

    // Keep history state synchronized
    navigate(location.pathname, {
      replace: true,
      state: { ...location.state, activeView: nextView, from: location.state?.from || location.pathname }
    });
  };

  return (
    <div className="BD">
      {/* Background Waves Grid */}
      <div className="wiederholungsraster">
        <div className="auto-flex">
          <div className="div" />
          <div className="div" />
          <div className="div" />
        </div>
      </div>

      {/* Main Game Container */}
      <div className="unity-mobile-container">
        {/* Unity Build stays mounted in background */}
        <div className={`unity-wrapper ${activeView !== "game" ? "hidden-behind" : ""}`}>
          {isFirebaseReady ? (
            <Unity 
              unityProvider={unityProvider} 
              style={{ width: "100%", height: "100%" }} 
            />
          ) : (
            <div className="loading-text" style={{ color: "#fff" }}>Loading Game...</div>
          )}
        </div>

        {/* Purple Overlay Container rendered on top when activeView !== "game" */}
        {activeView !== "game" && (
          <div className="info-overlay-card">
            <button 
              className="overlay-close-btn" 
              onClick={() => handleToggleView(activeView)}
              aria-label="Close"
            >
              ✕
            </button>
            <div className="info-overlay-scroll">
              {activeView === "impressum" && <LegalText content={legalContent} />}
              {activeView === "mitwirkende" && <LegalText content={mitwirkendeContent} />}
            </div>
          </div>
        )}
      </div>

      {/* Header & Footer Bars */}
      <div className="rechteck" />
      <div className="rechteck-2" />
      
      {/* Top Toggle Header */}
      {/* <Link className="gruppe-2" to="/ri">
        <div className="text-wrapper">BUILDING DEMOCRACY</div>
        <div className="schalter">
          <div className="uncheck" />
        </div>
        <div className="text-wrapper-2">REMOTE ISLAND</div>
      </Link> */}
      
      <div className="NS-dok-logo" />
      
      {/* Footer Navigation Buttons acting as overlay toggles */}
      <div className="footer-links">
        <button 
          className={`footer-link-btn ${activeView === "mitwirkende" ? "active" : ""}`} 
          onClick={() => handleToggleView("mitwirkende")}
        >
          {activeView === "mitwirkende" ? "Home" : "Mitwirkende"}
        </button>
        <button 
          className={`footer-link-btn ${activeView === "impressum" ? "active" : ""}`} 
          onClick={() => handleToggleView("impressum")}
        >
          {activeView === "impressum" ? "Home" : "Impressum"}
        </button>
        <button 
          className={`footer-link-btn ${activeView === "video" ? "active" : ""}`} 
          onClick={() => handleToggleView("video")}
        >
          {activeView === "video" ? "Home" : "Video"}
        </button>
      </div>
      
      {/* Side Action Controls */}
      <Link className="gruppe-3" to="/bd-1">
        <img className="polygon" alt="Previous" src="/img/polygon-1-4.png" />
        <div className="ergebnis-beitr-ge">
          Ergebnis-
          <br />
          beiträge
        </div>
      </Link>
      
      <Link className="gruppe-4" to="/bd-2">
        <div className="spielaleitung">
          Spielanleitung
          <br />
          Download
        </div>
        <img className="polygon" alt="Next" src="/img/polygon-3-3.png" />
      </Link>

        {/* Dynamic Video Popup */}
        {activeView === "video" && (
          <VideoModal setActiveView={setActiveView} />
        )}
    </div>
  );
};
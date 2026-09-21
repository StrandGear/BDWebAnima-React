import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Unity, useUnityContext } from "react-unity-webgl";
import "../../services/firebase"; 
import "./style.css";
import { LegalText, legalContent, mitwirkendeContent } from "./LegalText";
import { fetchVideoUrls } from "../../services/videoService";
import "../../services/firebase";


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
  const [isFirebaseReady, setIsFirebaseReady] = useState(false);

  // New States for Start Screen and Loading Timeout
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [showReloadPrompt, setShowReloadPrompt] = useState(false);

  // Sync state if navigation state changes while mounted
  useEffect(() => {
    if (location.state?.activeView) {
      setActiveView(location.state.activeView);
    }
  }, [location.state]);

  useEffect(() => {
    const timer = setTimeout(() => setIsFirebaseReady(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "/unity/Build/9edd899bc6b6e0bbc4f46ff33ca0bba6.loader.js",
    dataUrl: "/unity/Build/6640e2f4be267caee486349ef91bf17e.data",
    frameworkUrl: "/unity/Build/005d4f487ee79e378e58dbac699c4593.framework.js",
    codeUrl: "/unity/Build/5f016967b961d2540b171381efa4120a.wasm",
    streamingAssetsUrl: "/unity/StreamingAssets"
  });
  
  // Timeout logic: if loading takes longer than 15 seconds after pressing start
  useEffect(() => {
    let timer;
    if (isGameStarted && !isLoaded) {
      timer = setTimeout(() => setShowReloadPrompt(true), 15000);
    }
    if (isLoaded) {
      setShowReloadPrompt(false);
    }
    return () => clearTimeout(timer);
  }, [isGameStarted, isLoaded]);

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

        {/* The Unity Canvas mounts immediately to preload, but is hidden until started and loaded */}
        <div className={`unity-wrapper ${activeView !== "game" ? "hidden-behind" : ""}`}>
          {isFirebaseReady && (
            <Unity 
              unityProvider={unityProvider} 
              style={{ width: "100%", height: "100%", display: isGameStarted && isLoaded ? "block" : "none" }} 
            />
          )}
        </div>

        {/* Start Screen Overlay */}
        {!isGameStarted && (
          <div className="start-screen-overlay">
            <div className="BD-logo-3">
              <img className="pfad-10" alt="Pfad" src="/img/pfad-210-2.png" />
              <div className="gruppe-31" />
            </div>
            <div className="deine-demokratie-app-3">
              Deine Demokratie-App<br />lokal. digital. interaktiv
            </div>
            <button className="button-3" onClick={() => setIsGameStarted(true)}>
              <span className="text-wrapper-31">Tap to start!</span>
            </button>
          </div>
        )}

        {/* Custom Loading Screen Overlay */}
        {isGameStarted && !isLoaded && (
          <div className="loading-overlay">
            <div className="loading-text-centered">Loading Game... {Math.round(loadingProgression * 100)}%</div>
            <div className="progress-bar-container">
              <div 
                className="progress-bar-fill" 
                style={{ width: `${Math.round(loadingProgression * 100)}%` }} 
              />
            </div>
            {showReloadPrompt && (
              <div className="reload-prompt">
                Loading is taking longer than usual.<br />
                <button onClick={() => window.location.reload()} className="reload-btn">Reload Page</button>
              </div>
            )}
          </div>
        )}

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
      {/* Side elements disappear once the game is started */}
      
          <Link className="gruppe-3" to="/bd-1">
            <img className="polygon" alt="Previous" src="/img/polygon-1-4.png" />
            {!isGameStarted && (
              <div className="ergebnis-beitr-ge">Ergebnis-<br />beiträge</div>
            )}
          </Link>
          
          <Link className="gruppe-4" to="/bd-2">
           {!isGameStarted && (
            <div className="spielaleitung">Spielanleitung<br />Download</div>
           )}
            <img className="polygon" alt="Next" src="/img/polygon-3-3.png" />
          </Link>

        {/* Dynamic Video Popup */}
        {activeView === "video" && (
          <VideoModal setActiveView={setActiveView} />
        )}
    </div>
  );
};
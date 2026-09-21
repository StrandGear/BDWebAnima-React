import React, { useState, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import "../../services/firebase";
import { Link, useLocation } from "react-router-dom";
import { fetchApprovedTestimonies } from "../../services/testimonyService";
import "./style.css";
import { LegalText, legalContent, mitwirkendeContent } from "./LegalText";
import { DesktopLayout } from "../../DesktopLayout";
import { fetchVideoUrls } from "../../services/videoService";

const CAROUSEL_ROUTE = "/buildingdemocracy-start-2";

const StaticTestimonyCard = ({ className, textClassName, testimony }) => {
  if (!testimony) return null;

  const style = testimony.imageUrl
    ? {
        backgroundImage: `url(${testimony.imageUrl})`,
        backgroundPosition: "50% 50%",
        backgroundSize: "cover",
      }
    : undefined;

  return (
    <Link
      className={className}
      to={CAROUSEL_ROUTE}
      state={{ sessionId: testimony.sessionId }}
      style={style}
    >
      <div className={textClassName}>
        <p className="text-wrapper-6" style={{ margin: 0 }}>
          {testimony.orgaName}
        </p>
      </div>
    </Link>
  );
};

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

export const BuildingdemocracyDesktop = () => {
  const location = useLocation();

  const [activeView, setActiveView] = useState(
    location.state?.activeView || "game"
  );

  useEffect(() => {
    if (location.state?.activeView) {
      setActiveView(location.state.activeView);
    }
  }, [location.state]);
  
  const [isFirebaseReady, setIsFirebaseReady] = useState(false);
  const [testimonies, setTestimonies] = useState([]);

  // Unity start & loading state trackers
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [showReloadPrompt, setShowReloadPrompt] = useState(false);

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

  const [slot0, slot1, slot2, slot3] = testimonies;

  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "/unity/Build/9edd899bc6b6e0bbc4f46ff33ca0bba6.loader.js",
    dataUrl: "/unity/Build/6640e2f4be267caee486349ef91bf17e.data",
    frameworkUrl: "/unity/Build/005d4f487ee79e378e58dbac699c4593.framework.js",
    codeUrl: "/unity/Build/5f016967b961d2540b171381efa4120a.wasm",
    streamingAssetsUrl: "/unity/StreamingAssets"
  });

  // Long-load timeout: trigger prompt after 15 seconds of waiting
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

  return (
    <DesktopLayout>
      <div className="buildingdemocracy">
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
           {/* Top Bar with toggle */}
            {/* <Link className="schalter-mit" to="/remoteislandstart">
              <div className="text-wrapper">BUILDING DEMOCRACY</div>
              <div className="text-wrapper-2">REMOTE ISLAND</div>
              <div className="schalter">
                <div className="rechteck" />
                <div className="uncheck" />
              </div>
            </Link> */}
            <div className="NS-dok-logo" />

            <div className="middle-screen">
              {/* Phone bezel frame */}
              <div className="smartphone" /> 

              {/* Inner Screen Container */}
              <div className="smartphone-screen">

                {/* Unity Container (Preloads in background, visible only when started and loaded) */}
                <div className={`unity-wrapper ${activeView !== "game" ? "hidden-behind" : "active"}`}>
                  {isFirebaseReady && (
                    <Unity 
                      unityProvider={unityProvider} 
                      style={{ 
                        width: "100%", 
                        height: "100%", 
                        borderRadius: "20px",
                        display: isGameStarted && isLoaded ? "block" : "none" 
                      }} 
                    />
                  )}
                </div>

                {/* Start Screen Overlay */}
                {!isGameStarted && (
                  <div className="desktop-start-screen-overlay">
                    <div className="desktop-BD-logo">
                      <img className="desktop-pfad" alt="Pfad" src="/img/pfad-210-2.png" />
                      <div className="desktop-gruppe" />
                    </div>
                    <div className="desktop-deine-demokratie-app">
                      Deine Demokratie-App<br />lokal. digital. interaktiv
                    </div>
                    <button className="desktop-start-btn" onClick={() => setIsGameStarted(true)}>
                      <span className="desktop-start-btn-text">Tap to start!</span>
                    </button>
                  </div>
                )}

                {/* Loading Progress Overlay */}
                {isGameStarted && !isLoaded && (
                  <div className="desktop-loading-overlay">
                    <div className="desktop-loading-text">
                      Loading Game... {Math.round(loadingProgression * 100)}%
                    </div>
                    <div className="desktop-progress-container">
                      <div 
                        className="desktop-progress-fill" 
                        style={{ width: `${Math.round(loadingProgression * 100)}%` }} 
                      />
                    </div>
                    {showReloadPrompt && (
                      <div className="desktop-reload-prompt">
                        Loading is taking longer than usual.<br />
                        <button onClick={() => window.location.reload()} className="desktop-reload-btn">
                          Reload Page
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* Impressum / Mitwirkende Overlays */}
                {activeView !== "game" && (
                  <div className="phone-text-overlay">
                    {activeView === "impressum" && <LegalText content={legalContent} />}
                    {activeView === "mitwirkende" && <LegalText content={mitwirkendeContent} />}
                  </div>
                )}
              </div>
            </div>

            <div className="bottom-nav-container">
              <button 
                className="raw-text-btn nav-btn"
                onClick={() => setActiveView(prev => prev === "mitwirkende" ? "game" : "mitwirkende")}
              >
                {activeView === "mitwirkende" ? "Home" : "Mitwirkende"}
              </button>

              <button 
                className="raw-text-btn nav-btn"
                onClick={() => setActiveView(prev => prev === "impressum" ? "game" : "impressum")}
              >
                {activeView === "impressum" ? "Home" : "Impressum"}
              </button>

              <button 
                className="raw-text-btn nav-btn"
                onClick={() => setActiveView(prev => prev === "video" ? "game" : "video")}
              >
                {activeView === "video" ? "Home" : "Video"}
              </button>

              {/* Spielanleitung download link hides when playing */}
              {!isGameStarted && (
                <a 
                  href="/pdf/Anleitung.pdf" 
                  download="Anleitung.pdf"
                  className="raw-text-btn nav-btn download-btn"
                >
                  Spielanleitung<br />Download
                </a>
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
            <Link to="/buildingdemocracy-start-2">
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

        {activeView === "video" && (
          <VideoModal setActiveView={setActiveView} />
        )}
      </div>
    </DesktopLayout>
  );
};
import React, { useState, useEffect } from "react";
// import { Unity, useUnityContext } from "react-unity-webgl";
import "../../services/firebase";
import { Link, useLocation } from "react-router-dom";
import { fetchApprovedTestimonies } from "../../services/testimonyService";
import "./style.css";
import { LegalText, legalContent, mitwirkendeContent } from "./LegalText";
import { DesktopLayout } from "../../DesktopLayout";
// import { fetchVideoUrls } from "../../services/videoService";

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

const ONBOARDING_STORAGE_KEY = "bd_has_seen_onboarding";

export const FirstTimeModal = ({ onClose, onProceed }) => {
  return (
    <div className="onboarding-modal-backdrop" onClick={onClose}>
      <div
        className="onboarding-modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="onboarding-modal-close"
          onClick={onClose}
          aria-label="Schließen"
        >
          ✕
        </button>

        <div className="onboarding-modal-content">
          <p className="onboarding-title">
            <strong>Zum ersten Mal bei Building Democracy?</strong>
          </p>
          <p className="onboarding-paragraph">
            Dann schau dir zuerst die Anleitung an, bevor du mit „Tap to start!“
            die Web App öffnest – vor allem wenn du als Spielleitung eine neue
            Session beginnen möchtest. Die Anleitung findest du unten in der
            Menüzeile.
          </p>
          <p className="onboarding-paragraph">
            Building Democracy ist für die Nutzung auf dem Smartphone optimiert,
            funktioniert aber auch auf Tablets und über den Desktop.
          </p>
          <p className="onboarding-paragraph" style={{ marginBottom: 0 }}>
            Viel Spaß!
          </p>
        </div>

        <div className="onboarding-modal-actions">
          <a
            href="/Anleitung.pdf"
            download="Anleitung.pdf"
            className="onboarding-btn onboarding-btn-download"
          >
            Anleitung herunterladen (PDF)
          </a>

          <a
            href="https://app.remote-island.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="onboarding-btn onboarding-btn-start"
            onClick={onProceed}
          >
            Weiter zur Web App
          </a>
        </div>
      </div>
    </div>
  );
};

const YOUTUBE_EMBED_URLS = {
  bd_video: "https://www.youtube.com/embed/kX_rK7IElps?autoplay=1&rel=0",
  ri_video: "https://www.youtube.com/embed/SmDjDmjwr9s?autoplay=1&rel=0",
};

export const VideoModal = ({ setActiveView, videoKey = "bd_video" }) => {
  const embedUrl = YOUTUBE_EMBED_URLS[videoKey] || YOUTUBE_EMBED_URLS.bd_video;

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

        <iframe
          src={embedUrl}
          title={videoKey === "ri_video" ? "Remote Island Video" : "Building Democracy Video"}
          className="popup-video-element"
          style={{ width: "100%", height: "100%", aspectRatio: "16 / 9", border: "none" }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export const BuildingdemocracyDesktop = () => {
  const location = useLocation();

  const [activeView, setActiveView] = useState(
    location.state?.activeView || "game"
  );

  const [showOnboardingModal, setShowOnboardingModal] = useState(false);

  // Show onboarding popup automatically on first page load
  useEffect(() => {
    try {
      const hasSeen = localStorage.getItem(ONBOARDING_STORAGE_KEY);
      if (!hasSeen) {
        localStorage.setItem(ONBOARDING_STORAGE_KEY, "true");
        setShowOnboardingModal(true);
      }
    } catch (err) {
      // Fallback if localStorage is blocked (e.g., strict private browsing)
      setShowOnboardingModal(true);
    }
  }, []);

  useEffect(() => {
    if (location.state?.activeView) {
      setActiveView(location.state.activeView);
    }
  }, [location.state]);
  
  // const [isFirebaseReady, setIsFirebaseReady] = useState(false);
  const [testimonies, setTestimonies] = useState([]);

  // Unity start & loading state trackers
  const [isGameStarted, setIsGameStarted] = useState(false);
  // const [showReloadPrompt, setShowReloadPrompt] = useState(false);

  /*
  useEffect(() => {
    const timer = setTimeout(() => setIsFirebaseReady(true), 500);
    return () => clearTimeout(timer);
  }, []);
  */

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

  /* --- COMMENTED OUT EMBEDDED UNITY LOGIC ---
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "/unity/Build/9edd899bc6b6e0bbc4f46ff33ca0bba6.loader.js",
    dataUrl: "/unity/Build/5a35c858ac421439dcf8ca1f1924def1.data",
    frameworkUrl: "/unity/Build/6314cfac6f8a68e47bb8de07d85ba15e.framework.js",
    codeUrl: "/unity/Build/885b52e40cdd83f0e86e748b14a2fa63.wasm",
    streamingAssetsUrl: "/unity/StreamingAssets",

    companyName: "NS-DOK Köln",
    productName: "Building Democracy",
    productVersion: "1.0",

    // 2. Intercept fatal Unity errors to suppress the alert popup and auto-reload
    errorHandler: (message) => {
      console.warn("Intercepted Unity crash, reloading page...", message);
      window.location.reload();
      return true; // Returns true to prevent default browser alert/popup
    }
  });

  // Auto-reload page if the user leaves/locks the phone for more than 30 seconds
  useEffect(() => {
    let hiddenTime = null;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Record the timestamp when the user leaves or locks the phone
        hiddenTime = Date.now();
      } else {
        // User has returned / unlocked the phone
        if (hiddenTime) {
          const elapsedSeconds = (Date.now() - hiddenTime) / 1000;
          
          // If the phone was locked/inactive for more than 30 seconds, reload the page
          if (elapsedSeconds > 50) {
            console.log(`App was inactive for ${Math.round(elapsedSeconds)}s. Reloading page...`);
            window.location.reload();
          }
        }
        hiddenTime = null;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // Automatically catch Unity runtime errors and force a page reload
  useEffect(() => {
    const handleUnityError = (message) => {
      console.error("Caught Unity error:", message);
      window.location.reload();
    };

    // Listen to Unity canvas error events
    if (window.addEventListener) {
      window.addEventListener("unity-error", handleUnityError);
    }

    return () => {
      if (window.removeEventListener) {
        window.removeEventListener("unity-error", handleUnityError);
      }
    };
  }, []);

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
  --- END COMMENTED OUT EMBEDDED UNITY LOGIC --- */

  return (
    <DesktopLayout>
      <div className="buildingdemocracy">
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
           {/* Top Bar with toggle */}
              <Link className="schalter-mit" to="/remoteislandstart">
              <div className="text-wrapper">BUILDING DEMOCRACY</div>
              <div className="text-wrapper-2">REMOTE ISLAND</div>
              <div className="schalter">
                <div className="rechteck" />
                <div className="uncheck" />
              </div>
            </Link> 
            <Link 
              to="https://nsdok.de/Start" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Zur Startseite" 
              className="NS-dok-logo" 
            />

            <div className="middle-screen">
              {/* Phone bezel frame */}
              <div className="smartphone" /> 

              {/* Inner Screen Container */}
              <div className="smartphone-screen">

                {/* Unity Container (Preloads in background, visible only when started and loaded) */}
                {/* 
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
                */}

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

                    {/* Opens external link in new tab instead of starting embedded Unity */}
                    <a
                      href="https://app.remote-island.de/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="desktop-start-btn"
                      style={{ textDecoration: "none" }}
                      //onClick={handleStartClick}
                    >
                      <span className="desktop-start-btn-text">Tap to start!</span>
                    </a>

                  </div>
                )}

                {/* Loading Progress Overlay */}
                {/* 
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
                */}

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
                <a 
                  href="/Anleitung.pdf" 
                  download="Anleitung.pdf"
                  className="raw-text-btn nav-btn download-btn"
                >
                  Wie funktioniert’s? <br />Anleitung
                </a>
              {/* Datenschutz download link */}
                <a 
                  href="/Datenschutz.pdf" 
                  download="Datenschutz.pdf"
                  className="raw-text-btn nav-btn download-btn"
                >
                  Datenschutz<br />Download
                </a>
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

        {showOnboardingModal && (
        <FirstTimeModal
          onClose={() => setShowOnboardingModal(false)}
          onProceed={() => setShowOnboardingModal(false)}
        />
        )}

      </div>
    </DesktopLayout>
  );
};
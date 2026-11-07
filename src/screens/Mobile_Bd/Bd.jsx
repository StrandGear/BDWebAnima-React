import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { Unity, useUnityContext } from "react-unity-webgl";
import "../../services/firebase"; 
import "./style.css";
import { LegalText, legalContent, mitwirkendeContent } from "./LegalText";
// import { fetchVideoUrls } from "../../services/videoService";
import "../../services/firebase";


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

const KEYBOARD_HEIGHT_THRESHOLD = 100; // px — ignore tiny visualViewport jitter


const InputPreviewBar = () => {
  const [preview, setPreview] = useState(null);
  const activeFieldRef = useRef(null);
  const hadKeyboardOverlapRef = useRef(false);

  useEffect(() => {
    const isTextField = (el) =>
      el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA");

    const handleFocusIn = (e) => {
      if (!isTextField(e.target)) return;
      activeFieldRef.current = e.target;
      hadKeyboardOverlapRef.current = false;
      setPreview(e.target.value);
    };

    const handleInput = (e) => {
      if (activeFieldRef.current && e.target === activeFieldRef.current) {
        setPreview(e.target.value);
      }
    };

    const checkKeyboardClosed = () => {
      const vv = window.visualViewport;
      if (!vv) return;
      const overlap = window.innerHeight - vv.height - vv.offsetTop;

      if (overlap >= 80) {
        // Mark that the full on-screen keyboard actually opened
        hadKeyboardOverlapRef.current = true;
      } else if (hadKeyboardOverlapRef.current && overlap < 80) {
        // Only close if the keyboard was open and just collapsed
        setPreview(null);
        activeFieldRef.current = null;
        hadKeyboardOverlapRef.current = false;
      }
    };

    const handleFocusOut = (e) => {
      if (activeFieldRef.current && e.target === activeFieldRef.current) {
        setPreview(null);
        activeFieldRef.current = null;
        hadKeyboardOverlapRef.current = false;
      }
    };

    document.addEventListener("focusin", handleFocusIn);
    document.addEventListener("input", handleInput);
    document.addEventListener("focusout", handleFocusOut);
    window.visualViewport?.addEventListener("resize", checkKeyboardClosed);

    return () => {
      document.removeEventListener("focusin", handleFocusIn);
      document.removeEventListener("input", handleInput);
      document.removeEventListener("focusout", handleFocusOut);
      window.visualViewport?.removeEventListener("resize", checkKeyboardClosed);
    };
  }, []);

  if (preview === null) return null;

  return (
    <div className="input-preview-bar">
      <span className="input-preview-text">
        {preview || ""}
        <span className="blinking-cursor">|</span>
      </span>
    </div>
  );
};

export const Bd = () => {
  const location = useLocation();
  const navigate = useNavigate();

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
  // Track initial active view passed from navigation state (e.g. from /bd-wrapper or /bd-2)
  const [activeView, setActiveView] = useState(
    location.state?.activeView || "game"
  );
  // const [isFirebaseReady, setIsFirebaseReady] = useState(false);

  // New States for Start Screen and Loading Timeout
  const [isGameStarted, setIsGameStarted] = useState(false);
  // const [showReloadPrompt, setShowReloadPrompt] = useState(false);

  // Sync state if navigation state changes while mounted
  useEffect(() => {
    if (location.state?.activeView) {
      setActiveView(location.state.activeView);
    }
  }, [location.state]);

  /*
  useEffect(() => {
    const timer = setTimeout(() => setIsFirebaseReady(true), 500);
    return () => clearTimeout(timer);
  }, []);
  */
  
  useEffect(() => {
    const handleResize = () => {
      // no longer resizing .BD — just keep the page pinned
      window.scrollTo(0, 0);
    };
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", handleResize);
      window.visualViewport.addEventListener("scroll", handleResize);
    }
    return () => {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", handleResize);
        window.visualViewport.removeEventListener("scroll", handleResize);
      }
    };
  }, []);

  // in Bd.jsx, or in index.html as a global script
  useEffect(() => { 
    const lockScroll = () => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
    };

    const handleFocusIn = (e) => {
      if (e.target.matches('input, textarea')) {
        // iOS shifts the layout viewport asynchronously during keyboard animation,
        // so keep stomping the scroll position for the duration of that animation
        let ticks = 0;
        const raf = () => {
          lockScroll();
          if (ticks++ < 30) requestAnimationFrame(raf); // ~0.5s at 60fps
        };
        requestAnimationFrame(raf);
      }
    };

    document.addEventListener('focusin', handleFocusIn);
    return () => document.removeEventListener('focusin', handleFocusIn);
  }, []);

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
          if (elapsedSeconds > 30) {
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
  --- END COMMENTED OUT EMBEDDED UNITY LOGIC --- */

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
        {/* 
        <div className={`unity-wrapper ${activeView !== "game" ? "hidden-behind" : ""}`}>
          {isFirebaseReady && (
            <Unity 
              unityProvider={unityProvider} 
              style={{ width: "100%", height: "100%", display: isGameStarted && isLoaded ? "block" : "none" }} 
            />
          )}
        </div>
        */}

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

            {/* Unity Build */}
            <a
              href="https://app.remote-island.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="button-3"
              style={{ textDecoration: "none" }}
              //onClick={handleStartClick}
            >
              <span className="text-wrapper-31">Tap to start!</span>
            </a>

          </div>
        )}

        {/* Custom Loading Screen Overlay */}
        {/* 
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
        */}

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
      <a
          className="gruppe-2" /* (use "gruppe-5" in BdScreen, "gruppe-6" in BdWrapper, "schalter-mit" in Desktop) */
          href={
            window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
              ? "/ri"
              : "https://remote-island.de"
          }
        >
        <div className="text-wrapper">BUILDING DEMOCRACY</div>
        <div className="schalter">
          <div className="uncheck" />
        </div>
        <div className="text-wrapper-2">REMOTE ISLAND</div>
      </a>

      <Link 
                        to="https://nsdok.de/Start" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="Zur Startseite" 
                        className="NS-dok-logo" 
                      />
      
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
            {!isGameStarted && activeView === "game" && (
              <div className="ergebnis-beitr-ge">Ergebnis-<br />beiträge</div>
            )}
          </Link>
          
          <Link className="gruppe-4" to="/bd-2">
           {!isGameStarted && activeView === "game" && (
            <div className="spielaleitung">Spielanleitung<br/>Datenschutz</div>
           )}
            <img className="polygon" alt="Next" src="/img/polygon-3-3.png" />
          </Link>

        {/* Dynamic Video Popup */}
        {activeView === "video" && (
          <VideoModal setActiveView={setActiveView} />
        )}

        {showOnboardingModal && (
        <FirstTimeModal
          onClose={() => setShowOnboardingModal(false)}
          onProceed={() => setShowOnboardingModal(false)}
        />
         )}

        <InputPreviewBar />

    </div>
  );
};
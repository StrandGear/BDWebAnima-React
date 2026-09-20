import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Unity, useUnityContext } from "react-unity-webgl";
import "../../services/firebase"; 
import "./style.css";

// Editable Text Variables
export const legalText = `
Anbieterkennzeichnung nach § 5 Digitale-Dienste-Gesetz (DDG) in Verbindung mit § 18 Absatz 2 Medienstaatsvertrag

Stadt Köln
Der Oberbürgermeister
Torsten Burmester
Rathaus – Spanischer Bau
50667 Köln
Telefon +49 (0) 221-0
stadtverwaltung@stadt-koeln.de
Umsatzsteuer-ID: 122790626

Redaktionelle Verantwortung:
Dr. Henning Borggräfe, Direktor des NS-DOK
Die Beiträge auf den Seiten www.building-democracy.de und www.remote-island.de werden erstellt vom NS-Dokumentationszentrum der Stadt Köln

Postanschrift:
NS-Dokumentationszentrum der Stadt Köln
Appellhofplatz 23-25
50667 Köln
Telefon +49 (0) 221 221-26332
Telefax +49 (0) 221 221-25512
Inhaltlich verantwortlich für diese Webseite i.S.d. § 55 II RStV ist der Direktor der Einrichtung.

Datenschutzbeauftragter der Stadt Köln:
Postfach 10 35 64
50475 Köln
datenschutzbeauftragter@stadt-koeln.de

Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen:
Postfach 20 04 44
40102 Düsseldorf
poststelle@ldi.nrw.de

Konzept, Gestaltung, Programmierung der Internetseiten:
Max Gede, Anastasiia Ermolaeva
`;

export const mitwirkendeText = `
Mitwirkende & Projektteam:

- Projektleitung: NS-Dokumentationszentrum der Stadt Köln
- Konzept & Entwicklung: Max Gede, Anastasiia Ermolaeva
- Pädagogische Begleitung & Redaktion: NS-DOK Team
`;

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
     loaderUrl: "/BDWebAnima-React/unity/Build/9edd899bc6b6e0bbc4f46ff33ca0bba6.loader.js",
        dataUrl: "/BDWebAnima-React/unity/Build/c52841c9150b40a1a91d58d841fd5675.data",
    frameworkUrl: "/BDWebAnima-React/unity/Build/005d4f487ee79e378e58dbac699c4593.framework.js",
    codeUrl: "/BDWebAnima-React/unity/Build/5f016967b961d2540b171381efa4120a.wasm",
    streamingAssetsUrl: "/BDWebAnima-React/unity/StreamingAssets"
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
              <pre className="info-text-content">
                {activeView === "impressum" && legalText}
                {activeView === "mitwirkende" && mitwirkendeText}
              </pre>
            </div>
          </div>
        )}
      </div>

      {/* Header & Footer Bars */}
      <div className="rechteck" />
      <div className="rechteck-2" />
      
      {/* Top Toggle Header */}
      <Link className="gruppe-2" to="/ri">
        <div className="text-wrapper">BUILDING DEMOCRACY</div>
        <div className="schalter">
          <div className="uncheck" />
        </div>
        <div className="text-wrapper-2">REMOTE ISLAND</div>
      </Link>
      
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
        <img className="polygon" alt="Previous" src="/BDWebAnima-React/img/polygon-1-4.png" />
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
        <img className="polygon" alt="Next" src="/BDWebAnima-React/img/polygon-3-3.png" />
      </Link>
      {/* Standalone Video Modal Container on top of everything for Mobile */}
      {activeView === "video" && (
        <div className="video-modal-backdrop" onClick={() => handleToggleView("video")}>
          <div className="video-modal-container" onClick={(e) => e.stopPropagation()}>
            <button 
              className="video-modal-close" 
              onClick={() => handleToggleView("video")}
              aria-label="Close"
            >
              ✕
            </button>
            <video 
              src="/BDWebAnima-React/video/building-democracy.mp4" 
              controls 
              autoPlay 
              className="popup-video-element"
            />
          </div>
        </div>
      )}
    </div>
  );
};
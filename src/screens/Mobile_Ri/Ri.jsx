import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css"; // Or "./styleRi.css" depending on your folder setup
import { fetchVideoUrls } from "../../services/videoService";
import { getVisualCenter } from "../../services/visualCenter";
import {
  aboutContentMobile,
  buchenContentMobile,
  gruesseContentMobile,
  aktuellesContentMobile,
  impressumUndDatenschutzMobile,
  RemoteIslandMobileTextContent,
} from "./RemoteIslandMobileContent";

// Adjust this path if your desktop RemoteIslandStart route is named differently in App.jsx
const DESKTOP_RI_ROUTE = "/remote-island-start";
const DESKTOP_BREAKPOINT = 1024; // Switches to desktop above 1024px (keeps iPad Air/Mini in portrait on this view)

export const VideoModal = ({ onClose, videoKey = "ri_video" }) => {
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
    <div className="video-modal-backdrop" onClick={onClose}>
      <div className="video-modal-container" onClick={(e) => e.stopPropagation()}>
        <button
          className="video-modal-close"
          onClick={onClose}
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
            controlsList="nodownload"
            onContextMenu={(e) => e.preventDefault()}
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

export const Ri = () => {
  const navigate = useNavigate();

  // Active tab: "about" (default), "aktuelles", "greetings", "buchen", "impressum"
  const [activeTab, setActiveTab] = useState("about");
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  // Dynamically scale the 430x751 interactive layout so it fills mobile AND iPad screens
  const [cardScale, setCardScale] = useState(1);

  const [offsets, setOffsets] = useState({
    aktuelles: { x: 0, y: 0 },
    galerie: { x: 0, y: 0 },
    about: { x: 0, y: 0 },
    buchen: { x: 0, y: 0 },
    video: { x: 0, y: 0 },
    gruesse: { x: 0, y: 0 },
  });

  // --- CALCULATE PIXEL-PERFECT VISUAL CENTERS ON MOUNT ---
  useEffect(() => {
    const tabsToCalculate = [
      { key: "aktuelles", src: "/img/pfad-237-2.png" },
      { key: "galerie", src: "/img/pfad-236-3.png" },
      { key: "about", src: "/img/pfad-235-3.png" },
      { key: "buchen", src: "/img/pfad-234-3.png" },
      { key: "video", src: "/img/pfad-238-3.png" },
      { key: "gruesse", src: "/img/pfad-239-3.png" },
    ];

    Promise.all(
      tabsToCalculate.map((tab) =>
        getVisualCenter(tab.src).then((center) => ({
          key: tab.key,
          x: center.offsetX,
          y: center.offsetY,
        }))
      )
    )
      .then((results) => {
        const newOffsets = {};
        results.forEach((res) => {
          newOffsets[res.key] = { x: res.x, y: res.y };
        });
        setOffsets(newOffsets);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      // 1. Automatic switch to Desktop screen when resolution increases
      if (vw >= DESKTOP_BREAKPOINT && vw > vh) {
        navigate(DESKTOP_RI_ROUTE, { replace: true });
        return;
      }

      // 2. Calculate optimal scale to fit between top bar and bottom bar
      const isTablet = vw >= 768;
      const verticalBars = isTablet ? 200 : 181;
      const availableHeight = vh - verticalBars;
      const availableWidth = vw;

      const scaleW = availableWidth / 430;
      const scaleH = availableHeight / 751;
      setCardScale(Math.min(scaleW, scaleH));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [navigate]);

  return (
    <div className="RI">
      {/* Top & Bottom Fixed Bars (Matches Bd.jsx) */}
      <div className="rechteck-11" />
      <div className="rechteck-12" />

      {/* Centered Top Toggle Header */}
      {/* <Link className="gruppe-10" to="/bd">
        <div className="text-wrapper-26">BUILDING DEMOCRACY</div>
        <div className="schalter-5">
          <div className="uncheck-6" />
        </div>
        <div className="text-wrapper-27">REMOTE ISLAND</div>
      </Link> */}

      {/* Full-Width Stage between Header and Footer (No rounded corners) */}
      <div className="ri-stage-wrapper">
        {/* Full-bleed background fills 100% width & height without rounded corners */}
        <div className="rechteck-13" />
        <img className="a" alt="Background" src="/img/a-10731x2970-2.png" />

        <div
          className="ri-canvas-card"
          style={{ transform: `scale(${cardScale})` }}
        >
          {/* --- TABS WITH DESKTOP PLACEMENT --- */}

          {/* 1. Aktuelles */}
          <div
            className={`ri-tab tab-aktuelles ${activeTab === "aktuelles" ? "is-active" : ""}`}
            onClick={() => setActiveTab("aktuelles")}
          >
            <img className="ri-tab-bg" alt="Aktuelles" src="/img/pfad-237-2.png" />
            <span
              className="ri-tab-label"
              style={{ transform: `translate(${offsets.aktuelles.x}px, ${offsets.aktuelles.y}px)` }}
            >
              Aktuelles
            </span>
          </div>

          {/* 2. Galerie */}
          <div
            className="ri-tab tab-galerie"
            onClick={() => setIsGalleryOpen(true)}
          >
            <img className="ri-tab-bg" alt="Galerie" src="/img/pfad-236-3.png" />
            <span
              className="ri-tab-label"
              style={{ transform: `translate(${offsets.galerie.x}px, ${offsets.galerie.y}px)` }}
            >
              Galerie
            </span>
          </div>

          {/* 3. About */}
          <div
            className={`ri-tab tab-about ${activeTab === "about" ? "is-active" : ""}`}
            onClick={() => setActiveTab("about")}
          >
            <img className="ri-tab-bg" alt="About" src="/img/pfad-235-3.png" />
            <span
              className="ri-tab-label"
              style={{ transform: `translate(${offsets.about.x}px, ${offsets.about.y}px)` }}
            >
              About
            </span>
          </div>

          {/* 4. Buchen */}
          <div
            className={`ri-tab tab-buchen ${activeTab === "buchen" ? "is-active" : ""}`}
            onClick={() => setActiveTab("buchen")}
          >
            <img className="ri-tab-bg" alt="Buchen" src="/img/pfad-234-3.png" />
            <span
              className="ri-tab-label"
              style={{ transform: `translate(${offsets.buchen.x}px, ${offsets.buchen.y}px)` }}
            >
              Buchen
            </span>
          </div>

          {/* 5. VIDEO */}
          <div
            className="ri-tab tab-video"
            onClick={() => setIsVideoOpen(true)}
          >
            <img className="ri-tab-bg" alt="Video" src="/img/pfad-238-3.png" />
            <span
              className="ri-tab-label-vertical"
              style={{ transform: `translate(${offsets.video.x}px, ${offsets.video.y}px)` }}
            >
              {"VIDEO".split("").map((char, index) => (
                <span key={index} className="ri-vertical-char">
                  {char}
                </span>
              ))}
            </span>
          </div>

          {/* 6. Grüße von Remote Island */}
          <div
            className={`ri-tab tab-gruesse ${activeTab === "greetings" ? "is-active" : ""}`}
            onClick={() => setActiveTab("greetings")}
          >
            <img className="ri-tab-bg" alt="Grüße" src="/img/pfad-239-3.png" />
            <span
              className="ri-tab-label-gruesse"
              style={{ transform: `translate(${offsets.gruesse.x}px, ${offsets.gruesse.y}px)` }}
            >
              Grüße von
              <br />
              Remote Island
            </span>
          </div>

          {/* --- MAIN CONTENT CARD (Now using pfad-243-1.png) --- */}
          <div className="gruppe-11">
            <img className="pfad-7" alt="Card Frame" src="/img/pfad-243-1.png" />

            <div className="text-content-container">
              {activeTab === "about" && (
                <RemoteIslandMobileTextContent
                  content={aboutContentMobile}
                  setActiveTab={setActiveTab}
                />
              )}
              {activeTab === "aktuelles" && (
                <RemoteIslandMobileTextContent
                  content={aktuellesContentMobile}
                  setActiveTab={setActiveTab}
                />
              )}
              {activeTab === "greetings" && (
                <RemoteIslandMobileTextContent
                  content={gruesseContentMobile}
                  setActiveTab={setActiveTab}
                />
              )}
              {activeTab === "buchen" && (
                <RemoteIslandMobileTextContent
                  content={buchenContentMobile}
                  setActiveTab={setActiveTab}
                />
              )}
              {activeTab === "impressum" && (
                <RemoteIslandMobileTextContent
                  content={impressumUndDatenschutzMobile}
                  setActiveTab={setActiveTab}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Logo & Right-Aligned Links */}
      <Link to="/" aria-label="Zur Startseite" className="NS-dok-logo-6" />

      <div className="ri-footer-links">
        {/* <Link
          className="ri-footer-link"
          to="/bd"
          state={{ activeView: "mitwirkende", from: "/ri" }}
        >
          Mitwirkende
        </Link> */}
        <button
          className={`ri-footer-link ${activeTab === "impressum" ? "active" : ""}`}
          onClick={() =>
            setActiveTab((prev) => (prev === "impressum" ? "about" : "impressum"))
          }
        >
          {activeTab === "impressum" ? "Home" : "Impressum"}
        </button>
      </div>

      {/* Mobile / iPad Gallery Modal Overlay */}
      {isGalleryOpen && (
        <div
          className="ri-gallery-backdrop"
          onClick={() => setIsGalleryOpen(false)}
        >
          <div
            className="ri-gallery-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="video-modal-close"
              onClick={() => setIsGalleryOpen(false)}
              aria-label="Close Gallery"
            >
              ✕
            </button>
            <div className="ri-gallery-scroll">
              {[1, 2, 3, 4, 5].map((num) => (
                <img
                  key={num}
                  src={`/img/galerie/galerie-${num}.jpg`}
                  alt={`Remote Island Galerie ${num}`}
                  className="ri-gallery-img"
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Video Modal Overlay */}
      {isVideoOpen && (
        <VideoModal onClose={() => setIsVideoOpen(false)} videoKey="ri_video" />
      )}
    </div>
  );
};
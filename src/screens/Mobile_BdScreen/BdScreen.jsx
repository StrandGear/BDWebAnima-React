import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./style.css";
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

export const BdScreen = () => {
  const [activeView, setActiveView] = useState("game");

  return (
    <div className="BD-screen">
      {/* Background Waves Pattern */}
      <div className="wiederholungsraster-2">
        <div className="auto-flex-2">
          <div className="div-2" />
          <div className="div-2" />
          <div className="div-2" />
        </div>
      </div>

      {/* Top and Bottom Bars */}
      <div className="rechteck-3" />
      <div className="rechteck-4" />

      {/* Centered Top Toggle */}
      {/* <Link className="gruppe-5" to="/ri">
        <div className="text-wrapper-6">BUILDING DEMOCRACY</div>
        <div className="schalter-3">
          <div className="uncheck-2" />
        </div>
        <div className="text-wrapper-7">REMOTE ISLAND</div>
      </Link> */}

      {/* Back Navigation Arrow */}
      <Link to="/bd">
        <img className="img" alt="Back" src="/img/polygon-1-4.png" />
      </Link>

      {/* Centered Clickable PDF Block */}
      <div className="pdf-content-container">
{/* PDF 1: Spielanleitung */}
        <div className="pdf-item" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <a
            href="/Anleitung.pdf" 
            download="Anleitung.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="pdf-download-link"
          >
            <img className="PDF" alt="Spielanleitung PDF" src="/img/pdf.png" />
          </a>
          <div className="spielaleitung-2" style={{ textAlign: "center", marginTop: "10px", position: "static" }}>
            Spielanleitung
            <br />
            Download
          </div>
        </div>

        {/* PDF 2: Datenschutz */}
        <div className="pdf-item" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <a
            href="/Datenschutz.pdf" 
            download="Datenschutz.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="pdf-download-link"
          >
            <img className="PDF" alt="Datenschutz PDF" src="/img/pdf.png" />
          </a>
          <div className="spielaleitung-2" style={{ textAlign: "center", marginTop: "10px", position: "static" }}>
            Datenschutz
            <br />
            Download
          </div>
        </div>
      </div>

      {/* Footer Logo & Aligned Links */}
      <Link to="/" aria-label="Zur Startseite" className="NS-dok-logo-2" />
      <div className="footer-links">
        <Link className="footer-link"
          to="/bd" 
          state={{ activeView: "mitwirkende", from: "/bd-2" }}
        >
          Mitwirkende
        </Link>
        <Link className="footer-link"
          to="/bd" 
          state={{ activeView: "impressum", from: "/bd-2" }}
        >
          Impressum
        </Link>
      {/* Added Video Button matching main screen */}
        <button 
          className="footer-link-btn" 
          onClick={() => setActiveView("video")} 
          style={{ 
            background: "transparent", 
            border: "none", 
            padding: 0, 
            margin: 0, 
            cursor: "pointer", 
            fontFamily: '"Ubuntu", Helvetica, sans-serif',
            fontSize: "11px",
            fontStyle: "italic",
            fontWeight: 700,
            color: "#fae5ba",
            textAlign: "right"
          }}
        >
          Video
        </button>
      </div>

      {/* Dynamic Video Popup Modal */}
      {activeView === "video" && (
        <VideoModal setActiveView={setActiveView} />
      )}

    </div>
  );
};
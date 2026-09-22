import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./style.css";
import { DesktopLayout } from "../../DesktopLayout";
import { fetchApprovedTestimonies } from "../../services/testimonyService";
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

const GalleryCard = ({ testimony }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  if (!testimony) return null;

  return (
    <div
      className="card-item"
      onClick={() => setIsFlipped((f) => !f)}
      style={{ cursor: "pointer" }}
    >
      <div className={`testimony-flip-inner ${isFlipped ? "is-flipped" : ""}`}>
        {/* FRONT: image + org name only */}
        <div
          className="testimony-flip-front"
          style={
            testimony.imageUrl
              ? { backgroundImage: `url(${testimony.imageUrl})` }
              : undefined
          }
        >
          <div className="testimony-text-block">
            <p className="card-text">
              <span className="card-school">{testimony.orgaName}</span>
            </p>
          </div>
        </div>

        {/* BACK: shaded color + each team's testimony */}
        <div className="testimony-flip-back">
          <div className="testimony-text-block">
            <p className="card-text">
              <span className="card-school">{testimony.orgaName}</span>
            </p>
            {testimony.teams
              .filter((team) => team.text)
              .map((team) => (
                <p className="card-text" key={team.teamId}>
                  {team.text}
                </p>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const DivWrapper = () => {
  const [testimonies, setTestimonies] = useState([]);
  // Declaring state fixes ReferenceError: activeView is not defined
  const [activeView, setActiveView] = useState("game");

  useEffect(() => {
    let cancelled = false;
    fetchApprovedTestimonies().then((data) => {
      if (!cancelled) setTestimonies(data);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <DesktopLayout>
      <div className="div-wrapper">
        <div className="buildingdemocracy-3">
          <div className="overlap-group-3">
            <Link to="/" aria-label="Zur Startseite" className="NS-dok-logo-4" />

            {/* 1. Nav Panel with clean horizontal layout */}
            <div className="auto">
              <Link 
                className="text-wrapper-26" 
                to="/buildingdemocracy-start" 
                state={{ activeView: "mitwirkende" }}
              >
                Mitwirkende
              </Link>

              <Link 
                className="text-wrapper-27" 
                to="/buildingdemocracy-start" 
                state={{ activeView: "impressum" }}
              >
                Impressum
              </Link>

              {/* Video button participates in standard flex layout */}
              <button 
                className="video-nav-btn" 
                onClick={() => setActiveView("video")}
              >
                Video
              </button>

              <a 
                href="/Anleitung.pdf" 
                download="Anleitung.pdf" 
                className="spielaleitung-3"
              >
                Spielanleitung<br />Download
              </a>
              {/* Direct Datenschutz PDF Download Link */}
              <a 
                href="/Datenschutz.pdf" 
                download="Datenschutz.pdf" 
                className="spielaleitung-3"
              >
                Datenschutz<br />Download
              </a>
            </div>

            {/* 2. "Ansicht ändern" Button */}
            <Link className="gruppe-28" to="/buildingdemocracy-start">
              <div className="gruppe-29">
                <div className="rechteck-14" />
                <div className="rechteck-15" />
                <div className="rechteck-16" />
                <div className="rechteck-17" />
              </div>
              <div className="text-wrapper-28">Ansicht ändern</div>
            </Link>

            {/* Cards Grid */}
            <div className="cards-grid">
              {testimonies.map((testimony) => (
                <GalleryCard key={testimony.sessionId} testimony={testimony} />
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Video Popup Modal */}
        {activeView === "video" && (
          <VideoModal setActiveView={setActiveView} />
        )}
      </div>
    </DesktopLayout>
  );
};
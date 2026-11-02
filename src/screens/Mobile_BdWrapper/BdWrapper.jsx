import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./style.css";
import { fetchApprovedTestimonies } from "../../services/testimonyService";
// import { fetchVideoUrls } from "../../services/videoService";

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

export const BdWrapper = () => {
  const [testimonies, setTestimonies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [activeView, setActiveView] = useState("game");

  useEffect(() => {
    let cancelled = false;
    fetchApprovedTestimonies().then((data) => {
      if (!cancelled) {
        setTestimonies(data);
        setCurrentIndex(Math.max(data.length - 1, 0)); // start on the last testimony
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const testimony = testimonies[currentIndex] ?? null;

  const handlePrevious = () => {
    if (testimonies.length === 0) return;
    // wraps around: from the first, "previous" loops to the last
    setCurrentIndex((i) => (i - 1 + testimonies.length) % testimonies.length);
    setIsFlipped(false); // new testimony always starts on the front
  };

  return (
    <div className="BD-wrapper">
  <div className="wiederholungsraster-3">
        <div className="auto-flex-2">
          <div className="div-2" />
          <div className="div-2" />
          <div className="div-2" />
        </div>
      </div>

      <div className="rechteck-5" />
      <div className="rechteck-6" />
      {/* Top Toggle Header */}
      {/* <Link className="gruppe-6" to="/ri">
        <div className="text-wrapper-10">BUILDING DEMOCRACY</div>
        <div className="schalter-2">
          <div className="uncheck-3" />
        </div>
        <div className="text-wrapper-11">REMOTE ISLAND</div>
      </Link> */}
      
      {/* Footer links */}
                <Link 
                        to="https://nsdok.de/Start" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="Zur Startseite" 
                        className="NS-dok-logo-3" 
                      />
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

      <div className="spielaleitung-3">
        Spielaleitung
        <br />
        Download
      </div>
      <div
        className="k-nigin-luise-schule-wrapper testimony-flip-outer"
        onClick={() => testimony && setIsFlipped((f) => !f)}
        style={{ cursor: testimony ? "pointer" : "default" }}
      >
        <div className={`testimony-flip-inner ${isFlipped ? "is-flipped" : ""}`}>
          {/* FRONT: image + org name only */}
          <div
            className="testimony-flip-front"
            style={
              testimony?.imageUrl
                ? { backgroundImage: `url(${testimony.imageUrl})` }
                : undefined
            }
          >
            {testimony && (
              <p className="k-nigin-luise-schule" style={{ margin: 0 }}>
                <span className="text-wrapper-15">{testimony.orgaName}</span>
              </p>
            )}
          </div>

          {/* BACK: shaded color + each team's testimony, reachable by tapping */}
          <div className="testimony-flip-back">
            {testimony && (
              <div className="k-nigin-luise-schule">
                <p className="text-wrapper-15" style={{ margin: 0 }}>
                  {testimony.orgaName}
                </p>
                {testimony.teams
                  .filter((team) => team.text)
                  .map((team) => (
                    <p
                      key={team.teamId}
                      className="text-wrapper-15"
                      style={{ margin: "4px 0 0" }}
                    >
                      {team.text}
                    </p>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <img
        className="polygon-2"
        alt="Vorheriges Testimonial"
        src="/img/polygon-1-4.png"
        onClick={handlePrevious}
        style={{ cursor: testimonies.length > 0 ? "pointer" : "default" }}
      />
      <Link to="/bd">
        <img className="polygon-3" alt="Polygon" src="/img/polygon-3-3.png" />
      </Link>

      {/* Dynamic Video Popup Modal */}
      {activeView === "video" && (
        <VideoModal setActiveView={setActiveView} />
      )}

    </div>
  );
};

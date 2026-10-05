import { Link } from "react-router-dom";
import "./style.css";
import { useState, useEffect } from "react";
import { DesktopLayout } from "../../DesktopLayout";
import { fetchVideoUrls } from "../../services/videoService";
import { 
  aboutContent, 
  buchenContent, 
  gruesseContent, 
  aktuellesContent, 
  RemoteIslandTextContent 
} from "./RemoteIslandContent";

export const VideoModal = ({ setActiveView, videoKey = "ri_video" }) => {
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
    <div className="video-modal-backdrop" onClick={() => setActiveView(null)}>
      <div className="video-modal-container" onClick={(e) => e.stopPropagation()}>
        <button 
          className="video-modal-close" 
          onClick={() => setActiveView(null)}
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

export const RemoteIslandStart = () => {
  // State to track whether the gallery overlay is visible
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  // State to track active text view: "default", "about", "greetings", "aktuelles"
  const [activeTab, setActiveTab] = useState("default");

  // State to track video modal visibility
  const [activeView, setActiveView] = useState(null);

  return (
    <DesktopLayout style={{ backgroundColor: "#b79eb6" }}>
      <div className="remote-island-start">
        <div className="rechteck-11" />

        {/* Navigation and Main Content */}
        <Link className="schalter-mit-2" to="/buildingdemocracy-start">
          <div className="text-wrapper-16">BUILDING DEMOCRACY</div>
          <div className="text-wrapper-17">REMOTE ISLAND</div>
          <div className="schalter-3">
            <div className="rechteck-12" />
            <div className="uncheck-3" />
          </div>
        </Link>

        {/* Background/Static decorative images */}
        <img className="pfad-3" alt="Pfad" src="/img/pfad-234-1.png" />
        <img className="pfad-4" alt="Pfad" src="/img/pfad-236-1.png" />
        <img className="pfad-5" alt="Pfad" src="/img/pfad-237-1.png" />
        <img className="pfad-6" alt="Pfad" src="/img/pfad-238-1.png" />
        <img className="pfad-7" alt="Pfad" src="/img/pfad-239-1.png" />

        <div className="gruppe-16">
          <img className="pfad-8" alt="Pfad" src="/img/pfad-242-1.png" />
          <p className="dauer-stunden">
            Dauer
            <br />3 Stunden
            <br />
            <br />
            Kosten
            <br />
            Schulklassen: 90 €<br />
            Studierende &amp; Jugendgruppen: 150 €<br />
            Erwachsene: 225 €<br />
            <br />
            Für wen
            <br />
            Dieser Workshop eignet sich für Schulklassen ab dem 9. Jahrgang und
            für Erwachsenengruppen von mindestens 15 bis maximal 35 Personen.
            <br />
            Für Kölner Schulen sind sämtliche pädagogischen Angebote des NS-DOK
            kostenfrei.
            <br />
            Am Wochenende und feiertags fallen zusätzliche Gebühren an.
          </p>
        </div>
        <img className="pfad-9" alt="Pfad" src="/img/pfad-243-1.png" />

        {/* --- MERGED & SWITCHABLE TEXT CONTAINER --- */}
        <div className="text-content-container">
          {activeTab === "default" && <RemoteIslandTextContent content={aboutContent} />}
          {activeTab === "about" && <RemoteIslandTextContent content={aboutContent} />}
          {activeTab === "greetings" && <RemoteIslandTextContent content={gruesseContent} />}
          {activeTab === "aktuelles" && <RemoteIslandTextContent content={aktuellesContent} />}
          {activeTab === "buchen" && <RemoteIslandTextContent content={buchenContent} />}
        </div>

        {/* Buttons */}

        {/* "Buchen" Tab */}
        <div 
          className="buchen-als" 
          onClick={() => setActiveTab("buchen")}
          style={{ cursor: "pointer" }}
        >
          Buchen
        </div>

        {/* "About" Button */}
        <div 
          className="gruppe-17" 
          onClick={() => setActiveTab("about")}
          style={{ cursor: "pointer" }}
        >
          <img className="pfad-8" alt="Pfad" src="/img/pfad-235-1.png" />
          <div className="text-wrapper-19">About</div>
        </div>

        <div 
          className="buchen-als-gruppe" 
          onClick={() => setIsGalleryOpen(true)}
          style={{ cursor: "pointer" }}
        >
          Galerie
        </div>

        {/* "Grüße aus Remote Island" Button */}
        <div 
          className="gr-e-aus-remote" 
          onClick={() => setActiveTab("aktuelles")}
          style={{ cursor: "pointer" }}
        >
          Aktuelles
        </div>

        {/* "Aktuelles" Tab on the left */}
        <div
          className="aktuelles-tab"
          onClick={() => setActiveView(prev => prev === "video" ? null : "video")}
          style={{ cursor: "pointer" }}
        >
          <span className="aktuelles-text">
            {"Video".split("").map((char, index) => (
              <span key={index} className="aktuelles-char">
                {char}
              </span>
            ))}
          </span>
        </div>
        
        {/* Video button  */}
        <div 
          className="raw-text-btn text-wrapper-20"
          onClick={() => setActiveTab("greetings")}
          style={{ cursor: "pointer", background: "none", border: "none" }}
        >
          Grüße aus <br />Remote Island
        </div>

        <div className="text-wrapper-21">Impressum</div>
        <div className="text-wrapper-33">Datenschutz</div>
        <Link to="/" aria-label="Zur Startseite" className="NS-dok-logo-3" />
        <div className="gruppe-26" />

        {/* Video Modal Popup */}
        {activeView === "video" && (
          <VideoModal 
            setActiveView={setActiveView} 
            videoKey="ri_video" /* Adjust key if your backend uses a different identifier */
          />
        )}

        {/* -------------------------------------------------- */}
        {/* CONDITIONAL GALLERY OVERLAY LAYER                  */}
        {/* -------------------------------------------------- */}
        {isGalleryOpen && (
          <div className="gallery-overlay">
            <div className="gruppe-wrapper">
              <div className="gruppe-38">
                <div className="gruppe-39">
                  <img className="pfad-19" alt="Pfad" src="/img/pfad-246.png" /> 
                  <div className="rechteck-25" />
                </div>
              </div>
            </div>
            
            <div className="gruppe-43">
              <div className="gruppe-44">
                <div className="gruppe-45">
                  <img className="pfad-20" alt="Pfad" src="/img/pfad-250.png" />
                  <div className="rechteck-26" />
                </div>
              </div>
            </div>

            <div className="gruppe-49">
              <div className="gruppe-50">
                <div className="gruppe-51">
                  <img className="pfad-21" alt="Pfad" src="/img/pfad-254.png" /> 
                  <div className="rechteck-27" />
                </div>
              </div>
            </div>

            <div className="gruppe-56">
              <div className="gruppe-57">
                <div className="gruppe-58">
                  <div className="gruppe-59">
                    <img className="pfad-22" alt="Pfad" src="/img/pfad-258.png" /> 
                    <div className="rechteck-28" />
                    <img className="pfad-23" alt="Pfad" src="/img/pfad-261.png" /> 
                    <div className="rechteck-29" />
                  </div>
                </div>
                <div className="gruppe-64" />
              </div>
            </div>

            {/* Close/Cross Button */}
            <div 
              className="vereinigungsmenge-wrapper" 
              onClick={() => setIsGalleryOpen(false)}
              style={{ cursor: "pointer" }}
            >
              <img
                className="vereinigungsmenge"
                alt="Vereinigungsmenge"
                src="/img/vereinigungsmenge-1.png"
              />
            </div>
          </div>
        )}
      </div>
    </DesktopLayout>
  );
};
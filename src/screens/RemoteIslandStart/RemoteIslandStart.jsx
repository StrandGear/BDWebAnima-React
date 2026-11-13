import { Link } from "react-router-dom";
import "./style.css";
import { useState, useEffect } from "react";
import { DesktopLayout } from "../../DesktopLayout";
// import { fetchVideoUrls } from "../../services/videoService";
import { useAktuellesContent } from "../../services/aktuellesService";
import { 
  aboutContent, 
  buchenContent, 
  gruesseContent, 
  impressumUndDatenschutz,
  RemoteIslandTextContent 
} from "./RemoteIslandContent";
import { getVisualCenter } from "../../services/visualCenter";

// useEffect(() => {
//     // Pass the exact same image path used in your <img> tag
//     getVisualCenter("/img/pfad-237-1.png")
//       .then((center) => {
//         // center.offsetX and offsetY tell you exactly how many pixels to nudge the text
//         setAktuellesOffset({ x: center.offsetX, y: center.offsetY });
//       })
//       .catch(console.error);
//   }, []);

//   // ... Down in your JSX:
//   <div className="aktuelles-wrapper" onClick={() => setActiveTab("aktuelles")}>
//     <img className="tab-bg-img" alt="Pfad" src="/img/pfad-237-1.png" />
//     <span 
//       className="tab-text-standard"
//       style={{
//         // Apply the mathematical calculation directly to the margin or transform
//         transform: `translate(${aktuellesOffset.x}px, ${aktuellesOffset.y}px)`
//       }}
//     >
//       Aktuelles
//     </span>
// </div>

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

export const RemoteIslandStart = () => {

  const aktuellesContent = useAktuellesContent();   
  // State to track whether the gallery overlay is visible
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  // State to track active text view: "default", "about", "greetings", "aktuelles"
  const [activeTab, setActiveTab] = useState("default");

  // State to track video modal visibility
  const [activeView, setActiveView] = useState(null);

  const [offsets, setOffsets] = useState({
    aktuelles: { x: 0, y: 0 },
    galerie: { x: 0, y: 0 },
    about: { x: 0, y: 0 },
    buchen: { x: 0, y: 0 },
    video: { x: 0, y: 0 },
    gruesse: { x: 0, y: 0 }
  });
  // --- CALCULATE OFFSETS ON MOUNT ---
  useEffect(() => {
    // Array of the images used by each tab
    const tabsToCalculate = [
      { key: "aktuelles", src: "/img/pfad-237-1.png" },
      { key: "galerie", src: "/img/pfad-236-1.png" },
      { key: "about", src: "/img/pfad-235-1.png" },
      { key: "buchen", src: "/img/pfad-234-1.png" },
      { key: "video", src: "/img/pfad-238-1.png" },
      { key: "gruesse", src: "/img/pfad-239-1.png" }
    ];

    // Fetch and calculate all visual centers in parallel
    Promise.all(
      tabsToCalculate.map((tab) => 
        getVisualCenter(tab.src).then((center) => ({
          key: tab.key,
          x: center.offsetX,
          y: center.offsetY
        }))
      )
    )
    .then((results) => {
      // Map the results back to a single state object
      const newOffsets = {};
      results.forEach((res) => {
        newOffsets[res.key] = { x: res.x, y: res.y };
      });
      setOffsets(newOffsets);
    })
    .catch(console.error);
  }, []);

  return (
    <DesktopLayout style={{ backgroundColor: "#b79eb6" }}>
      <div className="remote-island-start">
        <div className="rechteck-11" />

        {/* Navigation and Main Content */}
        {/* Top Toggle Header in Ri.jsx (use className="schalter-mit-2" in RemoteIslandStart.jsx) */}
        <a
          className="schalter-mit-2"
          href={
            window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
              ? "/bd"
              : "https://building-democracy.de"
          }
        >
                    <div className="text-wrapper-16">BUILDING DEMOCRACY</div>
          <div className="text-wrapper-17">REMOTE ISLAND</div>
          <div className="schalter-3">
            <div className="rechteck-12" />
            <div className="uncheck-3" />
          </div>
        </a>

        {/* Background/Static decorative images */}
        {/* <img className="pfad-3" alt="Pfad" src="/img/pfad-234-1.png" />
        <img className="pfad-4" alt="Pfad" src="/img/pfad-236-1.png" />
        <img className="pfad-5" alt="Pfad" src="/img/pfad-237-1.png" />
        <img className="pfad-6" alt="Pfad" src="/img/pfad-238-1.png" />
        <img className="pfad-7" alt="Pfad" src="/img/pfad-239-1.png" /> */}

        <div className="gruppe-16">
          <img className="pfad-8" alt="Pfad" src="/img/pfad-242-1.png" />
          <p className="dauer-stunden">
                      <br />
            <br />
            <br />
            <p style={{ fontSize: "17px", fontWeight: "bold" }}>Herzlich Willkommen auf Remote Island -<br /> dem wohl abgelegensten Ort der Welt ...</p>
            <br />
            <br />
            Entdeckt das begehbare Computerspiel im<br />
             NS-DOK und taucht ein in euer "Abenteuer Demokratie auf einer Insel"!
            <br />
            <br />
            <br />
            Handelt, entscheidet und reflektiert gemeinsam als Gruppe: Remote Island macht Bildung zum Erlebnis!​
            
          </p>
        </div>
        <img className="pfad-9" alt="Pfad" src="/img/pfad-243-1.png" />

        {/* --- MERGED & SWITCHABLE TEXT CONTAINER --- */}
        <div className="text-content-container">
          {activeTab === "default" && <RemoteIslandTextContent content={aboutContent} setActiveTab={setActiveTab} />}
          {activeTab === "about" && <RemoteIslandTextContent content={aboutContent} setActiveTab={setActiveTab} />}
          {activeTab === "greetings" && <RemoteIslandTextContent content={gruesseContent} setActiveTab={setActiveTab} />}
          {activeTab === "aktuelles" && <RemoteIslandTextContent content={aktuellesContent} setActiveTab={setActiveTab} />}
          {activeTab === "buchen" && <RemoteIslandTextContent content={buchenContent} setActiveTab={setActiveTab} />}
          {activeTab === "impressum" && <RemoteIslandTextContent content={impressumUndDatenschutz} setActiveTab={setActiveTab} />}
        </div>

        {/* Buttons */}

        {/* 1. Aktuelles */}
        <div className="aktuelles-wrapper" onClick={() => setActiveTab("aktuelles")}>
          <img className="tab-bg-img" alt="Pfad" src="/img/pfad-237-1.png" />
          <span 
            className="tab-text-standard"
            style={{ transform: `translate(${offsets.aktuelles.x}px, ${offsets.aktuelles.y}px)` }}
          >
            Aktuelles
          </span>
        </div>

        {/* 2. Galerie */}
        <div className="galerie-wrapper" onClick={() => setIsGalleryOpen(true)}>
          <img className="tab-bg-img" alt="Pfad" src="/img/pfad-236-1.png" />
          <span 
            className="tab-text-standard"
            style={{ transform: `translate(${offsets.galerie.x}px, ${offsets.galerie.y}px)` }}
          >
            Galerie
          </span>
        </div>

        {/* 3. About */}
        <div className="about-wrapper" onClick={() => setActiveTab("about")}>
          <img className="tab-bg-img" alt="Pfad" src="/img/pfad-235-1.png" />
          <span 
            className="tab-text-standard"
            style={{ transform: `translate(${offsets.about.x}px, ${offsets.about.y}px)` }}
          >
            About
          </span>
        </div>

        {/* 4. Buchen */}
        <div className="buchen-wrapper" onClick={() => setActiveTab("buchen")}>
          <img className="tab-bg-img" alt="Pfad" src="/img/pfad-234-1.png" />
          <span 
            className="tab-text-standard"
            style={{ transform: `translate(${offsets.buchen.x}px, ${offsets.buchen.y}px)` }}
          >
            Buchen
          </span>
        </div>

        {/* 5. Video */}
        <div className="video-wrapper" onClick={() => setActiveView(prev => prev === "video" ? null : "video")}>
          <img className="tab-bg-img" alt="Pfad" src="/img/pfad-238-1.png" />
          <span 
            className="tab-text-vertical"
            style={{ transform: `translate(${offsets.video.x}px, ${offsets.video.y}px)` }}
          >
            {"VIDEO".split("").map((char, index) => (
              <span key={index} className="aktuelles-char">{char}</span>
            ))}
          </span>
        </div>
        
        {/* 6. Grüße aus Remote Island */}
        <div className="gruesse-wrapper" onClick={() => setActiveTab("greetings")}>
          <img className="tab-bg-img" alt="Pfad" src="/img/pfad-239-1.png" />
          <span 
            className="tab-text-gruesse"
            style={{ transform: `translate(${offsets.gruesse.x}px, ${offsets.gruesse.y}px)` }}
          >
            Grüße von <br />Remote Island
          </span>
        </div>

        <div 
          className="text-wrapper-21" 
          onClick={() => setActiveTab("impressum")}
          style={{ cursor: "pointer" }}
          >
          Impressum
        </div>
        {/* <div className="text-wrapper-33">Datenschutz</div> */}
        <Link 
              to="https://nsdok.de/Start" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Zur Startseite" 
              className="NS-dok-logo-3" 
            />
        <div className="gruppe-26" />

        {/* Video Modal Popup */}
        {activeView === "video" && (
          <VideoModal 
            setActiveView={setActiveView} 
            videoKey="ri_video" 
          />
        )}

        {/* -------------------------------------------------- */}
        {/* CONDITIONAL GALLERY OVERLAY LAYER                  */}
        {/* -------------------------------------------------- */}
        {isGalleryOpen && (
          <div className="gallery-overlay">
            <div className="gruppe-wrapper">
              <div className="gruppe-38">
                {/* --- Frame 1 (Top Left) --- */}
                <div className="gruppe-39">
                  {/* 1. Put the white frame back */}
                  <img className="pfad-19" alt="Rahmen" src="/img/pfad-246.png" /> 
                  {/* 2. Turn the black rectangle into your photo */}
                  <img className="rechteck-25" alt="Galerie Foto 1" src="/img/galerie/galerie-1.jpg" style={{ objectFit: "cover" }} />
                </div>
              </div>
            </div>
            
            <div className="gruppe-43">
              <div className="gruppe-44">
                {/* --- Frame 2 (Mid Left) --- */}
                <div className="gruppe-45">
                  <img className="pfad-20" alt="Rahmen" src="/img/pfad-250.png" />
                  <img className="rechteck-26" alt="Galerie Foto 2" src="/img/galerie/galerie-2.jpg" style={{ objectFit: "cover" }} />
                </div>
              </div>
            </div>

            <div className="gruppe-49">
              <div className="gruppe-50">
                <div className="gruppe-51">
                  <img className="pfad-21" alt="Rahmen" src="/img/pfad-254.png" /> 
                  <img className="rechteck-27" alt="Galerie Foto 3" src="/img/galerie/galerie-3.jpg" style={{ objectFit: "cover" }} />
                </div>
              </div>
            </div>

            <div className="gruppe-56">
              <div className="gruppe-57">
                <div className="gruppe-58">
                  {/* --- Frame 4 & 5 (Bottom Right - Front & Back) --- */}
                  <div className="gruppe-59">
                    <img className="pfad-22" alt="Rahmen" src="/img/pfad-258.png" /> 
                    <img className="rechteck-28" alt="Galerie Foto 4" src="/img/galerie/galerie-4.jpg" style={{ objectFit: "cover" }} />
                    
                    <img className="pfad-23" alt="Rahmen" src="/img/pfad-261.png" /> 
                    <img className="rechteck-29" alt="Galerie Foto 5" src="/img/galerie/galerie-5.jpg" style={{ objectFit: "cover" }} />
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
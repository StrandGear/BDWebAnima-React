import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./style.css";
import { DesktopLayout } from "../../DesktopLayout";
import { fetchApprovedTestimonies } from "../../services/testimonyService";

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
        {/* Background grid */}
          {/* <div className="wiederholungsraster-3">
            <div className="auto-flex-3">
              <div className="div-3" />
              <div className="div-3" />
              <div className="div-3" />
            </div>
            <div className="auto-flex-3">
              <div className="div-3" />
              <div className="div-3" />
              <div className="div-3" />
            </div>
            <div className="auto-flex-3">
              <div className="div-3" />
              <div className="div-3" />
              <div className="div-3" />
            </div>
            <div className="auto-flex-3">
              <div className="div-3" />
              <div className="div-3" />
              <div className="div-3" />
            </div>
            <div className="auto-flex-3">
              <div className="div-3" />
              <div className="div-3" />
              <div className="div-3" />
            </div>
          </div> */}

          <Link className="schalter-mit-3" to="/remoteislandstart">
            <div className="text-wrapper-22">BUILDING DEMOCRACY</div>
            <div className="text-wrapper-23">REMOTE ISLAND</div>
            <div className="schalter-4">
              <div className="rechteck-13" />
              <div className="uncheck-4" />
            </div>
          </Link>
          <div className="NS-dok-logo-4" />

          {/* 1. Nav Panel with state navigation */}
            <div className="auto">
              {/* Navigates to main screen & opens Mitwirkende */}
              <Link 
                className="text-wrapper-26" 
                to="/buildingdemocracy-start" 
                state={{ activeView: "mitwirkende" }}
              >
                Mitwirkende
              </Link>

              {/* Navigates to main screen & opens Impressum */}
              <Link 
                className="text-wrapper-27" 
                to="/buildingdemocracy-start" 
                state={{ activeView: "impressum" }}
              >
                Impressum
              </Link>

              {/* Direct PDF Download Link */}
              <a 
                href="/pdf/spielanleitung.pdf" 
                download="Spielanleitung.pdf" 
                className="spielaleitung-3"
              >
                Spielanleitung<br />Download
              </a>
            </div>

            {/* 2. "Ansicht ändern" Button directly below .auto */}
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
    </div>
    </DesktopLayout>
  );
};

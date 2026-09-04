import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./style.css";
import { fetchApprovedTestimonies } from "../../services/testimonyService";

// The template has 4 visible card slots, left to right:
// gruppe-33 (small, left) -> gruppe-32 (large, center) -> gruppe-rechts -> gruppe-34
const CARD_SLOTS = [
  { className: "gruppe-33", textClassName: "k-nigin-luise-schule-13" },
  { className: "gruppe-32", textClassName: "k-nigin-luise-schule-12" },
  { className: "gruppe-rechts", textClassName: "k-nigin-luise-schule-15" },
  { className: "gruppe-34", textClassName: "k-nigin-luise-schule-14" },
];

const TestimonyCard = ({ className, textClassName, testimony }) => (
  <div
    className={className}
    style={
      testimony?.imageUrl
        ? {
            backgroundImage: `url(${testimony.imageUrl})`,
            backgroundPosition: "50% 50%",
            backgroundSize: "cover",
          }
        : undefined
    }
  >
    {testimony && (
      <p className={textClassName}>
        <span className="text-wrapper-32">{testimony.orgaName}: </span>
        <span className="text-wrapper-33">
          {testimony.teams
            .map((team) => team.text)
            .filter(Boolean)
            .join(" · ")}
        </span>
      </p>
    )}
  </div>
);

export const Screen4 = () => {
  const [testimonies, setTestimonies] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    let cancelled = false;
    fetchApprovedTestimonies().then((data) => {
      if (!cancelled) setTestimonies(data);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const visibleTestimonies = CARD_SLOTS.map(
    (_, offset) => testimonies[startIndex + offset] ?? null
  );

  const canAdvance = startIndex + CARD_SLOTS.length < testimonies.length;

  const handleAdvance = () => {
    if (canAdvance) setStartIndex((i) => i + 1);
  };

  const handleReset = () => setStartIndex(0);

  return (
    <div className="screen-4">
      <div className="buildingdemocracy-4">
        <div className="overlap-group-4">
          <div className="wiederholungsraster-4">
            <div className="auto-flex-4">
              <div className="div-4" />
              <div className="div-4" />
              <div className="div-4" />
            </div>
            <div className="auto-flex-4">
              <div className="div-4" />
              <div className="div-4" />
              <div className="div-4" />
            </div>
            <div className="auto-flex-4">
              <div className="div-4" />
              <div className="div-4" />
              <div className="div-4" />
            </div>
            <div className="auto-flex-4">
              <div className="div-4" />
              <div className="div-4" />
              <div className="div-4" />
            </div>
            <div className="auto-flex-4">
              <div className="div-4" />
              <div className="div-4" />
              <div className="div-4" />
            </div>
          </div>
          <Link className="schalter-mit-4" to="/remoteislandstart">
            <div className="text-wrapper-29">BUILDING DEMOCRACY</div>
            <div className="text-wrapper-30">REMOTE ISLAND</div>
            <div className="schalter-5">
              <div className="rechteck-18" />
              <div className="uncheck-5" />
            </div>
          </Link>
          <div className="NS-dok-logo-5" />
          <Link className="gruppe-30" to="/buildingdemocracy-start">
            <button className="button-3">
              <div className="text-wrapper-31">Tap to start!</div>
            </button>
            <div className="BD-logo-3">
              <img className="pfad-10" alt="Pfad" src="/img/pfad-210-2.png" />
              <div className="gruppe-31" />
            </div>
            <div className="deine-demokratie-app-3">
              Deine Demokratie-App
              <br />
              lokal. digital. interaktiv
            </div>
          </Link>
          <TestimonyCard
            className={CARD_SLOTS[1].className}
            textClassName={CARD_SLOTS[1].textClassName}
            testimony={visibleTestimonies[1]}
          />
          <TestimonyCard
            className={CARD_SLOTS[0].className}
            textClassName={CARD_SLOTS[0].textClassName}
            testimony={visibleTestimonies[0]}
          />
          <TestimonyCard
            className={CARD_SLOTS[3].className}
            textClassName={CARD_SLOTS[3].textClassName}
            testimony={visibleTestimonies[3]}
          />
          <TestimonyCard
            className={CARD_SLOTS[2].className}
            textClassName={CARD_SLOTS[2].textClassName}
            testimony={visibleTestimonies[2]}
          />
          <img
            className="polygon-4"
            alt="Weitere Testimonials"
            src="/img/polygon-2-3.png"
            onClick={handleAdvance}
            style={{
              cursor: canAdvance ? "pointer" : "default",
              opacity: canAdvance ? 1 : 0.4,
            }}
          />
          <img
            className="polygon-5"
            alt="Zurück zum Anfang"
            src="/img/polygon-3-3.png"
            onClick={handleReset}
            style={{ cursor: "pointer" }}
          />
          <div className="smartphone-3" />
          <Link className="text-wrapper-34" to="/buildingdemocracy-impressum">
            Impressum
          </Link>
          <div className="spielaleitung-4">
            Spielaleitung
            <br />
            Download
          </div>
          <Link className="text-wrapper-35" to="/buildingdemocracy-start-5">
            Mitwirkende
          </Link>
          <Link className="gruppe-35" to="/buildingdemocracy-gallery">
            <div className="gruppe-36">
              <div className="rechteck-19" />
              <div className="rechteck-20" />
              <div className="rechteck-21" />
              <div className="rechteck-22" />
            </div>
            <div className="text-wrapper-36">Ansicht ändern</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

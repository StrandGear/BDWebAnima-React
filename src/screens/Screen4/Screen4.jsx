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

const TestimonyCard = ({
  className,
  textClassName,
  testimony,
  onSelect,
  flippable = false,
  isFlipped = false,
  onFlipToggle,
}) => {
  if (!testimony) return null; // no placeholder box when there's nothing to show

  const handleClick = () => {
    if (flippable) {
      onFlipToggle();
    } else {
      onSelect();
    }
  };

  return (
    <div
      className={`${className} testimony-flip-outer`}
      onClick={handleClick}
      style={{ cursor: "pointer", zIndex: 2 }}
    >
      <div
        className={`testimony-flip-inner ${isFlipped ? "is-flipped" : ""}`}
      >
        {/* FRONT: image + org name only */}
        <div
          className="testimony-flip-front"
          style={
            testimony.imageUrl
              ? { backgroundImage: `url(${testimony.imageUrl})` }
              : undefined
          }
        >
          <div className={textClassName}>
            <p className="text-wrapper-32" style={{ margin: 0 }}>
              {testimony.orgaName}
            </p>
          </div>
        </div>

        {/* BACK: shaded color + each team's testimony, only reachable by flipping */}
        <div className="testimony-flip-back">
          <div className={textClassName}>
            <p className="text-wrapper-32" style={{ margin: 0 }}>
              {testimony.orgaName}
            </p>
            {testimony.teams
              .filter((team) => team.text)
              .map((team) => (
                <p
                  className="text-wrapper-33"
                  style={{ margin: "4px 0 0" }}
                  key={team.teamId}
                >
                  {team.text}
                </p>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Screen4 = () => {
  const [testimonies, setTestimonies] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [isCenterFlipped, setIsCenterFlipped] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetchApprovedTestimonies().then((data) => {
      if (!cancelled) setTestimonies(data);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  // Whenever the carousel moves, the center card is a "new" testimony —
  // always start it back on the front (image + org name).
  useEffect(() => {
    setIsCenterFlipped(false);
  }, [startIndex]);

  // Wraps an index into [0, length) circularly, handling negatives correctly
  // (plain `%` in JS can return negative results for negative inputs).
  const wrapIndex = (index, length) => ((index % length) + length) % length;

  const visibleTestimonies = CARD_SLOTS.map((_, offset) =>
    testimonies.length > 0
      ? testimonies[wrapIndex(startIndex + offset, testimonies.length)]
      : null
  );

  const canAdvance = startIndex + CARD_SLOTS.length < testimonies.length;

  const handleAdvance = () => {
    if (canAdvance) setStartIndex((i) => i + 1);
  };

  const handleReset = () => setStartIndex(0);

  // Clicking a card re-centers the carousel so that card lands in the
  // center slot (slot index 1). Slot indices map left-to-right: 0, 1, 2, 3.
  // Wraps circularly: clicking past either end loops to the other side.
  const CENTER_SLOT_INDEX = 1;
  const handleCardClick = (slotIndex) => {
    if (testimonies.length === 0) return;
    const clickedGlobalIndex = startIndex + slotIndex;
    const nextStartIndex = wrapIndex(
      clickedGlobalIndex - CENTER_SLOT_INDEX,
      testimonies.length
    );
    console.log("[Screen4] handleCardClick", {
      slotIndex,
      startIndex,
      clickedGlobalIndex,
      nextStartIndex,
    });
    setStartIndex(nextStartIndex);
  };

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
            onSelect={() => handleCardClick(1)}
            flippable
            isFlipped={isCenterFlipped}
            onFlipToggle={() => setIsCenterFlipped((f) => !f)}
          />
          <TestimonyCard
            className={CARD_SLOTS[0].className}
            textClassName={CARD_SLOTS[0].textClassName}
            testimony={visibleTestimonies[0]}
            onSelect={() => handleCardClick(0)}
          />
          <TestimonyCard
            className={CARD_SLOTS[3].className}
            textClassName={CARD_SLOTS[3].textClassName}
            testimony={visibleTestimonies[3]}
            onSelect={() => handleCardClick(3)}
          />
          <TestimonyCard
            className={CARD_SLOTS[2].className}
            textClassName={CARD_SLOTS[2].textClassName}
            testimony={visibleTestimonies[2]}
            onSelect={() => handleCardClick(2)}
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

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./style.css";
import { fetchApprovedTestimonies } from "../../services/testimonyService";

export const BdWrapper = () => {
  const [testimonies, setTestimonies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

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
  };

  return (
    <div className="BD-wrapper">
      <Link className="wiederholungsraster-3" to="/bd">
        <div className="auto-flex-3">
          <div className="div-3" />
          <div className="div-3" />
          <div className="div-3" />
        </div>
{/*         <div className="auto-flex-3">
          <div className="div-3" />
          <div className="div-3" />
          <div className="div-3" />
        </div> */}
      </Link>
      <div className="rechteck-5" />
      <div className="rechteck-6" />
      <Link className="gruppe-6" to="/ri">
        <div className="text-wrapper-10">BUILDING DEMOCRACY</div>
        <div className="text-wrapper-11">REMOTE ISLAND</div>
        <div className="schalter-2">
          <div className="uncheck-3" />
        </div>
      </Link>
      <div className="NS-dok-logo-3" />
      <Link className="text-wrapper-12" to="/mitwirkende">
        Impressum
      </Link>
      <div className="spielaleitung-3">
        Spielaleitung
        <br />
        Download
      </div>
      <div className="ergebnis-beitr-ge-2">
        Ergebnis-
        <br />
        beiträge
      </div>
      <Link className="text-wrapper-13" to="/impressum">
        Mitwirkende
      </Link>
      <div className="gruppe-7">
        <div className="text-wrapper-14">Tap to start!</div>
      </div>
      <div
        className="k-nigin-luise-schule-wrapper"
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
    </div>
  );
};

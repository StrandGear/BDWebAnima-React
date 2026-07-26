import { Link } from "react-router-dom";
import "./style.css";

export const BdWrapper = () => {
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
      <div className="k-nigin-luise-schule-wrapper">
        <p className="k-nigin-luise-schule">
          <span className="span">
            Königin-Luise-
            <br />
            Schule:{" "}
          </span>
          <span className="text-wrapper-15">Klasse 10b, 2026</span>
        </p>
      </div>
      <img className="polygon-2" alt="Polygon" src="/img/polygon-1-4.png" />
      <Link to="/bd">
        <img className="polygon-3" alt="Polygon" src="/img/polygon-3-3.png" />
      </Link>
    </div>
  );
};

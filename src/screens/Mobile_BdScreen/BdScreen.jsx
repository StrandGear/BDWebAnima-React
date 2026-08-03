import { Link } from "react-router-dom";
import "./style.css";

export const BdScreen = () => {
  return (
    <div className="BD-screen">
      <div className="wiederholungsraster-2">
        <div className="auto-flex-2">
          <div className="div-2" />
          <div className="div-2" />
          <div className="div-2" />
        </div>
{/*         <div className="auto-flex-2">
          <div className="div-2" />
          <div className="div-2" />
          <div className="div-2" />
        </div> */}
      </div>
      <div className="rechteck-3" />
      <div className="rechteck-4" />
      <Link className="gruppe-5" to="/ri">
        <div className="text-wrapper-6">BUILDING DEMOCRACY</div>
        <div className="text-wrapper-7">REMOTE ISLAND</div>
        <div className="uncheck-wrapper">
          <div className="uncheck-2" />
        </div>
      </Link>
      <div className="NS-dok-logo-2" />
      <Link className="text-wrapper-8" to="/mitwirkende">
        Impressum
      </Link>
      <Link className="text-wrapper-9" to="/impressum">
        Mitwirkende
      </Link>
      <Link to="/bd">
        <img className="img" alt="Polygon" src="/BDWebAnima-React/img/polygon-1-4.png" />
      </Link>
      <img className="PDF" alt="Pdf" src="/BDWebAnima-React/img/pdf.png" />
      <div className="spielaleitung-2">
        Spielaleitung
        <br />
        Download
      </div>
    </div>
  );
};

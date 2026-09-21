import { Link } from "react-router-dom";
import "./style.css";

export const BdScreen = () => {
  return (
    <div className="BD-screen">
      {/* Background Waves Pattern */}
      <div className="wiederholungsraster-2">
        <div className="auto-flex-2">
          <div className="div-2" />
          <div className="div-2" />
          <div className="div-2" />
        </div>
      </div>

      {/* Top and Bottom Bars */}
      <div className="rechteck-3" />
      <div className="rechteck-4" />

      {/* Centered Top Toggle */}
      <Link className="gruppe-5" to="/ri">
        <div className="text-wrapper-6">BUILDING DEMOCRACY</div>
        <div className="schalter-3">
          <div className="uncheck-2" />
        </div>
        <div className="text-wrapper-7">REMOTE ISLAND</div>
      </Link>

      {/* Back Navigation Arrow */}
      <Link to="/bd">
        <img className="img" alt="Back" src="/img/polygon-1-4.png" />
      </Link>

      {/* Centered Clickable PDF Block */}
      <div className="pdf-content-container">
        <a
          href="/Anleitung.pdf" 
          download="Anleitung.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="pdf-download-link"
        >
          <img className="PDF" alt="Spielanleitung PDF" src="/img/pdf.png" />
        </a>
        <div className="spielaleitung-2">
          Spielanleitung
          <br />
          Download
        </div>
      </div>

      {/* Footer Logo & Aligned Links */}
      <div className="NS-dok-logo-2" />
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
      </div>
    </div>
  );
};
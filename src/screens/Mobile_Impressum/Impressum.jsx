import { Link } from "react-router-dom";
import "./style.css";

export const Impressum = () => {
  return (
    <div className="impressum">
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
      </div>
      <div className="rechteck-7" />
      <div className="rechteck-8" />
      <Link className="gruppe-8" to="/ri">
        <div className="text-wrapper-16">BUILDING DEMOCRACY</div>
        <div className="text-wrapper-17">REMOTE ISLAND</div>
        <div className="schalter-3">
          <div className="uncheck-4" />
        </div>
      </Link>
      <div className="NS-dok-logo-4" />
      <Link className="text-wrapper-18" to="/mitwirkende">
        Impressum
      </Link>
      <div className="text-wrapper-19">Mitwirkende</div>
      <img className="polygon-4" alt="Polygon" src="/img/polygon-1-4.png" />
      <Link to="/bd">
        <img className="polygon-5" alt="Polygon" src="/img/polygon-2-3.png" />
      </Link>
      <div className="das-NS-DOK-ist-ein-wrapper">
        <p className="das-NS-DOK-ist-ein">
          <span className="text-wrapper-20">Das </span>
          <span className="text-wrapper-21">NS-DOK</span>
          <span className="text-wrapper-20">
            {" "}
            ist ein zeithistorisches Museum und eine der größten kommunalen
            Gedenkstätten für die Opfer des Nationalsozialismus. <br />
            <br />
            Appellhofplatz 23-25
            <br />
            50667 Köln
            <br />
            0221/221-26332
            <br />
            Führungen: 0221/2212-6331
            <br />
            nsdok@stadt-koeln.de
            <br />
            <br />
          </span>
          <span className="text-wrapper-21">Datenschutz </span>
          <span className="text-wrapper-20">etc.</span>
        </p>
      </div>
    </div>
  );
};

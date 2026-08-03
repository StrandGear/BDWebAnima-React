import { Link } from "react-router-dom";
import "./style.css";

export const Ri = () => {
  return (
    <div className="RI">
      <div className="rechteck-11" />
      <div className="rechteck-12" />
      <Link className="gruppe-10" to="/bd">
        <div className="text-wrapper-26">BUILDING DEMOCRACY</div>
        <div className="text-wrapper-27">REMOTE ISLAND</div>
        <div className="schalter-5">
          <div className="uncheck-6" />
        </div>
      </Link>
      <div className="NS-dok-logo-6" />
      <Link className="text-wrapper-28" to="/mitwirkende">
        Impressum
      </Link>
      <Link className="text-wrapper-29" to="/impressum">
        Mitwirkende
      </Link>
      <div className="rechteck-13" />
      <img className="a" alt="A" src="/BDWebAnima-React/img/a-10731x2970-2.png" />
      <img className="pfad-2" alt="Pfad" src="/BDWebAnima-React/img/pfad-234-3.png" />
      <img className="pfad-3" alt="Pfad" src="/BDWebAnima-React/img/pfad-235-3.png" />
      <img className="pfad-4" alt="Pfad" src="/BDWebAnima-React/img/pfad-236-3.png" />
      <img className="pfad-5" alt="Pfad" src="/BDWebAnima-React/img/pfad-238-3.png" />
      <img className="pfad-6" alt="Pfad" src="/BDWebAnima-React/img/pfad-239-3.png" />
      <div className="gruppe-11">
        <img className="pfad-7" alt="Pfad" src="/BDWebAnima-React/img/pfad-242-1.png" />
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
      <div className="buchen-als">
        Buchen als <br />
        Schulklasse
      </div>
      <Link className="text-wrapper-30" to="/ri-1">
        Galerie
      </Link>
      <div className="buchen-als-gruppe">
        Buchen als
        <br />
        Gruppe
      </div>
      <Link className="gruppe-12" to="/ri-2">
        <img className="pfad-7" alt="Pfad" src="/BDWebAnima-React/img/pfad-237-2.png" />
        <div className="text-wrapper-31">Beschreibung</div>
      </Link>
      <div className="text-wrapper-32">Video</div>
    </div>
  );
};

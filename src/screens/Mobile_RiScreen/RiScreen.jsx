import { Link } from "react-router-dom";
import "./style.css";

export const RiScreen = () => {
  return (
    <div className="RI-screen">
      <div className="rechteck-14" />
      <div className="rechteck-15" />
      <div className="gruppe-13">
        <div className="text-wrapper-33">BUILDING DEMOCRACY</div>
        <div className="text-wrapper-34">REMOTE ISLAND</div>
        <div className="schalter-6">
          <div className="uncheck-7" />
        </div>
      </div>
      <div className="NS-dok-logo-7" />
      <Link className="text-wrapper-35" to="/mitwirkende">
        Impressum
      </Link>
      <Link className="text-wrapper-36" to="/impressum">
        Mitwirkende
      </Link>
      <div className="rechteck-16" />
      <img className="a-x" alt="A" src="/BDWebAnima-React/img/a-10731x2970-2.png" />
      <img className="pfad-8" alt="Pfad" src="/BDWebAnima-React/img/pfad-234-3.png" />
      <img className="pfad-9" alt="Pfad" src="/BDWebAnima-React/img/pfad-235-3.png" />
      <img className="pfad-10" alt="Pfad" src="/BDWebAnima-React/img/pfad-236-3.png" />
      <img className="pfad-11" alt="Pfad" src="/BDWebAnima-React/img/pfad-238-3.png" />
      <img className="pfad-12" alt="Pfad" src="/BDWebAnima-React/img/pfad-239-3.png" />
      <div className="gruppe-14">
        <img className="pfad-13" alt="Pfad" src="/BDWebAnima-React/img/pfad-242-1.png" />
        <p className="p">
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
      <div className="buchen-als-2">
        Buchen als <br />
        Schulklasse
      </div>
      <div className="text-wrapper-37">Galerie</div>
      <div className="buchen-als-gruppe-2">
        Buchen als
        <br />
        Gruppe
      </div>
      <div className="gruppe-15">
        <img className="pfad-13" alt="Pfad" src="/BDWebAnima-React/img/pfad-237-2.png" />
        <div className="text-wrapper-38">Beschreibung</div>
      </div>
      <div className="text-wrapper-39">Video</div>
    </div>
  );
};

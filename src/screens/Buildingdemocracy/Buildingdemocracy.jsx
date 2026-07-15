import { Link } from "react-router-dom";
import "./style.css";

export const Buildingdemocracy = () => {
  return (
    <div className="buildingdemocracy">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="wiederholungsraster">
            <div className="auto-flex">
              <div className="div" />
              <div className="div" />
              <div className="div" />
            </div>
            <div className="auto-flex">
              <div className="div" />
              <div className="div" />
              <div className="div" />
            </div>
            <div className="auto-flex">
              <div className="div" />
              <div className="div" />
              <div className="div" />
            </div>
            <div className="auto-flex">
              <div className="div" />
              <div className="div" />
              <div className="div" />
            </div>
            <div className="auto-flex">
              <div className="div" />
              <div className="div" />
              <div className="div" />
            </div>
          </div>
          <Link className="schalter-mit" to="/remoteislandstart">
            <div className="text-wrapper">BUILDING DEMOCRACY</div>
            <div className="text-wrapper-2">REMOTE ISLAND</div>
            <div className="schalter">
              <div className="rechteck" />
              <div className="uncheck" />
            </div>
          </Link>
          <div className="NS-dok-logo" />
          <div className="smartphone" />
          <Link className="text-wrapper-3" to="/buildingdemocracy-impressum">
            Impressum
          </Link>
          <div className="spielaleitung">
            Spielaleitung
            <br />
            Download
          </div>
          <Link className="text-wrapper-4" to="/buildingdemocracy-start-5">
            Mitwirkende
          </Link>
          <div className="gruppe">
            <button className="button">
              <div className="text-wrapper-5">Tap to start!</div>
            </button>
            <div className="BD-logo">
              <img className="pfad" alt="Pfad" src="/img/pfad-210-3.png" />
              <div className="gruppe-2" />
            </div>
            <div className="deine-demokratie-app">
              Deine Demokratie-App
              <br />
              lokal. digital. interaktiv
            </div>
          </div>
          <Link
            className="k-nigin-luise-schule-wrapper"
            to="/buildingdemocracy-start-2"
          >
            <p className="k-nigin-luise-schule">
              <span className="span">
                Königin-Luise-
                <br />
                Schule:{" "}
              </span>
              <span className="text-wrapper-6">Klasse 10b, 2026</span>
            </p>
          </Link>
          <div className="gruppe-3">
            <p className="p">
              <span className="span">
                Königin-Luise-
                <br />
                Schule:{" "}
              </span>
              <span className="text-wrapper-6">Klasse 10b, 2026</span>
            </p>
          </div>
          <div className="gruppe-4">
            <p className="k-nigin-luise-schule-2">
              <span className="span">
                Königin-Luise-
                <br />
                Schule:{" "}
              </span>
              <span className="text-wrapper-6">Klasse 10b, 2026</span>
            </p>
          </div>
          <div className="gruppe-5">
            <p className="k-nigin-luise-schule-3">
              <span className="span">
                Königin-Luise-
                <br />
                Schule:{" "}
              </span>
              <span className="text-wrapper-6">Klasse 10b, 2026</span>
            </p>
          </div>
          <img className="polygon" alt="Polygon" src="/img/polygon-2-3.png" />
          <Link to="/buildingdemocracy-start-2">
            <img className="img" alt="Polygon" src="/img/polygon-3-3.png" />
          </Link>
          <Link className="gruppe-6" to="/buildingdemocracy-gallery">
            <div className="gruppe-7">
              <div className="rechteck-2" />
              <div className="rechteck-3" />
              <div className="rechteck-4" />
              <div className="rechteck-5" />
            </div>
            <div className="text-wrapper-7">Ansicht ändern</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

import { Link } from "react-router-dom";
import "./style.css";
import { DesktopLayout } from "../../DesktopLayout";

export const DivWrapper = () => {
  return (
    <DesktopLayout>
    <div className="div-wrapper">
      <div className="buildingdemocracy-3">
        <div className="overlap-group-3">
        {/* Background grid */}
          {/* <div className="wiederholungsraster-3">
            <div className="auto-flex-3">
              <div className="div-3" />
              <div className="div-3" />
              <div className="div-3" />
            </div>
            <div className="auto-flex-3">
              <div className="div-3" />
              <div className="div-3" />
              <div className="div-3" />
            </div>
            <div className="auto-flex-3">
              <div className="div-3" />
              <div className="div-3" />
              <div className="div-3" />
            </div>
            <div className="auto-flex-3">
              <div className="div-3" />
              <div className="div-3" />
              <div className="div-3" />
            </div>
            <div className="auto-flex-3">
              <div className="div-3" />
              <div className="div-3" />
              <div className="div-3" />
            </div>
          </div> */}

          <Link className="schalter-mit-3" to="/remoteislandstart">
            <div className="text-wrapper-22">BUILDING DEMOCRACY</div>
            <div className="text-wrapper-23">REMOTE ISLAND</div>
            <div className="schalter-4">
              <div className="rechteck-13" />
              <div className="uncheck-4" />
            </div>
          </Link>
          <div className="NS-dok-logo-4" />

          {/* 1. Nav Panel with state navigation */}
            <div className="auto">
              {/* Navigates to main screen & opens Mitwirkende */}
              <Link 
                className="text-wrapper-26" 
                to="/buildingdemocracy-start" 
                state={{ activeView: "mitwirkende" }}
              >
                Mitwirkende
              </Link>

              {/* Navigates to main screen & opens Impressum */}
              <Link 
                className="text-wrapper-27" 
                to="/buildingdemocracy-start" 
                state={{ activeView: "impressum" }}
              >
                Impressum
              </Link>

              {/* Direct PDF Download Link */}
              <a 
                href="/pdf/spielanleitung.pdf" 
                download="Spielanleitung.pdf" 
                className="spielaleitung-3"
              >
                Spielanleitung<br />Download
              </a>
            </div>

            {/* 2. "Ansicht ändern" Button directly below .auto */}
            <Link className="gruppe-28" to="/buildingdemocracy-start">
              <div className="gruppe-29">
                <div className="rechteck-14" />
                <div className="rechteck-15" />
                <div className="rechteck-16" />
                <div className="rechteck-17" />
              </div>
              <div className="text-wrapper-28">Ansicht ändern</div>
            </Link>

            {/* Cards Grid */}
          <div className="cards-grid">
            <div className="card-item">
              <p className="card-text">
                <span className="card-school">
                  Königin-Luise-
                  <br />
                  Schule:{" "}
                </span>
                <span className="card-class">Klasse 10b, 2026</span>
              </p>
            </div>
            <div className="card-item">
              <p className="card-text">
                <span className="card-school">
                  Königin-Luise-
                  <br />
                  Schule:{" "}
                </span>
                <span className="card-class">Klasse 10b, 2026</span>
              </p>
            </div>
            {/* Old example with static position 
             <div className="gruppe-20">
              <p className="k-nigin-luise-schule-9">
                <span className="text-wrapper-24">
                  Königin-Luise-
                  <br />
                  Schule:{" "}
                </span>
                <span className="text-wrapper-25">Klasse 10b, 2026</span>
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
    </DesktopLayout>
  );
};

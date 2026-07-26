import { Link } from "react-router-dom";
import { useWindowWidth } from "../../breakpoints";
import "./style.css";

export const SozialeSpiele = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="soziale-spiele">
      <div
        className="soziale-spiele-m"
        style={{
          gap: screenWidth >= 1920 ? "21px" : undefined,
          height:
            screenWidth < 1920
              ? "1920px"
              : screenWidth >= 1920
                ? "1080px"
                : undefined,
          padding:
            screenWidth < 1920
              ? "46px 99.5px"
              : screenWidth >= 1920
                ? "38px 490px"
                : undefined,
          width:
            screenWidth < 1920
              ? "1080px"
              : screenWidth >= 1920
                ? "1920px"
                : undefined,
        }}
      >
        {screenWidth < 1920 && (
          <div className="overlap-16">
            <div className="overlap-17">
              <div className="overlap-group-13">
                <div className="gruppe-29" />
                <div className="text-wrapper-143">Mitglied werden</div>
                <div className="text-wrapper-144">Portfolio</div>
                <div className="text-wrapper-145">makosa</div>
                <img className="linie-9" alt="Linie" src="/img/linie-1-9.png" />
                <p className="spielerische">
                  Spielerische Methoden ermöglichen es, komplexe
                  gesellschaftliche Prozesse niedrigschwellig zu vermitteln.
                  <br />
                  <br />
                  Beispiel:
                  <br />• „Trollolo!!!“ – Trolling-Strategien erkennen, kontern
                  &amp; demokratische Diskussionskultur stärken
                  <br />
                  <br />
                  Das Format verbindet Humor, kritisches Denken und
                  Medienkompetenz – ideal für Gruppen, die lernen möchten,
                  Diskussionen fair und konstruktiv zu führen.
                </p>
              </div>
              <Link className="text-wrapper-146" to="/quiz">
                Quize
              </Link>
              <Link className="text-wrapper-147" to="/rollenspiele">
                rollenspiele
              </Link>
              <div className="text-wrapper-148">Soziale Spiele</div>
              <Link className="text-wrapper-149" to="/kreative-workshops">
                Kreative Workshops
              </Link>
              <div className="text-wrapper-150">Impressum</div>
            </div>
            <div className="text-wrapper-144">Über uns</div>
          </div>
        )}

        {screenWidth >= 1920 && (
          <>
            <Link className="text-wrapper-151" to="/aboutus">
              Über uns
            </Link>
            <div className="overlap-18">
              <div className="overlap-group-14">
                <div className="gruppe-30" />
                <Link className="text-wrapper-152" to="/mitgliedwerden">
                  Mitglied werden
                </Link>
                <Link className="text-wrapper-153" to="/portfolio">
                  Portfolio
                </Link>
                <div className="text-wrapper-154">Impressum</div>
                <div className="text-wrapper-155">makosa</div>
                <img
                  className="linie-10"
                  alt="Linie"
                  src="/img/linie-1-4.png"
                />
              </div>
              <Link className="text-wrapper-156" to="/quiz">
                Quize
              </Link>
              <Link className="text-wrapper-157" to="/rollenspiele">
                rollenspiele
              </Link>
              <div className="text-wrapper-158">Soziale Spiele</div>
              <Link className="text-wrapper-159" to="/kreative-workshops">
                Kreative Workshops
              </Link>
              <p className="spielerische-2">
                Spielerische Methoden ermöglichen es, komplexe gesellschaftliche
                Prozesse niedrigschwellig zu vermitteln.
                <br />
                <br />
                Beispiel:
                <br />• „Trollolo!!!“ – Trolling-Strategien erkennen, kontern
                &amp; demokratische Diskussionskultur stärken
                <br />
                <br />
                Das Format verbindet Humor, kritisches Denken und
                Medienkompetenz – ideal für Gruppen, die lernen möchten,
                Diskussionen fair und konstruktiv zu führen.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

import { Link } from "react-router-dom";
import { useWindowWidth } from "../../breakpoints";
import "./style.css";

export const KreativeWorkshops = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="kreative-workshops">
      <div
        className="kreative-workshops-m"
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
              ? "46px 98.5px"
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
          <div className="overlap-13">
            <div className="overlap-14">
              <div className="overlap-group-11">
                <div className="gruppe-27" />
                <div className="text-wrapper-126">Mitglied werden</div>
                <div className="text-wrapper-127">Portfolio</div>
                <div className="text-wrapper-128">makosa</div>
                <img className="linie-7" alt="Linie" src="/BDWebAnima-React/img/linie-1-8.png" />
                <p className="workshops-an-der">
                  Workshops an der Schnittstelle von Kunst, Musik, Medien und
                  gesellschaftlicher Bildung.
                  <br />
                  Wir entwickeln hybride Formate, die analoge und digitale
                  Methoden vereinen – ideal für moderne Lernumgebungen in einer
                  vielfältigen Gesellschaft.
                </p>
              </div>
              <Link className="text-wrapper-129" to="/quiz">
                Quize
              </Link>
              <Link className="text-wrapper-130" to="/rollenspiele">
                rollenspiele
              </Link>
              <Link className="text-wrapper-131" to="/soziale-spiele">
                Soziale Spiele
              </Link>
              <div className="text-wrapper-132">Kreative Workshops</div>
              <div className="text-wrapper-133">Impressum</div>
            </div>
            <div className="text-wrapper-127">Über uns</div>
          </div>
        )}

        {screenWidth >= 1920 && (
          <>
            <Link className="text-wrapper-134" to="/aboutus">
              Über uns
            </Link>
            <div className="overlap-15">
              <div className="overlap-group-12">
                <div className="gruppe-28" />
                <Link className="text-wrapper-135" to="/mitgliedwerden">
                  Mitglied werden
                </Link>
                <Link className="text-wrapper-136" to="/portfolio">
                  Portfolio
                </Link>
                <div className="text-wrapper-137">Impressum</div>
                <div className="text-wrapper-138">makosa</div>
                <img className="linie-8" alt="Linie" src="/BDWebAnima-React/img/linie-1-3.png" />
              </div>
              <Link className="text-wrapper-139" to="/quiz">
                Quize
              </Link>
              <Link className="text-wrapper-140" to="/rollenspiele">
                rollenspiele
              </Link>
              <Link className="text-wrapper-141" to="/soziale-spiele">
                Soziale Spiele
              </Link>
              <div className="text-wrapper-142">Kreative Workshops</div>
              <p className="workshops-an-der-2">
                Workshops an der Schnittstelle von Kunst, Musik, Medien und
                gesellschaftlicher Bildung.
                <br />
                Wir entwickeln hybride Formate, die analoge und digitale
                Methoden vereinen – ideal für moderne Lernumgebungen in einer
                vielfältigen Gesellschaft.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

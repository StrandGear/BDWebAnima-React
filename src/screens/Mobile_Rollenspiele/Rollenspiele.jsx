import { Link } from "react-router-dom";
import { useWindowWidth } from "../../breakpoints";
import "./style.css";

export const Rollenspiele = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="rollenspiele">
      <div
        className="rollenspiele-m"
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
          <div className="overlap-10">
            <div className="overlap-11">
              <div className="overlap-group-9">
                <div className="gruppe-25" />
                <div className="text-wrapper-109">Mitglied werden</div>
                <div className="text-wrapper-110">Portfolio</div>
                <div className="text-wrapper-111">makosa</div>
                <img className="linie-5" alt="Linie" src="/img/linie-1-7.png" />
                <p className="rollenspiele-machen">
                  Rollenspiele machen gesellschaftliche Strukturen,
                  Machtverhältnisse und Ungleichheiten erlebbar.
                  <br />
                  <br />
                  Format:
                  <br />• „Macht“ – Rollenspiel zu Machtstrukturen,
                  Diskriminierung &amp; sozialer Gerechtigkeit
                  <br />
                  <br />
                  Teilnehmende erleben, wie Diskriminierung entsteht, welche
                  sozialen Mechanismen dahinterstehen und wie man
                  Ungerechtigkeiten erkennt, benennt und abbauen kann.
                </p>
              </div>
              <Link className="text-wrapper-112" to="/quiz">
                Quize
              </Link>
              <div className="text-wrapper-113">rollenspiele</div>
              <Link className="text-wrapper-114" to="/soziale-spiele">
                Soziale Spiele
              </Link>
              <Link className="text-wrapper-115" to="/kreative-workshops">
                Kreative Workshops
              </Link>
              <div className="text-wrapper-116">Impressum</div>
            </div>
            <div className="text-wrapper-110">Über uns</div>
          </div>
        )}

        {screenWidth >= 1920 && (
          <>
            <Link className="text-wrapper-117" to="/aboutus">
              Über uns
            </Link>
            <div className="overlap-12">
              <div className="overlap-group-10">
                <div className="gruppe-26" />
                <Link className="text-wrapper-118" to="/mitgliedwerden">
                  Mitglied werden
                </Link>
                <Link className="text-wrapper-119" to="/portfolio">
                  Portfolio
                </Link>
                <div className="text-wrapper-120">Impressum</div>
                <div className="text-wrapper-121">makosa</div>
                <img className="linie-6" alt="Linie" src="/img/linie-1-2.png" />
              </div>
              <Link className="text-wrapper-122" to="/quiz">
                Quize
              </Link>
              <div className="text-wrapper-123">rollenspiele</div>
              <Link className="text-wrapper-124" to="/soziale-spiele">
                Soziale Spiele
              </Link>
              <Link className="text-wrapper-125" to="/kreative-workshops">
                Kreative Workshops
              </Link>
              <p className="rollenspiele-machen-2">
                Rollenspiele machen gesellschaftliche Strukturen,
                Machtverhältnisse und Ungleichheiten erlebbar.
                <br />
                <br />
                Format:
                <br />• „Macht“ – Rollenspiel zu Machtstrukturen,
                Diskriminierung &amp; sozialer Gerechtigkeit
                <br />
                <br />
                Teilnehmende erleben, wie Diskriminierung entsteht, welche
                sozialen Mechanismen dahinterstehen und wie man
                Ungerechtigkeiten erkennt, benennt und abbauen kann.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

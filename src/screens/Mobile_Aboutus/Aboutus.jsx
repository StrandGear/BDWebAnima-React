import { Link } from "react-router-dom";
import { useWindowWidth } from "../../breakpoints";
import "./style.css";

export const Aboutus = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="aboutus">
      <div
        className="aboutus-m"
        style={{
          height:
            screenWidth < 1920
              ? "1920px"
              : screenWidth >= 1920
                ? "1080px"
                : undefined,
          padding:
            screenWidth < 1920
              ? "46px 100px"
              : screenWidth >= 1920
                ? "38px 452px"
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
          <>
            <div className="text-wrapper-60">Über uns</div>
            <div className="auto-flex-7">
              <div className="overlap-group-3">
                <Link className="gruppe-18" to="/home" />
                <Link className="text-wrapper-61" to="/mitgliedwerden">
                  Mitglied werden
                </Link>
                <Link className="text-wrapper-62" to="/portfolio">
                  Portfolio
                </Link>
                <div className="text-wrapper-63">makosa</div>
              </div>
              <p className="makosa-e-v-mit-sitz">
                Makosa e.V. mit Sitz in Köln ist eine kosmokulturelle Plattform
                für kreative Menschen aus allen Bereichen. Wir vereinen Menschen
                mit vielfältigen Hintergründen, Erfahrungen und Perspektiven,
                die gemeinsam neue Formate für Kultur, Kunst, Musik,
                Gesellschaftsspiele, politische Bildung, bewusste
                Freizeitgestaltung sowie Themen aus Geschichte, Soziologie und
                Psychologie entwickeln.
                <br />
                <br />
                Wir setzen auf hybride, interaktive und kreative Formate, die
                analoge und digitale Elemente verbinden. In dieser kreativen
                Mischung sehen wir die Zukunft einer modernen
                Migrationsgesellschaft sowie ein großes Potenzial für echten
                Dialog, gesellschaftliche Teilhabe und ein friedliches
                Miteinander.
                <br />
                <br />
                Unsere Hauptaufgabe besteht darin, Raum für
                Selbstverwirklichung, Austausch und Mitgestaltung zu schaffen.
                Makosa e.V. unterstützt kreative Menschen dabei, ihre
                Kompetenzen einzubringen, weiterzuentwickeln und in
                verschiedenen Netzwerken praktisch umzusetzen.
                <br />
                <br />
                Wir arbeiten gemeinnützig, demokratisch, überparteilich,
                überkonfessionell und multikulturell. Im Zentrum unserer Arbeit
                stehen die Werte der modernen Demokratie: Freiheit, Würde,
                Chancengleichheit, Selbstbestimmung und Solidarität.
              </p>
            </div>
            <Link className="text-wrapper-64" to="/impressum-m">
              Impressum
            </Link>
          </>
        )}

        {screenWidth >= 1920 && (
          <div className="overlap-3">
            <div className="overlap-group-4">
              <Link className="gruppe-19" to="/home" />
              <div className="gruppe-20">
                <p className="makosa-e-v-mit-sitz-2">
                  <span className="text-wrapper-65">Makosa </span>
                  <span className="text-wrapper-66">
                    e.V. mit Sitz in Köln ist eine kosmokulturelle Plattform für
                    kreative Menschen aus allen Bereichen. Wir vereinen Menschen
                    mit vielfältigen Hintergründen, Erfahrungen und
                    Perspektiven, die gemeinsam neue Formate für Kultur, Kunst,
                    Musik, Gesellschaftsspiele, politische Bildung, bewusste
                    Freizeitgestaltung sowie Themen aus Geschichte, Soziologie
                    und Psychologie entwickeln.
                    <br />
                    <br />
                    Wir setzen auf hybride, interaktive und kreative Formate,
                    die analoge und digitale Elemente verbinden. In dieser
                    kreativen Mischung sehen wir die Zukunft einer modernen
                    Migrationsgesellschaft sowie ein großes Potenzial für echten
                    Dialog, gesellschaftliche Teilhabe und ein friedliches
                    Miteinander.
                  </span>
                </p>
                <p className="unsere-hauptaufgabe">
                  Unsere Hauptaufgabe besteht darin, Raum für
                  Selbstverwirklichung, Austausch und Mitgestaltung zu schaffen.
                  Makosa e.V. unterstützt kreative Menschen dabei, ihre
                  Kompetenzen einzubringen, weiterzuentwickeln und in
                  verschiedenen Netzwerken praktisch umzusetzen.
                  <br />
                  <br />
                  Wir arbeiten gemeinnützig, demokratisch, überparteilich,
                  überkonfessionell und multikulturell. Im Zentrum unserer
                  Arbeit stehen die Werte der modernen Demokratie: Freiheit,
                  Würde, Chancengleichheit, Selbstbestimmung und Solidarität.
                </p>
              </div>
              <Link className="text-wrapper-67" to="/mitgliedwerden">
                Mitglied werden
              </Link>
              <Link className="text-wrapper-68" to="/portfolio">
                Portfolio
              </Link>
              <div className="text-wrapper-69">Impressum</div>
              <div className="text-wrapper-70">makosa</div>
            </div>
            <div className="text-wrapper-71">Über uns</div>
          </div>
        )}
      </div>
    </div>
  );
};

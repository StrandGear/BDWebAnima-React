import { Link } from "react-router-dom";
import { useWindowWidth } from "../../breakpoints";
import "./style.css";

export const Portfolio = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="portfolio">
      <div
        className="portfolio-m"
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
              ? "46px 95.5px"
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
          <div className="overlap-4">
            <div className="overlap-5">
              <div className="overlap-group-5">
                <Link className="gruppe-21" to="/home" />
                <Link className="text-wrapper-72" to="/mitgliedwerden">
                  Mitglied werden
                </Link>
                <div className="text-wrapper-73">Portfolio</div>
                <div className="text-wrapper-74">makosa</div>
                <img className="linie" alt="Linie" src="/BDWebAnima-React/img/linie-1-6.png" />
                <p className="unser">
                  Unser Diskussionsquiz ist eines unserer bekanntesten und
                  erfolgreichsten Formate. Spielerische Fragen führen
                  automatisch zu Diskussionen – niedrigschwellig, humorvoll und
                  zugleich inhaltlich tief.Unsere Diskussionsquizze umfassen u.
                  a.:
                  <br />
                  <br />• „Migras – friedliches Zusammenleben in der
                  Migrationsgesellschaft“
                  <br />• „Es ist nicht einfach Afrika!“
                  <br />• „Alles ist eine Verschwörung!“
                  <br />• „Sprache, мова, язык – Zusammenhalt in sprachlicher
                  Vielfalt“
                  <br />• „Wahl-o-Quiz“ – Demokratie, Wahlen &amp; politische
                  Teilhabe
                  <br />
                  <br />
                  Die Quizze wurden bereits in verschiedenen Sprachen
                  durchgeführt und decken Themen wie Sprachpolitik,
                  Migrationsgesellschaft, Nationalsozialismus, Rassismus und
                  Antisemitismus ab.
                </p>
              </div>
              <Link className="text-wrapper-75" to="/impressum-m">
                Impressum
              </Link>
              <Link className="text-wrapper-76" to="/quiz">
                Quize
              </Link>
              <Link className="text-wrapper-77" to="/rollenspiele">
                rollenspiele
              </Link>
              <Link className="text-wrapper-78" to="/soziale-spiele">
                Soziale Spiele
              </Link>
              <Link className="text-wrapper-79" to="/kreative-workshops">
                Kreative Workshops
              </Link>
            </div>
            <Link className="text-wrapper-80" to="/aboutus">
              Über uns
            </Link>
          </div>
        )}

        {screenWidth >= 1920 && (
          <>
            <Link className="text-wrapper-81" to="/aboutus">
              Über uns
            </Link>
            <div className="overlap-6">
              <div className="overlap-group-6">
                <Link className="gruppe-22" to="/home" />
                <Link className="text-wrapper-82" to="/mitgliedwerden">
                  Mitglied werden
                </Link>
                <div className="text-wrapper-83">Portfolio</div>
                <div className="text-wrapper-84">Impressum</div>
                <Link className="text-wrapper-85" to="/aboutus">
                  makosa
                </Link>
                <img className="linie-2" alt="Linie" src="/BDWebAnima-React/img/linie-1-1.png" />
              </div>
              <p className="makosa-e-v">
                <span className="text-wrapper-86">Makosa </span>
                <span className="text-wrapper-87">
                  e.V. entwickelt kreative, hybride und interaktive Formate
                  politischer und gesellschaftlicher Bildung. Unsere Formate
                  wurden konzipiert und gehören heute zu den beliebtesten
                  Bildungsformaten in vielen Communitys und Städten
                  Deutschlands.
                  <br />
                  <br />
                  Zwischen 2023 und 2025 fanden allein im Projekt (ImPlural) 54
                  Diskussionsquiz-Veranstaltungen statt – von insgesamt rund 180
                  Events in diesem Zeitraum. Viele Organisationen übernehmen
                  inzwischen das Konzept, doch die inhaltliche Entwicklung liegt
                  nach wie vor bei Makosa e.V. <br />
                  <br />
                  Unsere Formate erreichen Menschen aller Generationen,
                  Communitys, Sprachen und Hintergründe.
                </span>
              </p>
              <Link className="text-wrapper-88" to="/quiz">
                Quize
              </Link>
              <Link className="text-wrapper-89" to="/rollenspiele">
                rollenspiele
              </Link>
              <Link className="text-wrapper-90" to="/soziale-spiele">
                Soziale Spiele
              </Link>
              <Link className="text-wrapper-91" to="/kreative-workshops">
                Kreative Workshops
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

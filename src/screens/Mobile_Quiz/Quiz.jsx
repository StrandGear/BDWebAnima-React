import { Link } from "react-router-dom";
import { useWindowWidth } from "../../breakpoints";
import "./style.css";

export const Quiz = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="quiz">
      <div
        className="quiz-m"
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
          <div className="overlap-7">
            <div className="overlap-8">
              <div className="overlap-group-7">
                <div className="gruppe-23" />
                <div className="text-wrapper-92">Mitglied werden</div>
                <div className="text-wrapper-93">Portfolio</div>
                <div className="text-wrapper-94">makosa</div>
                <img className="linie-3" alt="Linie" src="/BDWebAnima-React/img/linie-1-6.png" />
                <p className="unser-2">
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
              <div className="text-wrapper-95">Quize</div>
              <Link className="text-wrapper-96" to="/rollenspiele">
                rollenspiele
              </Link>
              <Link className="text-wrapper-97" to="/soziale-spiele">
                Soziale Spiele
              </Link>
              <Link className="text-wrapper-98" to="/kreative-workshops">
                Kreative Workshops
              </Link>
              <div className="text-wrapper-99">Impressum</div>
            </div>
            <div className="text-wrapper-93">Über uns</div>
          </div>
        )}

        {screenWidth >= 1920 && (
          <>
            <Link className="text-wrapper-100" to="/aboutus">
              Über uns
            </Link>
            <div className="overlap-9">
              <div className="overlap-group-8">
                <div className="gruppe-24" />
                <Link className="text-wrapper-101" to="/mitgliedwerden">
                  Mitglied werden
                </Link>
                <Link className="text-wrapper-102" to="/portfolio">
                  Portfolio
                </Link>
                <div className="text-wrapper-103">Impressum</div>
                <div className="text-wrapper-104">makosa</div>
                <img className="linie-4" alt="Linie" src="/BDWebAnima-React/img/linie-1-1.png" />
              </div>
              <div className="text-wrapper-105">Quize</div>
              <Link className="text-wrapper-106" to="/rollenspiele">
                rollenspiele
              </Link>
              <Link className="text-wrapper-107" to="/soziale-spiele">
                Soziale Spiele
              </Link>
              <Link className="text-wrapper-108" to="/kreative-workshops">
                Kreative Workshops
              </Link>
              <p className="unser-3">
                Unser Diskussionsquiz ist eines unserer bekanntesten und
                erfolgreichsten Formate. Spielerische Fragen führen automatisch
                zu Diskussionen – niedrigschwellig, humorvoll und zugleich
                inhaltlich tief.Unsere Diskussionsquizze umfassen u. a.:
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
                Die Quizze wurden bereits in verschiedenen Sprachen durchgeführt
                und decken Themen wie Sprachpolitik, Migrationsgesellschaft,
                Nationalsozialismus, Rassismus und Antisemitismus ab.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

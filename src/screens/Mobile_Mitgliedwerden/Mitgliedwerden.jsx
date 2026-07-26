import { Link } from "react-router-dom";
import { useWindowWidth } from "../../breakpoints";
import "./style.css";

export const Mitgliedwerden = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="mitgliedwerden">
      <div
        className="mitgliedwerden-m"
        style={{
          gap: screenWidth >= 1920 ? "47px" : undefined,
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
          <>
            <Link className="text-wrapper-160" to="/aboutus">
              Über uns
            </Link>
            <div className="auto-flex-8">
              <div className="overlap-group-15">
                <Link className="gruppe-31" to="/home" />
                <div className="text-wrapper-161">Mitglied werden</div>
                <Link className="text-wrapper-162" to="/portfolio">
                  Portfolio
                </Link>
                <div className="text-wrapper-163">makosa</div>
              </div>
              <p className="unsere-referent">
                Unsere Referent*innen bringen Erfahrung aus politischer Bildung,
                Kulturarbeit, Medien, Kreativpädagogik und interkulturellem
                Dialog mit. Sie gestalten unsere Formate bundesweit und
                entwickeln neue Impulse für die Migrationsgesellschaft.
                <br />
                <br />
                Wir freuen uns immer über neue Mitglieder, die sich kreativ,
                gesellschaftlich oder organisatorisch einbringen möchten.
                <br />
                Wenn du Lust hast, Teil unseres Vereins zu werden, an Projekten
                mitzuwirken oder eigene Ideen einzubringen:
                <br />
                <br />👉 Fülle einfach unser Mitgliedschaftsformular aus.
                <br />
                (Link)
                <br />
                <br />
                Gemeinsam gestalten wir kreative Formate, stärken den Dialog und
                bauen Brücken zwischen Communitys.
              </p>
            </div>
            <Link className="text-wrapper-164" to="/impressum-m">
              Impressum
            </Link>
          </>
        )}

        {screenWidth >= 1920 && (
          <>
            <Link className="text-wrapper-165" to="/aboutus">
              Über uns
            </Link>
            <div className="overlap-group-16">
              <Link className="gruppe-32" to="/home" />
              <div className="gruppe-33">
                <p className="text-wrapper-166">
                  Unsere Referent*innen bringen Erfahrung aus politischer
                  Bildung, Kulturarbeit, Medien, Kreativpädagogik und
                  interkulturellem Dialog mit. Sie gestalten unsere Formate
                  bundesweit und entwickeln neue Impulse für die
                  Migrationsgesellschaft.
                </p>
                <p className="wir-freuen-uns-immer">
                  Wir freuen uns immer über neue Mitglieder, die sich kreativ,
                  gesellschaftlich oder organisatorisch einbringen möchten.
                  <br />
                  Wenn du Lust hast, Teil unseres Vereins zu werden, an
                  Projekten mitzuwirken oder eigene Ideen einzubringen:
                  <br />
                  <br />👉 Fülle einfach unser Mitgliedschaftsformular aus.
                  <br />
                  (Link)
                  <br />
                  <br />
                  Gemeinsam gestalten wir kreative Formate, stärken den Dialog
                  und bauen Brücken zwischen Communitys.
                </p>
              </div>
              <div className="text-wrapper-167">Mitglied werden</div>
              <Link className="text-wrapper-168" to="/portfolio">
                Portfolio
              </Link>
              <div className="text-wrapper-169">Impressum</div>
              <Link className="text-wrapper-170" to="/portfolio">
                makosa
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

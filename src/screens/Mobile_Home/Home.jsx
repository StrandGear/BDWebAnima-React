import { Link } from "react-router-dom";
import { useWindowWidth } from "../../breakpoints";
import "./style.css";

export const Home = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="home">
      <div
        className="home-m"
        style={{
          height:
            screenWidth < 1920
              ? "1920px"
              : screenWidth >= 1920
                ? "1080px"
                : undefined,
          justifyContent: screenWidth < 1920 ? "center" : undefined,
          overflow: screenWidth < 1920 ? "hidden" : undefined,
          width:
            screenWidth < 1920
              ? "1080px"
              : screenWidth >= 1920
                ? "1920px"
                : undefined,
        }}
      >
        <div
          className="overlap-group-2"
          style={{
            backgroundImage:
              screenWidth < 1920
                ? "url(/img/fog-1.png)"
                : screenWidth >= 1920
                  ? "url(/img/fog.png)"
                  : undefined,
            gap:
              screenWidth < 1920
                ? "482px"
                : screenWidth >= 1920
                  ? "126px"
                  : undefined,
            minHeight:
              screenWidth < 1920
                ? "1920px"
                : screenWidth >= 1920
                  ? "1080px"
                  : undefined,
            padding:
              screenWidth < 1920
                ? "128px 1267px"
                : screenWidth >= 1920
                  ? "111px 490px"
                  : undefined,
            width:
              screenWidth < 1920
                ? "3414px"
                : screenWidth >= 1920
                  ? "1920px"
                  : undefined,
          }}
        >
          <div
            className="auto-flex-6"
            style={{
              height: screenWidth < 1920 ? "26px" : undefined,
              minWidth:
                screenWidth < 1920
                  ? "878px"
                  : screenWidth >= 1920
                    ? "938px"
                    : undefined,
            }}
          >
            {screenWidth < 1920 && (
              <>
                <Link className="text-wrapper-50" to="/aboutus">
                  Über uns
                </Link>
                <Link className="text-wrapper-51" to="/portfolio">
                  Portfolio
                </Link>
                <Link className="text-wrapper-52" to="/mitgliedwerden">
                  Mitglied werden
                </Link>
                <Link className="text-wrapper-53" to="/impressum-m">
                  Impressum
                </Link>
              </>
            )}

            {screenWidth >= 1920 && (
              <>
                <Link className="text-wrapper-54" to="/aboutus">
                  Über uns
                </Link>
                <Link className="text-wrapper-55" to="/portfolio">
                  Portfolio
                </Link>
                <div className="overlap">
                  <Link className="text-wrapper-56" to="/mitgliedwerden">
                    Mitglied werden
                  </Link>
                  <div className="text-wrapper-57">Impressum</div>
                </div>
              </>
            )}
          </div>
          <div
            className="overlap-2"
            style={{
              alignItems: screenWidth >= 1920 ? "flex-end" : undefined,
              backgroundImage:
                screenWidth >= 1920 ? "url(/img/gruppe-11-1.png)" : undefined,
              backgroundPosition: screenWidth >= 1920 ? "50% 50%" : undefined,
              backgroundSize: screenWidth >= 1920 ? "cover" : undefined,
              display: screenWidth >= 1920 ? "flex" : undefined,
              height:
                screenWidth < 1920
                  ? "661px"
                  : screenWidth >= 1920
                    ? "648px"
                    : undefined,
              justifyContent: screenWidth >= 1920 ? "flex-end" : undefined,
              minWidth: screenWidth >= 1920 ? "504px" : undefined,
              padding: screenWidth >= 1920 ? "12.0px 118px" : undefined,
              position: screenWidth < 1920 ? "relative" : undefined,
              width: screenWidth < 1920 ? "504px" : undefined,
            }}
          >
            {screenWidth < 1920 && (
              <>
                <div className="text-wrapper-58">Spielen!</div>
                <div className="makosa-illu-2" />
              </>
            )}

            {screenWidth >= 1920 && (
              <div className="text-wrapper-59">Spielen!</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

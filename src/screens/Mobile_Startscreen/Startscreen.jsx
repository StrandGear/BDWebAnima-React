import { Link } from "react-router-dom";
import { useWindowWidth } from "../../breakpoints";
import "./style.css";

export const Startscreen = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="startscreen">
      <Link
        className="startscreen-m"
        style={{
          width:
            screenWidth < 1920
              ? "1080px"
              : screenWidth >= 1920
                ? "1920px"
                : undefined,
        }}
        to="/home"
      >
        <div
          className="overlap-group"
          style={{
            backgroundImage:
              screenWidth >= 1920 ? "url(/img/snow.png)" : undefined,
            backgroundPosition: screenWidth >= 1920 ? "50% 50%" : undefined,
            backgroundSize: screenWidth >= 1920 ? "cover" : undefined,
            height:
              screenWidth < 1920
                ? "1920px"
                : screenWidth >= 1920
                  ? "1080px"
                  : undefined,
            width:
              screenWidth < 1920
                ? "3640px"
                : screenWidth >= 1920
                  ? "2048px"
                  : undefined,
          }}
        >
          <div
            className="makosa-illu"
            style={{
              backgroundImage:
                screenWidth >= 1920
                  ? "url(/img/gruppe-11-3.png)"
                  : screenWidth < 1920
                    ? "url(/img/gruppe-11-2.png)"
                    : undefined,
              left:
                screenWidth >= 1920
                  ? "772px"
                  : screenWidth < 1920
                    ? "1568px"
                    : undefined,
              top:
                screenWidth >= 1920
                  ? "263px"
                  : screenWidth < 1920
                    ? "636px"
                    : undefined,
            }}
          />
          {screenWidth < 1920 && (
            <>
              <img className="snow" alt="Snow" src="/BDWebAnima-React/img/snow-1.png" />
              <div className="pressanykey">
                <div className="text-wrapper-48">drücke eine taste</div>
              </div>
            </>
          )}

          {screenWidth >= 1920 && (
            <div className="text-wrapper-49">drücke eine taste</div>
          )}
        </div>
      </Link>
    </div>
  );
};

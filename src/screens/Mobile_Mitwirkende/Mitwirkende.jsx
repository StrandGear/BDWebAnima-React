import { Link } from "react-router-dom";
import "./style.css";

export const Mitwirkende = () => {
  return (
    <div className="mitwirkende">
      <Link className="wiederholungsraster-5" to="/bd">
        <div className="auto-flex-5">
          <div className="div-5" />
          <div className="div-5" />
          <div className="div-5" />
        </div>
        <div className="auto-flex-5">
          <div className="div-5" />
          <div className="div-5" />
          <div className="div-5" />
        </div>
      </Link>
      <div className="rechteck-9" />
      <div className="rechteck-10" />
      <Link className="gruppe-9" to="/ri">
        <div className="text-wrapper-22">BUILDING DEMOCRACY</div>
        <div className="text-wrapper-23">REMOTE ISLAND</div>
        <div className="schalter-4">
          <div className="uncheck-5" />
        </div>
      </Link>
      <div className="NS-dok-logo-5" />
      <div className="text-wrapper-24">Impressum</div>
      <Link className="text-wrapper-25" to="/impressum">
        Mitwirkende
      </Link>
      <img className="polygon-6" alt="Polygon" src="/BDWebAnima-React/img/polygon-1-4.png" />
      <img className="polygon-7" alt="Polygon" src="/BDWebAnima-React/img/polygon-2-3.png" />
      <div className="mitwirkende-blab-bla-wrapper">
        <div className="mitwirkende-blab-bla">
          Mitwirkende
          <br />
          <br />
          blab
          <br />
          <br />
          bla
          <br />
          <br />
          blub
        </div>
      </div>
    </div>
  );
};

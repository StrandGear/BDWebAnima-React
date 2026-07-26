import { Link } from "react-router-dom";
import "./style.css";

export const RiWrapper = () => {
  return (
    <div className="RI-wrapper">
      <div className="rechteck-17" />
      <div className="rechteck-18" />
      <Link className="gruppe-16" to="/bd">
        <div className="text-wrapper-40">BUILDING DEMOCRACY</div>
        <div className="text-wrapper-41">REMOTE ISLAND</div>
        <div className="schalter-7">
          <div className="uncheck-8" />
        </div>
      </Link>
      <div className="NS-dok-logo-8" />
      <Link className="text-wrapper-42" to="/mitwirkende">
        Impressum
      </Link>
      <Link className="text-wrapper-43" to="/impressum">
        Mitwirkende
      </Link>
      <div className="rechteck-19" />
      <img className="a-2" alt="A" src="/img/a-10731x2970-2.png" />
      <img className="pfad-14" alt="Pfad" src="/img/pfad-234-3.png" />
      <img className="pfad-15" alt="Pfad" src="/img/pfad-235-3.png" />
      <img className="pfad-16" alt="Pfad" src="/img/pfad-236-3.png" />
      <img className="pfad-17" alt="Pfad" src="/img/pfad-238-3.png" />
      <img className="pfad-18" alt="Pfad" src="/img/pfad-239-3.png" />
      <Link className="buchen-als-3" to="/ri">
        Buchen als <br />
        Schulklasse
      </Link>
      <div className="text-wrapper-44">Galerie</div>
      <Link className="buchen-als-gruppe-3" to="/ri">
        Buchen als
        <br />
        Gruppe
      </Link>
      <div className="gruppe-17">
        <img className="pfad-19" alt="Pfad" src="/img/pfad-237-3.png" />
        <div className="text-wrapper-45">Beschreibung</div>
      </div>
      <div className="text-wrapper-46">Video</div>
      <img className="pfad-20" alt="Pfad" src="/img/pfad-243.png" />
      <p className="text-wrapper-47">
        Abenteuer Demokratie auf einer Insel: Mithilfe spannender Challenges und
        Fragen entscheiden die Teilnehmenden, wie sie ihr Zusammenleben auf
        Remote Island organisieren wollen.
      </p>
      <p className="nach-einer-globalen">
        Nach einer globalen Apokalypse auf einer Insel gestrandet, müssen die
        Spielenden selbstständig in Kleingruppen – ohne Lehrkräfte –
        unterschiedliche Aufgaben bewältigen. Dies geschieht in fünf
        Themenräumen: Schutz, Wohnen, Ernährung, Kultur und Arbeit. Durch
        Challenges in den jeweiligen Räumen und durch anregende
        Entscheidungsfragen setzen sich die Teilnehmenden damit auseinander, wie
        ein Zusammenleben auf Remote Island organisiert werden kann.
      </p>
      <p className="im-inselrat">
        Im Inselrat diskutieren die Spielenden über ihre jeweiligen Ergebnisse
        und Positionen. Dabei treffen sie gemeinsam Entscheidungen zu den
        jeweiligen Themen und erstellen ihren eigenen Inselvertrag. In einer
        abschließenden Reflexionsphase werden die Erlebnisse und Erfahrungen aus
        dem Spiel mit den Lebenswelten der Teilnehmenden in Bezug gesetzt.
      </p>
      <p className="wie-sehen-sie-ihre">
        Wie sehen sie ihre jeweilige Rolle als Einzelne und wie beschreiben sie
        die Entscheidungsprozesse in den Gruppen? Was lässt sich aus dem Spiel
        auf unsere gesellschaftlichen Verhältnisse übertragen, wie lassen sich
        diese dadurch auch hinterfragen? Und wo sehen die Teilnehmenden selbst
        Möglichkeiten zur demokratischen Teilhabe und Partizipation in ihrem
        Alltag?
      </p>
    </div>
  );
};

import { Link } from "react-router-dom";
import "./style.css";

export const RemoteIslandStart = () => {
  return (
    <div className="remote-island-start">
      <div className="rechteck-11" />
      <Link className="schalter-mit-2" to="/buildingdemocracy-start">
        <div className="text-wrapper-16">BUILDING DEMOCRACY</div>
        <div className="text-wrapper-17">REMOTE ISLAND</div>
        <div className="schalter-3">
          <div className="rechteck-12" />
          <div className="uncheck-3" />
        </div>
      </Link>
      <img className="pfad-3" alt="Pfad" src="/BDWebAnima-React/img/pfad-234-1.png" />
      <img className="pfad-4" alt="Pfad" src="/BDWebAnima-React/img/pfad-236-1.png" />
      <img className="pfad-5" alt="Pfad" src="/BDWebAnima-React/img/pfad-237-1.png" />
      <img className="pfad-6" alt="Pfad" src="/BDWebAnima-React/img/pfad-238-1.png" />
      <img className="pfad-7" alt="Pfad" src="/BDWebAnima-React/img/pfad-239-1.png" />
      <img
        className="LOGO-REMOTE"
        alt="Logo REMOTE"
        src="/BDWebAnima-React/img/logo-op7-remote-island-imagotyp-2023-1.png"
      />
      <div className="gruppe-16">
        <img className="pfad-8" alt="Pfad" src="/BDWebAnima-React/img/pfad-242-1.png" />
        <p className="dauer-stunden">
          Dauer
          <br />3 Stunden
          <br />
          <br />
          Kosten
          <br />
          Schulklassen: 90 €<br />
          Studierende &amp; Jugendgruppen: 150 €<br />
          Erwachsene: 225 €<br />
          <br />
          Für wen
          <br />
          Dieser Workshop eignet sich für Schulklassen ab dem 9. Jahrgang und
          für Erwachsenengruppen von mindestens 15 bis maximal 35 Personen.
          <br />
          Für Kölner Schulen sind sämtliche pädagogischen Angebote des NS-DOK
          kostenfrei.
          <br />
          Am Wochenende und feiertags fallen zusätzliche Gebühren an.
        </p>
      </div>
      <img className="pfad-9" alt="Pfad" src="/BDWebAnima-React/img/pfad-243-1.png" />
      <p className="text-wrapper-18">
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
      <div className="buchen-als">
        Buchen als <br />
        Schulklasse
      </div>
      <Link className="gruppe-17" to="/remoteisland-gallery">
        <img className="pfad-8" alt="Pfad" src="/BDWebAnima-React/img/pfad-235-1.png" />
        <div className="text-wrapper-19">Galerie</div>
      </Link>
      <div className="buchen-als-gruppe">
        Buchen als
        <br />
        Gruppe
      </div>
      <div className="gr-e-aus-remote">
        Grüße aus <br />
        Remote Island
      </div>
      <div className="text-wrapper-20">Video</div>
      <div className="text-wrapper-21">Impressum</div>
      <div className="NS-dok-logo-3" />
    </div>
  );
};

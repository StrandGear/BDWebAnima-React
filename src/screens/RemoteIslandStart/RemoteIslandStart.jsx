import { Link } from "react-router-dom";
import "./style.css";
import { useState } from "react";

export const RemoteIslandStart = () => {

  // State to track whether the gallery overlay is visible
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

// State to track the active text view: "default", "about", or "greetings"
  const [activeTab, setActiveTab] = useState("default");

  return (
    <div className="remote-island-start">
      <div className="rechteck-11" />

      {/* Navigation and Main Content */}
      <Link className="schalter-mit-2" to="/buildingdemocracy-start">
        <div className="text-wrapper-16">BUILDING DEMOCRACY</div>
        <div className="text-wrapper-17">REMOTE ISLAND</div>
        <div className="schalter-3">
          <div className="rechteck-12" />
          <div className="uncheck-3" />
        </div>
      </Link>

      {/* Background/Static decorative images */}
      <img className="pfad-3" alt="Pfad" src="/img/pfad-234-1.png" />
      <img className="pfad-4" alt="Pfad" src="/img/pfad-236-1.png" />
      <img className="pfad-5" alt="Pfad" src="/img/pfad-237-1.png" />
      <img className="pfad-6" alt="Pfad" src="/img/pfad-238-1.png" />
      <img className="pfad-7" alt="Pfad" src="/img/pfad-239-1.png" />

      {/* <img
        className="LOGO-REMOTE"
        alt="Logo REMOTE"
        src="/img/logo-op7-remote-island-imagotyp-2023-1.png"
      /> */}

      <div className="gruppe-16">
        <img className="pfad-8" alt="Pfad" src="/img/pfad-242-1.png" />
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
      <img className="pfad-9" alt="Pfad" src="/img/pfad-243-1.png" />

{/* --- MERGED & SWITCHABLE TEXT CONTAINER --- */}
      <div className="text-content-container">
        {activeTab === "default" && (
          <div className="text-main-block">
            <p className="text-sub-block">
              Abenteuer Demokratie auf einer Insel: Mithilfe spannender Challenges und
              Fragen entscheiden die Teilnehmenden, wie sie ihr Zusammenleben auf
              Remote Island organisieren wollen.
            </p>
            <p className="text-sub-block">
              Nach einer globalen Apokalypse auf einer Insel gestrandet, müssen die
              Spielenden selbstständig in Kleingruppen – ohne Lehrkräfte –
              unterschiedliche Aufgaben bewältigen. Dies geschieht in fünf
              Themenräumen: Schutz, Wohnen, Ernährung, Kultur und Arbeit. Durch
              Challenges in den jeweiligen Räumen und durch anregende
              Entscheidungsfragen setzen sich die Teilnehmenden damit auseinander, wie
              ein Zusammenleben auf Remote Island organisiert werden kann.
            </p>
            <p className="text-sub-block">
              Im Inselrat diskutieren die Spielenden über ihre jeweiligen Ergebnisse
              und Positionen. Dabei treffen sie gemeinsam Entscheidungen zu den
              jeweiligen Themen und erstellen ihren eigenen Inselvertrag. In einer
              abschließenden Reflexionsphase werden die Erlebnisse und Erfahrungen aus
              dem Spiel mit den Lebenswelten der Teilnehmenden in Bezug gesetzt.
            </p>
            <p className="text-sub-block">
              Wie sehen sie ihre jeweilige Rolle als Einzelne und wie beschreiben sie
              die Entscheidungsprozesse in den Gruppen? Was lässt sich aus dem Spiel
              auf unsere gesellschaftlichen Verhältnisse übertragen, wie lassen sich
              diese dadurch auch hinterfragen? Und wo sehen die Teilnehmenden selbst
              Möglichkeiten zur demokratischen Teilhabe und Partizipation in ihrem
              Alltag?
            </p>
          </div>
        )}

        {activeTab === "about" && (
          <div className="text-main-block">
            <p className="text-sub-block">
              Abenteuer Demokratie auf einer Insel: Mithilfe spannender Challenges und
              Fragen entscheiden die Teilnehmenden, wie sie ihr Zusammenleben auf
              Remote Island organisieren wollen.
            </p>
            <p className="text-sub-block">
              Nach einer globalen Apokalypse auf einer Insel gestrandet, müssen die
              Spielenden selbstständig in Kleingruppen – ohne Lehrkräfte –
              unterschiedliche Aufgaben bewältigen. Dies geschieht in fünf
              Themenräumen: Schutz, Wohnen, Ernährung, Kultur und Arbeit. Durch
              Challenges in den jeweiligen Räumen und durch anregende
              Entscheidungsfragen setzen sich die Teilnehmenden damit auseinander, wie
              ein Zusammenleben auf Remote Island organisiert werden kann.
            </p>
            <p className="text-sub-block">
              Im Inselrat diskutieren die Spielenden über ihre jeweiligen Ergebnisse
              und Positionen. Dabei treffen sie gemeinsam Entscheidungen zu den
              jeweiligen Themen und erstellen ihren eigenen Inselvertrag. In einer
              abschließenden Reflexionsphase werden die Erlebnisse und Erfahrungen aus
              dem Spiel mit den Lebenswelten der Teilnehmenden in Bezug gesetzt.
            </p>
            <p className="text-sub-block">
              Wie sehen sie ihre jeweilige Rolle als Einzelne und wie beschreiben sie
              die Entscheidungsprozesse in den Gruppen? Was lässt sich aus dem Spiel
              auf unsere gesellschaftlichen Verhältnisse übertragen, wie lassen sich
              diese dadurch auch hinterfragen? Und wo sehen die Teilnehmenden selbst
              Möglichkeiten zur demokratischen Teilhabe und Partizipation in ihrem
              Alltag?
            </p>
          </div>
        )}

        {activeTab === "greetings" && (
          <div className="text-main-block">
          <p className="text-sub-block">
            Placeholder text for Grüße aus Remote Island. Placeholder text for Grüße aus Remote Island. 
            Placeholder text for Grüße aus Remote Island. Placeholder text for Grüße aus Remote Island.
          </p>
          </div>
        )}
      </div>

{/* Buttons */}
<Link className="" to="">
        <div className="buchen-als">Buchen</div>
      </Link>

 {/* "Über uns" Button triggers state change */}
      <div 
        className="gruppe-17" 
        onClick={() => setActiveTab("about")}
        style={{ cursor: "pointer" }}
      >
        <img className="pfad-8" alt="Pfad" src="/img/pfad-235-1.png" />
        <div className="text-wrapper-19">Über uns</div>
      </div>

      <div 
        className="buchen-als-gruppe" 
        onClick={() => setIsGalleryOpen(true)}
        style={{ cursor: "pointer" }}
      >
        Galerie
      </div>

      {/* "Grüße aus Remote Island" Button triggers state change */}
      <div 
        className="gr-e-aus-remote" 
        onClick={() => setActiveTab("greetings")}
        style={{ cursor: "pointer" }}
      >
        Grüße aus <br />Remote Island
      </div> 

      <Link className="" to="">
        <div className="text-wrapper-20">Video</div>
      </Link>

      <div className="text-wrapper-21">Impressum</div>
      <div className="text-wrapper-33">Datenschutz</div>
      <div className="NS-dok-logo-3" />
      <div className="gruppe-26" />

      {/* -------------------------------------------------- */}
      {/* CONDITIONAL GALLERY OVERLAY LAYER                  */}
      {/* -------------------------------------------------- */}
      {isGalleryOpen && (
        <div className="gallery-overlay">
          {/* Gallery image elements imported from your gallery layout */}
          <div className="gruppe-wrapper">
            <div className="gruppe-38">
              <div className="gruppe-39">
                <div className="gruppe-40" />
                <div className="gruppe-41" />
                <img className="pfad-19" alt="Pfad" src="/img/pfad-246.png" />
                <div className="rechteck-25" />
                <div className="gruppe-42" />
              </div>
            </div>
          </div>
          
          <div className="gruppe-43">
            <div className="gruppe-44">
              <div className="gruppe-45">
                <div className="gruppe-46" />
                <div className="gruppe-47" />
                <img className="pfad-20" alt="Pfad" src="/img/pfad-250.png" />
                <div className="rechteck-26" />
                <div className="gruppe-48" />
              </div>
            </div>
          </div>

          <div className="gruppe-49">
            <div className="gruppe-50">
              <div className="gruppe-51">
                <div className="gruppe-52" />
                <div className="gruppe-53" />
                <img className="pfad-21" alt="Pfad" src="/img/pfad-254.png" />
                <div className="rechteck-27" />
                <div className="gruppe-54" />
                <div className="gruppe-55" />
              </div>
            </div>
          </div>

          <div className="gruppe-56">
            <div className="gruppe-57">
              <div className="gruppe-58">
                <div className="gruppe-59">
                  <div className="gruppe-60" />
                  <img className="pfad-22" alt="Pfad" src="/img/pfad-258.png" />
                  <div className="rechteck-28" />
                  <div className="gruppe-61" />
                  <div className="gruppe-62" />
                  <img className="pfad-23" alt="Pfad" src="/img/pfad-261.png" />
                  <div className="rechteck-29" />
                </div>
              </div>
              <div className="gruppe-63" />
              <div className="gruppe-64" />
            </div>
          </div>

          <img className="kamera" alt="Kamera" src="/img/kamera.png" />
          <img className="golden-compass" alt="Golden compass" src="/img/golden-compass.png" />

          {/* Close/Cross Button: toggles state back to FALSE */}
          <div 
            className="vereinigungsmenge-wrapper" 
            onClick={() => setIsGalleryOpen(false)}
            style={{ cursor: "pointer" }}
          >
            <img
              className="vereinigungsmenge"
              alt="Vereinigungsmenge"
              src="/img/vereinigungsmenge-1.png"
            />
          </div>
        </div>
      )}
    </div>
  );
};

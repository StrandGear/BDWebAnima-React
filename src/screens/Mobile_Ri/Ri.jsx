import { Link } from "react-router-dom";
import "./style.css";
import { useState, useEffect } from "react"; // 1. Added useEffect here
import { fetchVideoUrls } from "../../services/videoService";

export const VideoModal = ({ onClose, videoKey = "ri_video" }) => {
  const [videoUrl, setVideoUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    fetchVideoUrls().then((urls) => {
      if (!cancelled) {
        if (urls && urls[videoKey]) {
          setVideoUrl(urls[videoKey]);
        }
        setIsLoading(false);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [videoKey]);

return (
    <div className="video-modal-backdrop" onClick={onClose}>
      <div className="video-modal-container" onClick={(e) => e.stopPropagation()}>
        <button 
          className="video-modal-close" 
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>

        {isLoading ? (
          <div className="loading-text" style={{ color: "#fff" }}>
            Loading Video...
          </div>
        ) : videoUrl ? (
          <video 
            src={videoUrl} 
            controls 
            autoPlay 
            controlsList="nodownload"
            onContextMenu={(e) => e.preventDefault()}
            className="popup-video-element"
          />
        ) : (
          <div className="error-text" style={{ color: "#fff" }}>
            Video could not be loaded.
          </div>
        )}
      </div>
    </div>
  );
};

export const Ri = () => {
  // Track active tab for main card: "info", "about", "greetings", "booking"
  const [activeTab, setActiveTab] = useState("info");
  
  // Track overlay video state
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="RI">
      <div className="rechteck-11" />
      <div className="rechteck-12" />

      {/* Top Header Link */}
      <Link className="gruppe-10" to="/bd">
        <div className="text-wrapper-26">BUILDING DEMOCRACY</div>
        <div className="text-wrapper-27">REMOTE ISLAND</div>
        <div className="schalter-5">
          <div className="uncheck-6" />
        </div>
      </Link>

      <Link to="/" aria-label="Zur Startseite" className="NS-dok-logo-6" />
     <Link 
      className="text-wrapper-28" 
      to="/bd" 
      state={{ activeView: "impressum" }}
    >
      Impressum
    </Link>
    <Link 
      className="text-wrapper-29" 
      to="/bd" 
      state={{ activeView: "mitwirkende" }}
    >
      Mitwirkende 
    </Link>

      <div className="rechteck-13" />
      <img className="a" alt="A" src="/img/a-10731x2970-2.png" />

      {/* Decorative path shapes */}
      <img className="pfad-2" alt="Pfad" src="/img/pfad-234-3.png" />
      <img className="pfad-3" alt="Pfad" src="/img/pfad-235-3.png" />
      <img className="pfad-4" alt="Pfad" src="/img/pfad-236-3.png" />
      <img className="pfad-5" alt="Pfad" src="/img/pfad-238-3.png" />
      <img className="pfad-6" alt="Pfad" src="/img/pfad-239-3.png" />

      {/* Nav Buttons triggering content tabs */}
      <div
        className="buchen-als"
        onClick={() => setActiveTab("booking")}
        style={{ cursor: "pointer" }}
      >
        Buchen
      </div>

      <div
        className="text-wrapper-30"
        onClick={() => setActiveTab("info")}
        style={{ cursor: "pointer" }}
      >
        Über uns
      </div>

      <div
        className="buchen-als-gruppe"
        onClick={() => setActiveTab("about")}
        style={{ cursor: "pointer" }}
      >
        Galerie
      </div>

      <div
        className="gruppe-12"
        onClick={() => setActiveTab("greetings")}
        style={{ cursor: "pointer" }}
      >
        <img className="pfad-7" alt="Pfad" src="/img/pfad-237-2.png" />
        <div className="text-wrapper-31">
          Grüße aus <br />
          Remote Island
        </div>
      </div>

      {/* Video button opens video modal overlay */}
      <div
        className="text-wrapper-32"
        onClick={() => setIsVideoOpen(true)}
        style={{ cursor: "pointer" }}
      >
        Video
      </div>

      {/* MAIN CONTAINER WITH SWITCHABLE SCROLLABLE CONTENT */}
      <div className="gruppe-11">
        <img className="pfad-7" alt="Pfad" src="/img/pfad-242-1.png" />

        <div className="text-content-container">
          {activeTab === "info" && (
            <div className="text-block">
              <p className="text-title">
                Abenteuer Demokratie auf einer Insel: Mithilfe spannender Challenges und
                Fragen entscheiden die Teilnehmenden, wie sie ihr Zusammenleben auf
                Remote Island organisieren wollen.
              </p>
              <p className="text-title">
                Nach einer globalen Apokalypse auf einer Insel gestrandet, müssen die
                Spielenden selbstständig in Kleingruppen – ohne Lehrkräfte –
                unterschiedliche Aufgaben bewältigen. Dies geschieht in fünf
                Themenräumen: Schutz, Wohnen, Ernährung, Kultur und Arbeit. Durch
                Challenges in den jeweiligen Räumen und durch anregende
                Entscheidungsfragen setzen sich die Teilnehmenden damit auseinander, wie
                ein Zusammenleben auf Remote Island organisiert werden kann.
              </p>
              <p className="text-title">
                Im Inselrat diskutieren die Spielenden über ihre jeweiligen Ergebnisse
                und Positionen. Dabei treffen sie gemeinsam Entscheidungen zu den
                jeweiligen Themen und erstellen ihren eigenen Inselvertrag. In einer
                abschließenden Reflexionsphase werden die Erlebnisse und Erfahrungen aus
                dem Spiel mit den Lebenswelten der Teilnehmenden in Bezug gesetzt.
              </p>
              <p className="text-title">
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
            <div className="text-block"></div>
          )}

          {activeTab === "greetings" && (
            <div className="text-block">
              <p className="text-title">
                Gruppen, die bereits auf Remote Island waren, haben Grüße und Gedanken dagelassen. Hier eine kleine Auswahl:
              </p>
              <p className="text-title">
                "REMOTE ISLAND war eine sehr schöne und teambuildende Erfahrung, die zum Nachdenken anregt."
              </p>
              <p className="text-title">
                "Das moderne Monopoly – um nicht nur mit deiner Familie zu streiten. Demokratie in Aktion."
              </p>
              <p className="text-title">
                "Liebe Grüße – Habt viel Spaß und macht mal Musikvideos!"
              </p>
              <p className="text-title">
                "TEILHABE IST ZUKUNFT und macht Freude! MACHT MIT!"
              </p>
              <p className="text-title">
                "Unsere Entscheidungen haben Folgen!"
              </p>
              <p className="text-title">
                "Stimmt zusammen ab und achtet auf einander!"
              </p>
              <p className="text-title">
                "Demokratie ist schön – macht aber Arbeit."
              </p>
              <p className="text-title">
                "Immer einigen. Spaß haben. Teamarbeit ist wichtig."
              </p>
            </div>
          )}

          {activeTab === "booking" && (
            <div className="text-block">
              <p className="text-intro">
                Startscreen mit Karte und Räumen. Unterhalb davon befindet sich ein automatisch abgespielter Videoclip; oberhalb der Karte liegt ein automatischer Schieberegler zur App-Website.
              </p>

              <p className="text-title">Fotos</p>
              <p className="text-sub-block">
                4–5 Fotos von den Pressebildern.
              </p>

              <p className="text-title">Beschreibung des Angebots / About</p>
              <p className="text-sub-block">
                Nach einer globalen Apokalypse auf einer Insel gestrandet, müssen die Spielenden selbstständig in Kleingruppen – ohne Begleitung – unterschiedliche Aufgaben bewältigen. Dies geschieht in fünf Themenräumen: Schutz, Wohnen, Ernährung, Kultur und Arbeit. Durch Challenges in den jeweiligen Räumen und durch anregende Entscheidungsfragen setzen sich die Teilnehmenden damit auseinander, wie ein Zusammenleben auf Remote Island organisiert werden kann.
              </p>
              <p className="text-sub-block">
                Im Inselrat diskutieren die Spielenden über ihre jeweiligen Ergebnisse und Positionen. Dabei treffen sie gemeinsam Entscheidungen zu den jeweiligen Themen und erstellen ihren eigenen Inselvertrag. In einer abschließenden Reflexionsphase werden die Erlebnisse und Erfahrungen aus dem Spiel mit den Lebenswelten der Teilnehmenden in Bezug gesetzt.
              </p>
              <p className="text-sub-block">
                Wie sehen sie ihre jeweilige Rolle als Einzelne und wie beschreiben sie die Entscheidungsprozesse in den Gruppen? Was lässt sich aus dem Spiel auf unsere gesellschaftlichen Verhältnisse übertragen, wie lassen sich diese dadurch auch hinterfragen? Und wo sehen die Teilnehmenden selbst Möglichkeiten zur demokratischen Teilhabe und Partizipation in ihrem Alltag?
              </p>

              <p className="text-title">Buchen</p>
              <p className="text-title">
                <strong>Für wen:</strong> Remote Island eignet sich sowohl für Jugendgruppen (ab 14 Jahren / 9. Klasse) als auch für Erwachsenengruppen.
              </p>
              <p className="text-title">
                <strong>Gruppengröße:</strong> 15–35 Personen<br />
                <strong>Dauer:</strong> 3 Stunden
              </p>

              <p className="text-title">Kosten:</p>
              <p className="text-title">
                Schulklassen: 90 €<br />
                Studierende &amp; Jugendgruppen: 150 €<br />
                Erwachsene: 225 €<br />
                Am Wochenende und feiertags fallen zusätzliche Gebühren an.<br />
                Für Kölner Schulen sind sämtliche pädagogischen Angebote des NS-DOK kostenfrei.
              </p>

              <p className="text-title">
                <strong>Für Schulklassen buchen Sie hier:</strong><br />
                <a href="https://buchung.museenkoeln.de/angebotbuchen.aspx?angebot=1412" target="_blank" rel="noopener noreferrer">
                  https://buchung.museenkoeln.de/angebotbuchen.aspx?angebot=1412
                </a>
              </p>
              <p className="text-title">
                <strong>Für Erwachsenengruppen und außerschulische Jugendgruppen buchen Sie hier:</strong><br />
                <a href="https://buchung.museenkoeln.de/angebotbuchen.aspx?inst=14&amp;angebot=1411" target="_blank" rel="noopener noreferrer">
                  https://buchung.museenkoeln.de/angebotbuchen.aspx?inst=14&amp;angebot=1411
                </a>
              </p>

              <p className="text-title">Allgemeine Hinweise</p>
              <p className="text-title">
                Das Angebot findet in deutscher Sprache statt und wird durch eine teamende Person angeleitet.
              </p>
              <p className="text-title">
                Remote Island kann von Personen mit einem Rollstuhl mit einer maximalen Breite von 75 cm genutzt werden.
              </p>
              <p className="text-title">
                An einer Stelle des Inselspiels kommt es zu stroboskopähnlichen Effekten. Epilepsiegefährdete Personen sollten diesen Bereich meiden. Bitte teilen Sie uns dies bei der Buchung mit.
              </p>
              <p className="text-title">
                Bitte beachten Sie, dass im Rahmen dieser Veranstaltung weder die Gedenkstätte noch die Dauerausstellung besucht werden und dass der Aufenthalt auf Remote Island über die Veranstaltung hinaus für Gruppen leider nicht möglich ist.
              </p>
              <p className="text-title">
                Auch bei Schulklassen und Jugendgruppen gehen die Teilnehmenden allein durch die Installation. Lehrkräfte und Begleitpersonen nehmen in einem Aufenthaltsraum Platz und müssen für die gesamte Spieldauer ansprechbar sein.
              </p>

              <p className="text-title">Aktuelles</p>
              <p className="text-title">
                Vor allem aktuelle Termine, ggfs. aber auch sonstige Hinweise. Zum Start bitte folgender Text:
              </p>
              <p className="text-title">
                <strong>Öffentliche Spieltermine im Rahmen des Köln-Tags:</strong><br />
                Do, 01. Okt. 2026, 18 Uhr – Anmeldung<br />
                Do, 05. Nov. 2026, 18 Uhr – Anmeldung<br />
                Do, 03. Dez. 2026, 18 Uhr – Anmeldung<br />
                Do, 07. Jan. 2027, 18 Uhr – Anmeldung
              </p>
              <p className="text-title">
                Die Teilnahme ist im Rahmen des Köln-Tages kostenfrei und findet statt, sofern die Mindestteilnehmendenzahl erreicht ist.
              </p>
              <p className="text-title">
                <strong>Museumsnacht-Special:</strong><br />
                Sa, 07. Nov. 2026
              </p>
            </div>
          )}
        </div>
      </div>

      {/* 2. Fixed modal rendering using isVideoOpen state */}
      {isVideoOpen && (
        <VideoModal onClose={() => setIsVideoOpen(false)} videoKey="ri_video" />
      )}
    </div>
  );
};
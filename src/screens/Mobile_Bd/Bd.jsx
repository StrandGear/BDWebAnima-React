import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Unity, useUnityContext } from "react-unity-webgl";
import "../../services/firebase"; 
import "./style.css";
import { fetchVideoUrls } from "../../services/videoService";

// Editable Text Variables
export const legalText = `Anbieterkennzeichnung nach § 5 Digitale-Dienste-Gesetz (DDG) in Verbindung mit § 18 Absatz 2 Medienstaatsvertrag

Stadt Köln
Der Oberbürgermeister
Torsten Burmester
Rathaus – Spanischer Bau
50667 Köln
Telefon +49 (0) 221-0
stadtverwaltung@stadt-koeln.de
Umsatzsteuer-ID: 122790626

Redaktionelle Verantwortung:
Dr. Henning Borggräfe, Direktor des NS-DOK
Die Beiträge auf den Seiten www.building-democracy.de und www.remote-island.de  werden erstellt vom NS-Dokumentationszentrum der Stadt Köln
Postanschrift
NS-Dokumentationszentrum der Stadt Köln
Appellhofplatz 23-25
50667 Köln
Telefon +49  (0) 221 221-26332
Telefax +49  (0) 221 221-25512
Inhaltlich verantwortlich für diese Webseite i.S.d. § 55 II RStV ist der Direktor der Einrichtung.

Sollten Sie Fragen zu Ihren personenbezogenen Daten haben, können Sie sich an den Datenschutzbeauftragten der Stadt Köln oder die Datenschutzbeauftragte des Landes NRW (LDI) wenden.
Datenschutzbeauftragter der Stadt Köln
Postfach 10 35 64
50475 Köln
Telefon ++49  (0) 221 221-22457
datenschutzbeauftragter@stadt-koeln.de
Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen
Postfach 20 04 44
40102 Düsseldorf
Telefon ++49  (0) 211/38424-0
poststelle@ldi.nrw.de

Konzept, Gestaltung, Programmierung der Internetseiten: 
Max Gede, Anastasiia Ermolaeva, Juan-Pablo Ortiz Reyes
Haftungsausschluss:
Die Stadt Köln hat stets die Richtigkeit, Vollständigkeit und Aktualität der in dieser Internetpräsenz bereitgestellten Informationen zum Ziel. Dennoch können Fehler und Unklarheiten nicht ausgeschlossen werden.
Die Stadt Köln übernimmt daher weder Gewähr für die Aktualität, Richtigkeit, Vollständigkeit, Qualität und jederzeitige Verfügbarkeit der bereitgestellten Informationen noch für das Ausbleiben anderweitiger technischer Störungen.
Für Schäden, die durch die Nutzung der zur Verfügung gestellten Informationen oder Daten oder durch die Nutzung fehlerhafter und/oder unvollständiger Informationen oder Daten verursacht werden, haftet die Stadt Köln nicht, sofern ihr nicht vorsätzliches oder grob fahrlässiges Verschulden zur Last fällt. Dieser Ausschluss gilt nicht für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit.
Hinweise zu Verweisen und Links: 
Diese Webseite enthält als Information auch entsprechend gekennzeichnete Links oder Verweise auf Webseiten Dritter. Die Verantwortlichkeit für diese fremden Inhalte liegt alleine bei dem Anbieter, der die Inhalte bereithält. Die Stadt Köln vermittelt lediglich den Zugang zur Nutzung dieser Inhalte.
Soweit in der Internetpräsenz der Stadt Köln ein Zugang zu fremden Inhalten, etwa in Form von Links, vermittelt wird, die von anderen Anbietern bereit gestellt werden, wird darauf hingewiesen, dass die Stadt Köln auf diese fremden Inhalte keinen Einfluss hat und sich diese Inhalte auch nicht zu eigen macht. Die Stadt Köln hat derzeit keine positiven Kenntnisse über rechtswidrige oder anstößige Inhalte auf den über Link verknüpften Seiten fremder Anbieter. Sollten dennoch auf den verknüpften Seiten fremder Anbieter rechtswidrige oder anstößige Inhalte enthalten sein, so distanziert sich die Stadt Köln von diesen Inhalten ausdrücklich.
Für illegale, fehlerhafte oder unvollständige Inhalte und insbesondere Schäden, die aus der Nutzung oder Nichtnutzung von Informationen Dritter entstehen, haftet allein der Anbieter der Seite, auf welche verwiesen wurde, nicht derjenige, der über Links auf die jeweilige Veröffentlichung lediglich verweist.
Recht am eigenen Bild bei Personenabbildungen/Haftungsausschluss
Nach § 22 Absatz 1 des Kunsturhebergesetzes (KUG) "dürfen Bildnisse nur mit Einwilligung der abgebildeten Person verbreitet oder öffentlich zur Schau gestellt werden". Die auf den Seiten dieser Website abgebildeten Personen haben ihr Einverständnis gegeben.
Sofern trotz sorgfältiger inhaltlicher Kontrolle ein Bild veröffentlicht wurde, das gegen diesen Grundsatz verstößt oder wenn Sie die Entfernung des veröffentlichten Fotos wünschen (Widerruf der Einwilligung), können Sie uns dies schriftlich mitteilen. Es genügt, wenn Sie uns eine E-Mail oder ein Fax schicken. Bitte beschreiben Sie das Bild genau und geben an, auf welcher Seite es sich befindet.
Wenn Sie widerrufen, wird die Stadt Köln das Bild oder die Bilder unverzüglich löschen und zukünftig nicht mehr verwenden.
Hinweise zum Urheberrecht
Alle Seiten des Internetauftrittes der Museen, der Kunst- und Museumsbibliothek und des Museumsdienstes der Stadt Köln unterliegen dem Urheberrecht (Copyright). Dies gilt insbesondere für alle auf den Webseiten veröffentlichten Inhalte wie Texte, Bilder, Grafiken, Ton-, Video- oder Animationsdateien sowie Layout einschließlich der Gesamtanordnung auf den Webseiten.
Eine Vervielfältigung oder Verwendung solcher Texte, auch nur Teilen davon, in anderen elektronischen oder gedruckten Publikationen und deren Veröffentlichung - auch im Internet - ist nur nach vorheriger schriftlicher Genehmigung der Stadt Köln gestattet.
Die kommerzielle Nutzung jeglicher Bestandteile dieses Internetauftrittes ist nicht gestattet!
Die Genehmigung zur Publikation der Webseiten für eine private, nicht kommerzielle Nutzung kann im Einzelfall die Online-Redaktion erteilen.
Die unerlaubte Reproduktion oder Weitergabe einzelner Inhalte oder kompletter Seiten wird straf- und zivilrechtlich verfolgt.
Datenschutz
1) Erhebung von personenbezogenen Daten
Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften (EU-Datenschutzgrundverordnung, Telemediengesetz) sowie dieser Datenschutzerklärung. Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, geschieht dies dann, wenn es für die Durchführung und Inanspruchnahme unserer Dienste erforderlich ist oder wenn Sie uns diese Daten freiwillig übermitteln. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
 
2) Cookies
Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert. Die meisten der von uns verwendeten Cookies sind so genannte „Session-Cookies“. Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen. Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein. So können Sie beispielsweise ohne Cookies keine persönliche Merkliste zusammenstellen.
 
3) Server-Log-Files
Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log Files, die Ihr Browser automatisch an uns übermittelt. Dies sind:
- Browsertyp und Browserversion
- verwendetes Betriebssystem
- Referrer URL
- Hostname des zugreifenden Rechners
- Uhrzeit der Serveranfrage
Diese Daten können nicht bestimmten Personen zugeordnet werden. Sie werden lediglich für statistische Zwecke und zur Verbesserung des Angebotes ausgewertet. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Wir behalten uns vor, diese Daten nachträglich zu prüfen, wenn uns konkrete Anhaltspunkte für eine rechtswidrige Nutzung bekannt werden.
 
4) Vertragsdaten (Buchungsanfragen, Bestellung von Leistungen)
Sofern zwischen Ihnen und uns ein Vertrag zustande kommt (z.B. über die Bestellung von Führungen oder die Anmeldung zu Veranstaltungen), erheben und verwenden wir die im Anfrageformular erforderlichen personenbezogene Daten von Ihnen nur insoweit, als dies für die Vertragsbegründung, -durchführung und
-änderung sowie für Anschlussfragen notwendig ist (Vertragsdaten). Zu diesen Vertragsdaten zählen Name, Adresse, Kontaktdaten (Telefonnummer/E-Mail-Adresse), Alter, Art und Umfang der bisherigen Kontakte zwischen Ihnen und uns sowie weitere Daten, die Sie für die Inanspruchnahme unserer Leistungen angeben.
Ihre in diesem Zusammenhang zu verarbeitenden personenbezogenen Daten sind zweckgebunden, das heißt, sie werden nur für den Zweck verwendet, für den sie erhoben worden sind. Die personenbezogenen Daten werden nach Abrechnung des bestellten Produkts anonymisiert und lediglich für Archiv- bzw. Statistikzwecke verwendet. Sie werden zur Mitte des auf den Zeitpunkt der Übermittlung folgenden Jahres gelöscht. Unberührt davon gelten die gesetzlichen Aufbewahrungsfristen bei Rechnungsstellung etc.
 
5) SSL-Verschlüsselung
Diese Seite nutzt aus Gründen der Sicherheit und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel der Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
 

 

 
6) IP-Anonymisierung
Wir haben auf dieser Webseite die Funktion IP-Anonymisierung aktiviert. Die von Ihrem Browser übermittelte IP-Adresse wird verkürzt und kann nicht mit anderen Daten zusammengeführt werden.
7) Recht auf Auskunft, Löschung, Sperrung
Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
8) Widerspruch Werbe-Mails
Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
`;

export const mitwirkendeText = `
Konzept, Gestaltung, Programmierung der Internetseiten: 
Max Gede, Anastasiia Ermolaeva, Juan-Pablo Ortiz Reyes
`;

export const VideoModal = ({ setActiveView, videoKey = "bd_video" }) => {
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
    <div className="video-modal-backdrop" onClick={() => setActiveView("game")}>
      <div className="video-modal-container" onClick={(e) => e.stopPropagation()}>
        <button 
          className="video-modal-close" 
          onClick={() => setActiveView("game")}
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

export const Bd = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Track initial active view passed from navigation state (e.g. from /bd-wrapper or /bd-2)
  const [activeView, setActiveView] = useState(
    location.state?.activeView || "game"
  );

  // Sync state if navigation state changes while mounted
  useEffect(() => {
    if (location.state?.activeView) {
      setActiveView(location.state.activeView);
    }
  }, [location.state]);

  const [isFirebaseReady, setIsFirebaseReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsFirebaseReady(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const { unityProvider } = useUnityContext({
    loaderUrl: "/unity/Build/9edd899bc6b6e0bbc4f46ff33ca0bba6.loader.js",
    dataUrl: "/unity/Build/421fa42f2c5f8d04f14c89c3627f0336.data",
    frameworkUrl: "/unity/Build/005d4f487ee79e378e58dbac699c4593.framework.js",
    codeUrl: "/unity/Build/5f016967b961d2540b171381efa4120a.wasm",
    streamingAssetsUrl: "/unity/StreamingAssets"
  });

  // Handler to toggle overlay view or return to game
  const handleToggleView = (targetView) => {
    const nextView = activeView === targetView ? "game" : targetView;
    setActiveView(nextView);

    // Keep history state synchronized
    navigate(location.pathname, {
      replace: true,
      state: { ...location.state, activeView: nextView, from: location.state?.from || location.pathname }
    });
  };

  return (
    <div className="BD">
      {/* Background Waves Grid */}
      <div className="wiederholungsraster">
        <div className="auto-flex">
          <div className="div" />
          <div className="div" />
          <div className="div" />
        </div>
      </div>

      {/* Main Game Container */}
      <div className="unity-mobile-container">
        {/* Unity Build stays mounted in background */}
        <div className={`unity-wrapper ${activeView !== "game" ? "hidden-behind" : ""}`}>
          {isFirebaseReady ? (
            <Unity 
              unityProvider={unityProvider} 
              style={{ width: "100%", height: "100%" }} 
            />
          ) : (
            <div className="loading-text" style={{ color: "#fff" }}>Loading Game...</div>
          )}
        </div>

        {/* Purple Overlay Container rendered on top when activeView !== "game" */}
        {activeView !== "game" && (
          <div className="info-overlay-card">
            <button 
              className="overlay-close-btn" 
              onClick={() => handleToggleView(activeView)}
              aria-label="Close"
            >
              ✕
            </button>
            <div className="info-overlay-scroll">
              <pre className="info-text-content">
                {activeView === "impressum" && legalText}
                {activeView === "mitwirkende" && mitwirkendeText}
              </pre>
            </div>
          </div>
        )}
      </div>

      {/* Header & Footer Bars */}
      <div className="rechteck" />
      <div className="rechteck-2" />
      
      {/* Top Toggle Header */}
      <Link className="gruppe-2" to="/ri">
        <div className="text-wrapper">BUILDING DEMOCRACY</div>
        <div className="schalter">
          <div className="uncheck" />
        </div>
        <div className="text-wrapper-2">REMOTE ISLAND</div>
      </Link>
      
      <div className="NS-dok-logo" />
      
      {/* Footer Navigation Buttons acting as overlay toggles */}
      <div className="footer-links">
        <button 
          className={`footer-link-btn ${activeView === "mitwirkende" ? "active" : ""}`} 
          onClick={() => handleToggleView("mitwirkende")}
        >
          {activeView === "mitwirkende" ? "Home" : "Mitwirkende"}
        </button>
        <button 
          className={`footer-link-btn ${activeView === "impressum" ? "active" : ""}`} 
          onClick={() => handleToggleView("impressum")}
        >
          {activeView === "impressum" ? "Home" : "Impressum"}
        </button>
        <button 
          className={`footer-link-btn ${activeView === "video" ? "active" : ""}`} 
          onClick={() => handleToggleView("video")}
        >
          {activeView === "video" ? "Home" : "Video"}
        </button>
      </div>
      
      {/* Side Action Controls */}
      <Link className="gruppe-3" to="/bd-1">
        <img className="polygon" alt="Previous" src="/img/polygon-1-4.png" />
        <div className="ergebnis-beitr-ge">
          Ergebnis-
          <br />
          beiträge
        </div>
      </Link>
      
      <Link className="gruppe-4" to="/bd-2">
        <div className="spielaleitung">
          Spielanleitung
          <br />
          Download
        </div>
        <img className="polygon" alt="Next" src="/img/polygon-3-3.png" />
      </Link>

        {/* Dynamic Video Popup */}
        {activeView === "video" && (
          <VideoModal setActiveView={setActiveView} />
        )}
    </div>
  );
};
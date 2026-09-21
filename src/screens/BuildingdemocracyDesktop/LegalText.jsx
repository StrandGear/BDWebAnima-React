import React from "react";

/**
 * Shared legal / credits content for Building Democracy.
 * Used by both the desktop screen and the mobile screen — the only
 * difference between the two is CSS (logos sit in a row on desktop and
 * stack vertically on mobile).
 *
 * ---------------------------------------------------------------------------
 * LOGO PATHS — edit these to match the actual filenames in /public/img/
 * ---------------------------------------------------------------------------
 */
export const LOGOS = {
  nsdok: "/img/logo-ns-dok.png",
  cgl: "/img/logo-cgl-th-koeln.png",
  lingen: "/img/logo-lingen-stiftung.png",
};

/**
 * Node types:
 *   "p"      – normal body paragraph
 *   "h"      – bold heading
 *   "block"  – address / contact block, hard line breaks preserved
 *   "ul"     – dash list
 *   "credit" – bold role + one name per line (Mitwirkende)
 *   "note"   – small centred closing note
 *   "logos"  – logo row/column, optional label
 *
 * A node carries either `text` (plain) or `parts` (strings + { text, href }).
 */

export const legalContent = [
  {
    type: "p",
    text: "Anbieterkennzeichnung nach § 5 Digitale-Dienste-Gesetz (DDG) in Verbindung mit § 18 Absatz 2 Medienstaatsvertrag",
  },
  {
    type: "block",
    text: `Stadt Köln
Der Oberbürgermeister
Torsten Burmester
Rathaus – Spanischer Bau
50667 Köln
Telefon +49 (0) 221-0
stadtverwaltung@stadt-koeln.de
Umsatzsteuer-ID: 122790626`,
  },

  { type: "h", text: "Redaktionelle Verantwortung:" },
  { type: "p", text: "Dr. Henning Borggräfe, Direktor des NS-DOK" },
  {
    type: "p",
    parts: [
      "Die Beiträge auf den Seiten ",
      { text: "www.building-democracy.de", href: "http://www.building-democracy.de" },
      " und ",
      { text: "www.remote-island.de", href: "http://www.remote-island.de" },
      " werden erstellt vom NS-Dokumentationszentrum der Stadt Köln",
    ],
  },
  {
    type: "block",
    text: `Postanschrift
NS-Dokumentationszentrum der Stadt Köln
Appellhofplatz 23-25
50667 Köln
Telefon +49 (0) 221 221-26332
Telefax +49 (0) 221 221-25512`,
  },
  {
    type: "p",
    text: "Inhaltlich verantwortlich für diese Webseite i.S.d. § 55 II RStV ist der Direktor der Einrichtung.",
  },
  {
    type: "p",
    text: "Sollten Sie Fragen zu Ihren personenbezogenen Daten haben, können Sie sich an den Datenschutzbeauftragten der Stadt Köln oder die Datenschutzbeauftragte des Landes NRW (LDI) wenden.",
  },
  {
    type: "block",
    text: `Datenschutzbeauftragter der Stadt Köln
Postfach 10 35 64
50475 Köln
Telefon +49 (0) 221 221-22457
datenschutzbeauftragter@stadt-koeln.de`,
  },
  {
    type: "block",
    text: `Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen
Postfach 20 04 44
40102 Düsseldorf
Telefon +49 (0) 211/38424-0
poststelle@ldi.nrw.de`,
  },

  { type: "h", text: "Konzept, Gestaltung, Programmierung der Internetseiten:" },
  { type: "p", text: "Max Gede, Anastasiia Ermolaeva, Juan-Pablo Ortiz Reyes" },

  { type: "h", text: "Haftungsausschluss:" },
  {
    type: "p",
    text: "Die Stadt Köln hat stets die Richtigkeit, Vollständigkeit und Aktualität der in dieser Internetpräsenz bereitgestellten Informationen zum Ziel. Dennoch können Fehler und Unklarheiten nicht ausgeschlossen werden.",
  },
  {
    type: "p",
    text: "Die Stadt Köln übernimmt daher weder Gewähr für die Aktualität, Richtigkeit, Vollständigkeit, Qualität und jederzeitige Verfügbarkeit der bereitgestellten Informationen noch für das Ausbleiben anderweitiger technischer Störungen.",
  },
  {
    type: "p",
    text: "Für Schäden, die durch die Nutzung der zur Verfügung gestellten Informationen oder Daten oder durch die Nutzung fehlerhafter und/oder unvollständiger Informationen oder Daten verursacht werden, haftet die Stadt Köln nicht, sofern ihr nicht vorsätzliches oder grob fahrlässiges Verschulden zur Last fällt. Dieser Ausschluss gilt nicht für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit.",
  },

  { type: "h", text: "Hinweise zu Verweisen und Links:" },
  {
    type: "p",
    text: "Diese Webseite enthält als Information auch entsprechend gekennzeichnete Links oder Verweise auf Webseiten Dritter. Die Verantwortlichkeit für diese fremden Inhalte liegt alleine bei dem Anbieter, der die Inhalte bereithält. Die Stadt Köln vermittelt lediglich den Zugang zur Nutzung dieser Inhalte.",
  },
  {
    type: "p",
    text: "Soweit in der Internetpräsenz der Stadt Köln ein Zugang zu fremden Inhalten, etwa in Form von Links, vermittelt wird, die von anderen Anbietern bereit gestellt werden, wird darauf hingewiesen, dass die Stadt Köln auf diese fremden Inhalte keinen Einfluss hat und sich diese Inhalte auch nicht zu eigen macht. Die Stadt Köln hat derzeit keine positiven Kenntnisse über rechtswidrige oder anstößige Inhalte auf den über Link verknüpften Seiten fremder Anbieter. Sollten dennoch auf den verknüpften Seiten fremder Anbieter rechtswidrige oder anstößige Inhalte enthalten sein, so distanziert sich die Stadt Köln von diesen Inhalten ausdrücklich.",
  },
  {
    type: "p",
    text: "Für illegale, fehlerhafte oder unvollständige Inhalte und insbesondere Schäden, die aus der Nutzung oder Nichtnutzung von Informationen Dritter entstehen, haftet allein der Anbieter der Seite, auf welche verwiesen wurde, nicht derjenige, der über Links auf die jeweilige Veröffentlichung lediglich verweist.",
  },

  { type: "h", text: "Recht am eigenen Bild bei Personenabbildungen/Haftungsausschluss" },
  {
    type: "p",
    text: "Nach § 22 Absatz 1 des Kunsturhebergesetzes (KUG) „dürfen Bildnisse nur mit Einwilligung der abgebildeten Person verbreitet oder öffentlich zur Schau gestellt werden“. Die auf den Seiten dieser Website abgebildeten Personen haben ihr Einverständnis gegeben.",
  },
  {
    type: "p",
    text: "Sofern trotz sorgfältiger inhaltlicher Kontrolle ein Bild veröffentlicht wurde, das gegen diesen Grundsatz verstößt oder wenn Sie die Entfernung des veröffentlichten Fotos wünschen (Widerruf der Einwilligung), können Sie uns dies schriftlich mitteilen. Es genügt, wenn Sie uns eine E-Mail oder ein Fax schicken. Bitte beschreiben Sie das Bild genau und geben an, auf welcher Seite es sich befindet.",
  },
  {
    type: "p",
    text: "Wenn Sie widerrufen, wird die Stadt Köln das Bild oder die Bilder unverzüglich löschen und zukünftig nicht mehr verwenden.",
  },

  { type: "h", text: "Hinweise zum Urheberrecht" },
  {
    type: "p",
    text: "Alle Seiten des Internetauftrittes der Museen, der Kunst- und Museumsbibliothek und des Museumsdienstes der Stadt Köln unterliegen dem Urheberrecht (Copyright). Dies gilt insbesondere für alle auf den Webseiten veröffentlichten Inhalte wie Texte, Bilder, Grafiken, Ton-, Video- oder Animationsdateien sowie Layout einschließlich der Gesamtanordnung auf den Webseiten.",
  },
  {
    type: "p",
    text: "Eine Vervielfältigung oder Verwendung solcher Texte, auch nur Teilen davon, in anderen elektronischen oder gedruckten Publikationen und deren Veröffentlichung – auch im Internet – ist nur nach vorheriger schriftlicher Genehmigung der Stadt Köln gestattet.",
  },
  {
    type: "p",
    text: "Die kommerzielle Nutzung jeglicher Bestandteile dieses Internetauftrittes ist nicht gestattet!",
  },
  {
    type: "p",
    text: "Die Genehmigung zur Publikation der Webseiten für eine private, nicht kommerzielle Nutzung kann im Einzelfall die Online-Redaktion erteilen.",
  },
  {
    type: "p",
    text: "Die unerlaubte Reproduktion oder Weitergabe einzelner Inhalte oder kompletter Seiten wird straf- und zivilrechtlich verfolgt.",
  },

  { type: "h", text: "Datenschutz" },

  { type: "h", text: "1) Erhebung von personenbezogenen Daten" },
  {
    type: "p",
    text: "Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften (EU-Datenschutzgrundverordnung, Telemediengesetz) sowie dieser Datenschutzerklärung. Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, geschieht dies dann, wenn es für die Durchführung und Inanspruchnahme unserer Dienste erforderlich ist oder wenn Sie uns diese Daten freiwillig übermitteln. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.",
  },

  { type: "h", text: "2) Cookies" },
  {
    type: "p",
    text: "Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert. Die meisten der von uns verwendeten Cookies sind so genannte „Session-Cookies“. Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen. Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein. So können Sie beispielsweise ohne Cookies keine persönliche Merkliste zusammenstellen.",
  },

  { type: "h", text: "3) Server-Log-Files" },
  {
    type: "p",
    text: "Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log Files, die Ihr Browser automatisch an uns übermittelt. Dies sind:",
  },
  {
    type: "ul",
    items: [
      "Browsertyp und Browserversion",
      "verwendetes Betriebssystem",
      "Referrer URL",
      "Hostname des zugreifenden Rechners",
      "Uhrzeit der Serveranfrage",
    ],
  },
  {
    type: "p",
    text: "Diese Daten können nicht bestimmten Personen zugeordnet werden. Sie werden lediglich für statistische Zwecke und zur Verbesserung des Angebotes ausgewertet. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Wir behalten uns vor, diese Daten nachträglich zu prüfen, wenn uns konkrete Anhaltspunkte für eine rechtswidrige Nutzung bekannt werden.",
  },

  { type: "h", text: "4) Vertragsdaten (Buchungsanfragen, Bestellung von Leistungen)" },
  {
    type: "p",
    text: "Sofern zwischen Ihnen und uns ein Vertrag zustande kommt (z.B. über die Bestellung von Führungen oder die Anmeldung zu Veranstaltungen), erheben und verwenden wir die im Anfrageformular erforderlichen personenbezogene Daten von Ihnen nur insoweit, als dies für die Vertragsbegründung, -durchführung und -änderung sowie für Anschlussfragen notwendig ist (Vertragsdaten). Zu diesen Vertragsdaten zählen Name, Adresse, Kontaktdaten (Telefonnummer/E-Mail-Adresse), Alter, Art und Umfang der bisherigen Kontakte zwischen Ihnen und uns sowie weitere Daten, die Sie für die Inanspruchnahme unserer Leistungen angeben.",
  },
  {
    type: "p",
    text: "Ihre in diesem Zusammenhang zu verarbeitenden personenbezogenen Daten sind zweckgebunden, das heißt, sie werden nur für den Zweck verwendet, für den sie erhoben worden sind. Die personenbezogenen Daten werden nach Abrechnung des bestellten Produkts anonymisiert und lediglich für Archiv- bzw. Statistikzwecke verwendet. Sie werden zur Mitte des auf den Zeitpunkt der Übermittlung folgenden Jahres gelöscht. Unberührt davon gelten die gesetzlichen Aufbewahrungsfristen bei Rechnungsstellung etc.",
  },

  { type: "h", text: "5) SSL-Verschlüsselung" },
  {
    type: "p",
    text: "Diese Seite nutzt aus Gründen der Sicherheit und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel der Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.",
  },

  { type: "h", text: "6) IP-Anonymisierung" },
  {
    type: "p",
    text: "Wir haben auf dieser Webseite die Funktion IP-Anonymisierung aktiviert. Die von Ihrem Browser übermittelte IP-Adresse wird verkürzt und kann nicht mit anderen Daten zusammengeführt werden.",
  },

  { type: "h", text: "7) Recht auf Auskunft, Löschung, Sperrung" },
  {
    type: "p",
    text: "Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.",
  },

  { type: "h", text: "8) Widerspruch Werbe-Mails" },
  {
    type: "p",
    text: "Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.",
  },
];

/** Mitwirkende — mirrors Mitwirkende_Building_Democracy_PB.docx */
export const mitwirkendeContent = [
  {
    type: "credit",
    role: "Koordination NS-DOK und Spielidee",
    names: ["Bastian Schlang", "Ilja Gold"],
  },
  {
    type: "credit",
    role: "Koordination TH Köln / Cologne Game Lab",
    names: ["Dr. Philipp Bojahr", "Dr. Katharina Tillmanns"],
  },
  {
    type: "credit",
    role: "Spielidee, Game Design und Teamkoordination",
    names: ["Max Gede", "Richard Glumm"],
  },
  {
    type: "credit",
    role: "Programmierung",
    names: ["Anastasiia Ermolaeva", "Juan Pablo Ortiz"],
  },
  {
    type: "note",
    text: "Ein Kooperationsprojekt des NS-Dokumentationszentrums der Stadt Köln und des Cologne Game Lab der Technischen Hochschule Köln",
  },
  {
    type: "logos",
    items: [
      { src: LOGOS.nsdok, alt: "NS-Dokumentationszentrum der Stadt Köln" },
      { src: LOGOS.cgl, alt: "Cologne Game Lab / TH Köln" },
    ],
  },
  {
    type: "logos",
    label: "Gefördert von",
    items: [{ src: LOGOS.lingen, alt: "Lingen-Stiftung" }],
  },
];

// Renders the inline runs of a paragraph: plain strings and underlined links.
const renderParts = (parts) =>
  parts.map((part, i) =>
    typeof part === "string" ? (
      <React.Fragment key={i}>{part}</React.Fragment>
    ) : (
      <a
        key={i}
        className="legal-link"
        href={part.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {part.text}
      </a>
    )
  );

/**
 * Drop-in renderer. Emits block elements, so it must NOT be placed
 * inside a <p> or a <pre>.
 */
export const LegalText = ({ content }) => (
  <div className="legal-text">
    {content.map((node, i) => {
      const body = node.parts ? renderParts(node.parts) : node.text;

      switch (node.type) {
        case "h":
          return (
            <h3 className="legal-heading" key={i}>
              {body}
            </h3>
          );

        case "block":
          return (
            <p className="legal-block" key={i}>
              {body}
            </p>
          );

        case "ul":
          return (
            <ul className="legal-list" key={i}>
              {node.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          );

        case "credit":
          return (
            <div className="legal-credit" key={i}>
              <h3 className="legal-credit-role">{node.role}</h3>
              {node.names.map((name, j) => (
                <p className="legal-credit-name" key={j}>
                  {name}
                </p>
              ))}
            </div>
          );

        case "note":
          return (
            <p className="legal-note" key={i}>
              {body}
            </p>
          );

        case "logos":
          return (
            <div className="legal-logo-group" key={i}>
              {node.label && <p className="legal-logo-label">{node.label}</p>}
              <div className="legal-logos">
                {node.items.map((logo, j) => (
                  <img
                    className="legal-logo"
                    key={j}
                    src={logo.src}
                    alt={logo.alt}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          );

        default:
          return (
            <p className="legal-paragraph" key={i}>
              {body}
            </p>
          );
      }
    })}
  </div>
);

export default LegalText;

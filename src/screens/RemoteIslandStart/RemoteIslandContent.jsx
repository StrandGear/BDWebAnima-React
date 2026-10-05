import React from "react";

export const photosContent = [
  { type: "p", text: "4-5 Fotos von den Pressebildern" }
];

export const aboutContent = [
  {
    type: "p",
    text: "Nach einer globalen Apokalypse auf einer Insel gestrandet, müssen die Spielenden selbstständig in Kleingruppen – ohne Begleitung – unterschiedliche Aufgaben bewältigen. Dies geschieht in fünf Themenräumen: Schutz, Wohnen, Ernährung, Kultur und Arbeit. Durch Challenges in den jeweiligen Räumen und durch anregende Entscheidungsfragen setzen sich die Teilnehmenden damit auseinander, wie ein Zusammenleben auf Remote Island organisiert werden kann.",
  },
  {
    type: "p",
    text: "Im Inselrat diskutieren die Spielenden über ihre jeweiligen Ergebnisse und Positionen. Dabei treffen sie gemeinsam Entscheidungen zu den jeweiligen Themen und erstellen ihren eigenen Inselvertrag. In einer abschließenden Reflexionsphase werden die Erlebnisse und Erfahrungen aus dem Spiel mit den Lebenswelten der Teilnehmenden in Bezug gesetzt.",
  },
  {
    type: "p",
    text: "Wie sehen sie ihre jeweilige Rolle als Einzelne und wie beschreiben sie die Entscheidungsprozesse in den Gruppen? Was lässt sich aus dem Spiel auf unsere gesellschaftlichen Verhältnisse übertragen, wie lassen sich diese dadurch auch hinterfragen? Und wo sehen die Teilnehmenden selbst Möglichkeiten zur demokratischen Teilhabe und Partizipation in ihrem Alltag?",
  },
];

export const buchenContent = [
  { type: "h", text: "Für wen:" },
  {
    type: "p",
    text: "Remote Island eignet sich sowohl für Jugendgruppen (ab 14 Jahren/9. Klasse) sowie für Erwachsenengruppen",
  },

  { type: "p", text: "Gruppengröße: 15-35 Personen\nDauer: 3 Stunden" },

  { type: "h", text: "Kosten:" },
  { type: "p", text: "Schulklassen: 90 €\nStudierende & Jugendgruppen: 150 €\nErwachsene: 225 €" },

  { type: "p", text: "Am Wochenende und feiertags fallen zusätzliche Gebühren an.\nFür Kölner Schulen sind sämtliche pädagogischen Angebote des NS-DOK kostenfrei." },
  
  {
    type: "h",
    parts: [
      "Für Schulklassen ",
      { text: "hier buchen", href: "https://buchung.museenkoeln.de/angebotbuchen.aspx?angebot=1412" },
    ],
  },
  {
    type: "h",
    parts: [
      "Für Erwachsenengruppen und außerschulische Jugendgruppen ",
      { text: "hier buchen", href: "https://buchung.museenkoeln.de/angebotbuchen.aspx?inst=14&angebot=1411" },
    ],
  },
  { type: "h", text: "Allgemeine Hinweise:" },
  {
    type: "ul",
    items: [
      "Das Angebot findet in deutscher Sprache statt und wird durch eine teamende Person angeleitet.",
      "Remote Island kann von Personen mit einem Rollstuhl mit einer maximalen Breite von 75cm genutzt werden.",
      "An einer Stelle des Inselspiels kommt es zu stroboskopähnlichen Effekten. Epilepsiegefährdete Personen sollten diesen Bereich meiden. Bitte teilen Sie uns dies bei der Buchung mit.",
      "Bitte beachten Sie, dass im Rahmen dieser Veranstaltung weder die Gedenkstätte noch die Dauerausstellung besucht werden und dass der Aufenthalt auf Remote Island über die Veranstaltung hinaus für Gruppen leider nicht möglich ist.",
      "Auch bei Schulklassen und Jugendgruppen gehen die Teilnehmenden allein durch die Installation. Lehrkräfte und Begleitpersonen nehmen in einem Aufenthaltsraum Platz und müssen für die gesamte Spieldauer ansprechbar sein."
    ]
  }
];

export const gruesseContent = [
  { type: "p", text: "Gruppen, die bereits auf Remote Island waren, haben Grüße und Gedanken dagelassen. Hier eine kleine Auswahl:" },
  { type: "p", text: "\"REMOTE ISLAND war eine sehr schöne und teambuildende Erfahrung, die zum Nachdenken anregt.\"" },
  { type: "p", text: "\"Das moderne Monopoly – um nicht nur mit deiner Familie zu streiten. Demokratie in Aktion.\"" },
  { type: "p", text: "\"Liebe Grüße – Habt viel Spaß und macht mal Musikvideos!\"" },
  { type: "p", text: "\"TEILHABE IST ZUKUNFT und macht Freude! MACHT MIT!\"" },
  { type: "p", text: "\"Unsere Entscheidungen haben Folgen!\"" },
  { type: "p", text: "\"Stimmt zusammen ab und achtet auf einander!\"" },
  { type: "p", text: "\"Demokratie ist schön – macht aber Arbeit.\"" },
  { type: "p", text: "\"Immer einigen. Spaß haben. Teamarbeit ist wichtig.\"" },
];

export const aktuellesContent = [
  { type: "h", text: "Öffentliche Spieltermine im Rahmen des Köln-Tags:" },

  {
    type: "p",
    parts: [
      "Do, 05.Nov. 2026, 18 Uhr - ",
      { text: "Anmeldung", href: "https://buchung.museenkoeln.de/kursbuchen.aspx?termin=54014&inst=14" },
    ],
  },
  {
    type: "p",
    parts: [
      "Do, 03. Dez. 2026, 18 Uhr - ",
      { text: "Anmeldung", href: "https://buchung.museenkoeln.de/kursbuchen.aspx?termin=54015&inst=14" },
    ],
  },
  {
    type: "p",
    parts: [
      "Do, 07.Jan. 2027, 18 Uhr - ",
      { text: "Anmeldung", href: "https://buchung.museenkoeln.de/kursbuchen.aspx?termin=54016&inst=14" },
    ],
  },
  { 
    type: "p", 
    text: "Die Teilnahme ist im Rahmen des Köln-Tages kostenfrei und findet statt, sofern die Mindestteilnehmendenzahl erreicht ist." 
  },
  { 
    type: "p", 
    text: "Museumsnacht-Special: Sa, 07. Nov. 2026" 
  },
];

const renderParts = (parts) =>
  parts.map((part, i) =>
    typeof part === "string" ? (
      <React.Fragment key={i}>{part}</React.Fragment>
    ) : (
      <a
        key={i}
        className="text-title"
        href={part.href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "underline", color: "inherit" }}
      >
        {part.text}
      </a>
    )
  );

export const RemoteIslandTextContent = ({ content }) => (
  <div className="text-main-block">
    {content.map((node, i) => {
      const body = node.parts ? renderParts(node.parts) : node.text;

      // Wenn es eine Überschrift ist
      if (node.type === "h") {
        return (
          <p className="text-sub-block" key={i} style={{ marginBottom: "4px", marginTop: "24px" }}>
            <strong>{body}</strong>
          </p>
        );
      }

      // Wenn es eine Liste ist (NEU)
      if (node.type === "ul") {
        return (
          <ul key={i} style={{ 
            paddingLeft: "20px",       /* Abstand vor den Strichen */
            marginBottom: "16px", 
            listStyleType: "none",     /* Entfernt die Standard-Punkte */
            margin: "0 0 16px 20px"
          }}>
            {node.items.map((item, j) => (
              <li key={j} style={{ position: "relative", marginBottom: "8px" }}>
                {/* Fügt den Strich manuell vor den Text ein */}
                <span style={{ position: "absolute", left: "-15px" }}>-</span>
                {item}
              </li>
            ))}
          </ul>
        );
      }

      // Wenn es ein normaler Absatz ist
      return (
        <p className="text-sub-block" key={i} style={{ marginBottom: "16px", whiteSpace: "pre-line" }}>
          {body}
        </p>
      );
    })}
  </div>
);
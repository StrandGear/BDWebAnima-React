import { useState, useEffect } from "react";
import Papa from "papaparse";

const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTMBsxJIM5dX-jErfB6oJzHzqZ-GvsxDaxN9F5gfTscIt4KDGPkY0sRTcJq1KvfWElrUWqqKhl4nyko/pub?gid=0&single=true&output=csv";

const FALLBACK = [{ type: "p", text: "Aktuelle Informationen folgen in Kürze." }];

function parseInline(str) {
  const regex = /\[([^\]]+)\]\(([^)\s]+)\)|_([^_]+)_/g;
  const parts = [];
  let last = 0, m;
  while ((m = regex.exec(str))) {
    if (m.index > last) parts.push(str.slice(last, m.index));
    parts.push(m[1] ? { text: m[1], href: m[2] } : { text: m[3], cursive: true });
    last = regex.lastIndex;
  }
  if (last < str.length) parts.push(str.slice(last));
  return parts;
}

export function useAktuellesContent() {
  const [content, setContent] = useState(FALLBACK);

  useEffect(() => {
    fetch(`${SHEET_URL}&t=${Date.now()}`)
      .then((r) => r.text())
      .then((csv) => {
        const { data } = Papa.parse(csv, { skipEmptyLines: true });
        const rows = data[0]?.[0]?.trim().toLowerCase() === "type" ? data.slice(1) : data;
        const today = new Date().toLocaleDateString("sv-SE", { timeZone: "Europe/Berlin" });

        const nodes = rows
          .map(([type = "", text = "", showUntil = ""]) => ({
            type: type.trim(), text: text.trim(), showUntil: showUntil.trim(),
          }))
          .filter((r) => r.text && (!r.showUntil || r.showUntil >= today))
          .map((r) => ({ type: r.type === "h" ? "h" : "p", parts: parseInline(r.text) }));

        if (nodes.length) setContent(nodes);
      })
      .catch(() => {});
  }, []);

  return content;
}
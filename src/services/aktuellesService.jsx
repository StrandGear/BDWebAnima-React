import { useState, useEffect } from "react";
import Papa from "papaparse";

const FUNCTION_URL = "https://aktuelles-vajhbjyxoq-ew.a.run.app"; // your real URL
const LOCAL_SHEET_BASE = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTMBsxJIM5dX-jErfB6oJzHzqZ-GvsxDaxN9F5gfTscIt4KDGPkY0sRTcJq1KvfWElrUWqqKhl4nyko/pub";
const LOCAL_GIDS = {
  aktuelles: "1551308024",
  willkommen: "309855426",
  about: "1763985684",
  buchen: "1651887295",
  gruesse: "46941473",
  impressum: "961662761",
};

const feedUrl = (tab) =>
  import.meta.env.DEV
    ? `${LOCAL_SHEET_BASE}?gid=${LOCAL_GIDS[tab]}&single=true&output=csv`
    : `${FUNCTION_URL}?tab=${tab}`;

// **bold**, _italic_, [text](url), [text](tab:name), [text](download:url)
function parseInline(str) {
  const regex = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*|_([^_]+)_/g;
  const parts = [];
  let last = 0, m;
  while ((m = regex.exec(str))) {
    if (m.index > last) parts.push(str.slice(last, m.index));
    if (m[1]) {
      const target = m[2];
      if (target.startsWith("tab:")) parts.push({ text: m[1], tabLink: target.slice(4) });
      else if (target.startsWith("download:"))
        parts.push({ text: m[1], href: target.slice(9), isDownload: true });
      else parts.push({ text: m[1], href: target });
    } else if (m[3]) parts.push({ text: m[3], bold: true });
    else parts.push({ text: m[4], cursive: true });
    last = regex.lastIndex;
  }
  if (last < str.length) parts.push(str.slice(last));
  return parts;
}

function rowsToNodes(rows) {
  const today = new Date().toLocaleDateString("sv-SE", { timeZone: "Europe/Berlin" });
  const nodes = [];

  rows
    .map(([type = "", text = "", showUntil = ""]) => ({
      type: type.trim().toLowerCase(), text: text.trim(), showUntil: showUntil.trim(),
    }))
    .filter((r) => r.text && (!r.showUntil || r.showUntil >= today))
    .forEach((r) => {
      if (r.type === "li") {
        const prev = nodes[nodes.length - 1];
        if (prev?.type === "ul") prev.items.push(r.text);
        else nodes.push({ type: "ul", items: [r.text] });
      } else {
        nodes.push({
          type: ["h", "block"].includes(r.type) ? r.type : "p",
          parts: parseInline(r.text),
        });
      }
    });

  return nodes;
}

const readCache = (tab) => {
  try { return JSON.parse(localStorage.getItem(`sheet:${tab}`)) || null; } catch { return null; }
};
const writeCache = (tab, nodes) => {
  try { localStorage.setItem(`sheet:${tab}`, JSON.stringify(nodes)); } catch {}
};

// Shows the cache (or the static fallback) instantly, then swaps in fresh sheet content
export function useSheetContent(tab, fallback) {
  const [content, setContent] = useState(() => readCache(tab) || fallback);

  useEffect(() => {
    fetch(feedUrl(tab))
      .then((r) => { if (!r.ok) throw new Error(r.status); return r.text(); })
      .then((csv) => {
        const { data } = Papa.parse(csv, { skipEmptyLines: true });
        const rows = data[0]?.[0]?.trim().toLowerCase() === "type" ? data.slice(1) : data;
        const nodes = rowsToNodes(rows);
        if (nodes.length) { setContent(nodes); writeCache(tab, nodes); }
      })
      .catch(() => {}); // keep cache/fallback
  }, [tab]);

  return content;
}
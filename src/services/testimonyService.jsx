// src/services/testimonyService.jsx
//
// Reads Testimonies/{sessionId} from the Realtime Database (already
// server-filtered to status === "approved" via the security rules'
// query restriction) and combines each record into a Testimony instance.
//
// Results are cached in localStorage for CACHE_TTL_MS so that most page
// loads never hit Firebase at all — only the first visitor after the
// cache expires triggers a real read.

import { db } from "./firebase";
import { Testimony } from "../models/Testimony";

const CACHE_KEY = "testimonies_cache_v1";
const CACHE_TTL_MS = 30 * 60 * 1000; // 30 minutes

function readCache() {
  console.log("Fetching testimonies from cache");
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw);
    if (!parsed?.timestamp || !parsed?.data) return null;
    if (Date.now() - parsed.timestamp > CACHE_TTL_MS) return null; // expired

    return parsed.data; // { [sessionId]: rawSessionData }
  } catch (err) {
    console.warn("Could not read testimony cache:", err);
    return null;
  }
}

function writeCache(rawMap) {
  try {
    localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({ timestamp: Date.now(), data: rawMap })
    );
  } catch (err) {
    // e.g. localStorage disabled/full — not fatal, we just won't cache
    console.warn("Could not write testimony cache:", err);
  }
}

function hydrate(rawMap) {
  return Object.entries(rawMap).map(
    ([sessionId, sessionData]) => new Testimony(sessionId, sessionData)
  );
}

async function fetchFromFirebase() {

  console.log("Fetching testimonies from firebase");

  const snapshot = await db
    .ref("Testimonies")
    .orderByChild("status")
    .equalTo("approved")
    .get();

  return snapshot.exists() ? snapshot.val() : {};
}

/**
 * Fetches every approved Testimony, using the localStorage cache when it's
 * still fresh. Pass { forceRefresh: true } to bypass the cache and always
 * hit Firebase (e.g. from an admin "refresh" button).
 * @returns {Promise<Testimony[]>}
 */
export async function fetchApprovedTestimonies({ forceRefresh = false } = {}) {
  if (!forceRefresh) {
    const cached = readCache();
    if (cached) return hydrate(cached);
  }

  const raw = await fetchFromFirebase();
  writeCache(raw);
  return hydrate(raw);
}

/**
 * Clears the local cache so the next fetch is forced to hit Firebase.
 * Handy for debugging or exposing a manual "refresh" action.
 */
export function clearTestimonyCache() {
  try {
    localStorage.removeItem(CACHE_KEY);
  } catch (err) {
    console.warn("Could not clear testimony cache:", err);
  }
}

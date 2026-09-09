// src/screens/TestimonyDebug/TestimonyDebug.jsx
//
// Temporary test harness for the Testimony feature. Not styled, not meant
// to stay in the app long-term — just a fast way to confirm the DB read,
// image resolution, and live subscription all work end-to-end.
//
// Visit it at /testimony-debug (wired up in App.jsx).

import { useState } from "react";
import {
  fetchApprovedTestimonies,
  clearTestimonyCache,
} from "../../services/testimonyService";

export const TestimonyDebug = () => {
  const [testimonies, setTestimonies] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const runFetch = async (options) => {
    setStatus("loading");
    setError(null);
    try {
      const result = await fetchApprovedTestimonies(options);
      setTestimonies(result);
      setStatus(
        `done — ${result.length} approved testimony(ies)` +
          (options?.forceRefresh ? " (forced refresh)" : " (cache allowed)")
      );
    } catch (err) {
      console.error(err);
      setError(err.message ?? String(err));
      setStatus("error");
    }
  };

  const handleFetchCached = () => runFetch();
  const handleForceRefresh = () => runFetch({ forceRefresh: true });

  const handleClearCache = () => {
    clearTestimonyCache();
    setStatus("cache cleared (next fetch will hit Firebase)");
  };

  const handleClear = () => {
    setTestimonies([]);
    setStatus("idle");
    setError(null);
  };

  return (
    <div style={{ padding: 24, fontFamily: "monospace" }}>
      <h2>Testimony Debug</h2>

      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <button onClick={handleFetchCached}>Fetch (cache allowed)</button>
        <button onClick={handleForceRefresh}>Force refresh</button>
        <button onClick={handleClearCache}>Clear cache</button>
        <button onClick={handleClear}>Clear results</button>
      </div>

      <p>
        Status: <strong>{status}</strong>
      </p>
      {error && (
        <p style={{ color: "red" }}>
          Error: {error}
          <br />
          (If this says PERMISSION_DENIED, check your Realtime Database /
          Storage security rules.)
        </p>
      )}

      <h3>Rendered ({testimonies.length})</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
        {testimonies.map((t) => (
          <div
            key={t.sessionId}
            style={{ border: "1px solid #ccc", padding: 12, width: 220 }}
          >
            {t.imageUrl ? (
              <img
                src={t.imageUrl}
                alt={t.orgaName}
                style={{ width: "100%", height: 140, objectFit: "cover" }}
              />
            ) : (
              <div
                style={{
                  width: "100%",
                  height: 140,
                  background: "#eee",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                no image
              </div>
            )}
            <p>
              <strong>Session:</strong> {t.sessionId}
              <br />
              <strong>Org:</strong> {t.orgaName}
              <br />
              <strong>Status:</strong> {t.status}
            </p>
            {t.teams.map((team) => (
              <p key={team.teamId}>
                <strong>{team.teamName}</strong>: {team.text || "(empty)"}
              </p>
            ))}
          </div>
        ))}
      </div>

      <h3>Raw JSON</h3>
      <pre
        style={{
          background: "#f5f5f5",
          padding: 12,
          maxHeight: 400,
          overflow: "auto",
        }}
      >
        {JSON.stringify(testimonies, null, 2)}
      </pre>
    </div>
  );
};

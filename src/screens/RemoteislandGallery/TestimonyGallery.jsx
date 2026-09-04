// src/screens/RemoteislandGallery/TestimonyGallery.jsx
//
// Minimal example: pulls approved Testimony instances and renders one
// card per session (photo + org name + each team's text). Drop this
// component anywhere, e.g. inside RemoteislandGallery.jsx:
//
//   import { TestimonyGallery } from "./TestimonyGallery";
//   ...
//   <TestimonyGallery />

import { useEffect, useState } from "react";
import { fetchApprovedTestimonies } from "../../services/testimonyService";

export const TestimonyGallery = () => {
  const [testimonies, setTestimonies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetchApprovedTestimonies().then((data) => {
      if (!cancelled) {
        setTestimonies(data);
        setLoading(false);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) return <div>Loading testimonies…</div>;
  if (testimonies.length === 0) return <div>No approved testimonies yet.</div>;

  return (
    <div className="testimony-gallery">
      {testimonies.map((testimony) => (
        <div className="testimony-card" key={testimony.sessionId}>
          {testimony.imageUrl && (
            <img
              src={testimony.imageUrl}
              alt={`${testimony.orgaName} testimony`}
            />
          )}
          <h3>{testimony.orgaName}</h3>
          {testimony.teams.map((team) => (
            <div key={team.teamId}>
              <strong>{team.teamName}:</strong> {team.text}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

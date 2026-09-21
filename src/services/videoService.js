// src/services/videoService.jsx
import { db } from "./firebase";

const FALLBACK_VIDEOS = {
  bd_video: "https://firebasestorage.googleapis.com/v0/b/remote-island-app.firebasestorage.app/o/building_democracy.mp4?alt=media&token=426e886d-1434-4190-b90e-3d345be484c6",
  ri_video: "https://firebasestorage.googleapis.com/v0/b/remote-island-app.firebasestorage.app/o/remote_island.mp4?alt=media&token=6ea4b030-e59e-433f-b1b9-9541eb7853b3" // Add second fallback URL here
};

export async function fetchVideoUrls() {
  try {
    const snapshot = await db.ref("Videos").get();
    if (snapshot.exists()) {
      return snapshot.val();
    }
    return FALLBACK_VIDEOS;
  } catch (err) {
    console.warn("Using fallback video URLs due to fetch error:", err);
    return FALLBACK_VIDEOS;
  }
}
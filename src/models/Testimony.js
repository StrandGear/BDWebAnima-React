// src/models/Testimony.js
//
// A "Testimony" here = one Session's approved submission:
//   - the group photo (imageUrl, from Storage)
//   - the session's metadata (OrgaName, sessionId, submittedAt, status...)
//   - the list of per-team testimony texts that belong to that session
//
// This mirrors the DB shape:
//   Testimonies/{SessionID} = {
//     OrgaName, imageUrl, reviewToken, status, submittedAt,
//     Testimonies: { [TeamID]: { TeamID, TeamName, TestimonyText } }
//   }

export class TeamTestimony {
  constructor({ TeamID = "", TeamName = "", TestimonyText = "" } = {}) {
    this.teamId = TeamID;
    this.teamName = TeamName;
    this.text = TestimonyText;
  }
}

export class Testimony {
  /**
   * @param {string} sessionId - the Session key this testimony belongs to (e.g. "5R39D")
   * @param {object} raw - the raw object stored at Testimonies/{sessionId} in the RTDB
   * @param {string} [imageUrl] - resolved download URL for the photo (Storage). Falls back to raw.imageUrl.
   */
  constructor(sessionId, raw = {}, imageUrl = null) {
    this.sessionId = sessionId;
    this.orgaName = raw.OrgaName ?? "";
    this.status = raw.status ?? "pending";
    this.reviewToken = raw.reviewToken ?? "";
    this.submittedAt = raw.submittedAt ?? null;
    this.imageUrl = imageUrl ?? raw.imageUrl ?? null;

    // Turn the { TeamID: {...} } map into a flat array of TeamTestimony
    this.teams = Object.values(raw.Testimonies ?? {}).map(
      (team) => new TeamTestimony(team)
    );
  }

  get isApproved() {
    return this.status === "approved";
  }
}

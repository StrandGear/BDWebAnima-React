// Ensure Firebase SDK is loaded before running this script
if (!firebase.apps.length) {
    console.error("Firebase not initialized. Make sure to include Firebase SDK before this script.");
} else {
    console.log("Firebase Auth Handler Loaded.");

    firebase.auth().onAuthStateChanged((user) => {
        if (user && Module && Module.activeSessionId) {
            console.log("User authenticated, restarting team listener...");
            Module.ListenForTeamUpdates(Module.activeSessionId);
        }
    });
}

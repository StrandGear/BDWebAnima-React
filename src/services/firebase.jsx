import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";

import firebase from "firebase/compat/app"; 
import "firebase/compat/auth";
import "firebase/compat/database";

const firebaseConfig = {
        apiKey: "AIzaSyDdZu-G5Nz73j7MPeCEefbikV-TxSWxq1M",
        authDomain: "sori-3353a.firebaseapp.com",
        databaseURL: "https://sori-3353a-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "sori-3353a",
        storageBucket: "sori-3353a.firebasestorage.app",
        messagingSenderId: "319362189609",
        appId: "1:319362189609:web:e7c9e7f4ecc18309c8cf38",
        measurementId: "G-HV1112GG37"
      };
      
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.apps[0];
const db = firebase.database();
const auth = firebase.auth();

//  expose to Unity
window.firebase = {
    app,
    database: () => db,
    auth: () => auth,
    apps: firebase.apps
};

export { app, db, auth };
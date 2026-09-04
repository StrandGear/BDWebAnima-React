import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";

import firebase from "firebase/compat/app"; 
import "firebase/compat/auth";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyBzTyDx9owTXtGNQiERM11MtkG8R4xs-L4",
  authDomain: "remote-island-app.firebaseapp.com",
  databaseURL: "https://remote-island-app-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "remote-island-app",
  storageBucket: "remote-island-app.firebasestorage.app",
  messagingSenderId: "834803459470",
  appId: "1:834803459470:web:6a52b8e4c546df48d630df"
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
import "./App.css";
import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
firebase.initializeApp({
  apiKey: "AIzaSyD2Fm7RN9Ln8o3kHyuk8Wt9uR0cP3llLGY",
  authDomain: "ambient-decoder-288922.firebaseapp.com",
  projectId: "ambient-decoder-288922",
  storageBucket: "ambient-decoder-288922.appspot.com",
  messagingSenderId: "1013077742096",
  appId: "1:1013077742096:web:a8368e932c332ad36c3095",
  measurementId: "G-3MWF52QYQB",
});

const auth = firebase.auth();
const firestore = firebase.firestore();
function App() {
  return <div className="App"></div>;
}

export default App;

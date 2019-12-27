import firebase from "firebase";

export let config = {
  apiKey: "AIzaSyD1nxGA0HuZrdhhZTtrpYJ92K9WZMHIY6U",
  authDomain: "web-projects-tests.firebaseapp.com",
  databaseURL: "https://web-projects-tests.firebaseio.com",
  projectId: "web-projects-tests",
  storageBucket: "web-projects-tests.appspot.com",
  messagingSenderId: "113755058433",
  appId: "1:113755058433:web:5aeaf61b74cc497b9eeb00",
  measurementId: "G-2TPB0JYJ7J"
};

firebase.initializeApp(config);
let db = firebase.database();

export { db };

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBT3dyk78dArPGGvwTxMNWdJ5oi6aOQuU",
  authDomain: "angular-1-600e7.firebaseapp.com",
  databaseURL: "https://angular-1-600e7-default-rtdb.firebaseio.com",
  projectId: "angular-1-600e7",
  storageBucket: "angular-1-600e7.firebasestorage.app",
  messagingSenderId: "272780939276",
  appId: "1:272780939276:web:88249d6dc200ca66f71e29",
  measurementId: "G-SKPKT98LFL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
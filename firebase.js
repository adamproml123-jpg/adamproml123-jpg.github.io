// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAMsjP-CpDQnvVznIdenMx-0KnAPcQ5roQ",
  authDomain: "adam-drive-2ff46.firebaseapp.com",
  projectId: "adam-drive-2ff46",
  storageBucket: "adam-drive-2ff46.firebasestorage.app",
  messagingSenderId: "19709152340",
  appId: "1:19709152340:web:56cbbca070773ee00eb1c1"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

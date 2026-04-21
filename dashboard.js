import { storage, db, auth } from './firebase.js';
import {
  ref,
  uploadBytes,
  getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

import {
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

window.uploadFile = async function() {
  const file = document.getElementById("fileInput").files[0];
  if (!file) return alert("Select file");

  const storageRef = ref(storage, 'files/' + auth.currentUser.uid + '/' + file.name);

  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);

  await addDoc(collection(db, "files"), {
    userId: auth.currentUser.uid,
    fileName: file.name,
    fileURL: url
  });

  alert("Uploaded!");
  loadFiles();
};

async function loadFiles() {
  const querySnapshot = await getDocs(collection(db, "files"));
  const list = document.getElementById("fileList");
  list.innerHTML = "";

  querySnapshot.forEach(doc => {
    const data = doc.data();
    if (data.userId === auth.currentUser.uid) {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${data.fileURL}" target="_blank">${data.fileName}</a>`;
      list.appendChild(li);
    }
  });
}

loadFiles();

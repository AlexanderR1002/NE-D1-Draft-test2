// Firebase App
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyBxZUvFfe53qxr4fl4Aozgg8hqOFGQ9-gU",
  authDomain: "ne-d1-draft.firebaseapp.com",
  projectId: "ne-d1-draft",
  storageBucket: "ne-d1-draft.appspot.com",
  messagingSenderId: "724546962634",
  appId: "1:724546962634:web:1c1ce7c59eff6b52f16033",
  measurementId: "G-9E3P8LS9S1"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Simple test write/read
async function testFirestore() {
  try {
    const docRef = await addDoc(collection(db, "test"), {"timestamp": Date.now()});
    console.log("Test document written with ID: ", docRef.id);

    const querySnapshot = await getDocs(collection(db, "test"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

testFirestore();

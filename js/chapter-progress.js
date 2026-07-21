console.log("chapter-progress.js loaded");
import { auth, db } from "../firebase/firebase-config.js";

import {
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
console.log("Imports completed successfully");
onAuthStateChanged(auth, async (user) => {

    console.log("Auth callback fired");
    console.log("User object:", user);

    if (!user) {

        console.log("No user is logged in.");

        return;

    }

    console.log("Logged in:", user.displayName);

    const quizRef = collection(
        db,
        "students",
        user.uid,
        "quizResults"
    );

    const snapshot = await getDocs(quizRef);

    console.log("Total Attempts:", snapshot.size);

    snapshot.forEach(doc => {

        console.log(doc.data());

    });

});
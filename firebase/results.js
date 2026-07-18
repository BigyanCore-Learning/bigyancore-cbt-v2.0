import { auth, db } from "./firebase-config.js";

import {
    collection,
    addDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

import {
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

function getCurrentUser() {
    return new Promise((resolve) => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            unsubscribe();
            resolve(user);
        });
    });
}

export async function saveQuizResult(result) {

    console.log("STEP 1: saveQuizResult() called");

    const user = await getCurrentUser();

    console.log("STEP 2: Current user =", user);

    if (!user) {
        throw new Error("No user is logged in.");
    }

    const resultsRef = collection(
        db,
        "students",
        user.uid,
        "quizResults"
    );

    console.log("STEP 3: About to write to Firestore");

    await addDoc(resultsRef, {
        subject: result.subject,
        chapter: result.chapter,
        score: result.score,
        totalQuestions: result.totalQuestions,
        percentage: result.percentage,
        timeTaken: result.timeTaken,
        questionTimeSpent: result.questionTimeSpent,
        completedAt: serverTimestamp()
    });

    console.log("✅ STEP 4: Firestore write successful");
}
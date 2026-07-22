import { auth, db } from "./firebase-config.js";

import {
    collection,
    addDoc,
    serverTimestamp,
    doc,
    getDoc,
    updateDoc
}
from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

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
    
    console.log("Result object:", result);
    await addDoc(resultsRef, {
    subject: result.subject,
    chapter: result.chapter,

    cbt: result.cbt,

    score: result.score,
    totalQuestions: result.totalQuestions,
    percentage: result.percentage,
    timeTaken: result.timeTaken,
    questionTimeSpent: result.questionTimeSpent,
    completedAt: serverTimestamp()
});
// ========================
// XP Calculation
// ========================

let earnedXP = 50;

// Bonus XP

if (result.percentage >= 60)
    earnedXP += 20;

if (result.percentage >= 80)
    earnedXP += 30;

if (result.percentage >= 90)
    earnedXP += 50;

// Student document

const studentRef = doc(
    db,
    "students",
    user.uid
);

const studentSnap = await getDoc(studentRef);

const studentData = studentSnap.data();

const currentXP = studentData.xp || 0;

await updateDoc(studentRef,{

    xp: currentXP + earnedXP

});

console.log(
    `⭐ Earned ${earnedXP} XP`
);
    console.log("✅ STEP 4: Firestore write successful");
}
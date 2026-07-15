import { auth, db } from "../firebase/firebase-config.js";
import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

import {
    collection,
    getDocs,
    query,
    orderBy,
    limit
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const userName = document.getElementById("user-name");
const userEmail = document.getElementById("user-email");
const userPhoto = document.getElementById("user-photo");
const logoutBtn = document.getElementById("logout-btn");

onAuthStateChanged(auth, async  (user) => {

    if (user) {
        console.log("Photo URL:", user.photoURL);

        userName.textContent = `Welcome Back, ${user.displayName}`;
        userEmail.textContent = user.email;

        if (user.photoURL) {
            userPhoto.src = user.photoURL;
        }
// ===============================
// Dashboard Analytics
// ===============================

const quizRef = collection(
    db,
    "students",
    user.uid,
    "quizResults"
);

const quizQuery = query(
    quizRef,
    orderBy("completedAt", "desc"),
    limit(5)
);

const snapshot = await getDocs(quizQuery);

let totalTests = 0;
let totalPercentage = 0;
let bestPercentage = 0;

let totalQuestionsSolved = 0;
let totalStudyTime = 0;

let bestChapter = "--";

const completedChapters = new Set();

let activityHTML = "";



snapshot.forEach((doc) => {

    const data = doc.data();

    totalQuestionsSolved += data.totalQuestions || 0;

    totalStudyTime += data.timeTaken || 0;

    completedChapters.add(data.chapter);
    totalTests++;

    totalPercentage += data.percentage || 0;

    if ((data.percentage || 0) > bestPercentage) {

    bestPercentage = data.percentage;

    bestChapter = data.chapter;

    }
    const completedDate = data.completedAt
    ? data.completedAt.toDate().toLocaleString()
    : "Just now";
    activityHTML += `
<div class="activity-box">
    <p>✅ ${data.chapter}</p>
    <span>${data.percentage}%</span>
    <small>${completedDate}</small>
</div>
`;
});

const average =
    totalTests > 0
        ? (totalPercentage / totalTests).toFixed(2)
        : 0;

document.getElementById("testsAttempted").innerText =
    totalTests;

document.getElementById("averageScore").innerText =
    average + "%";

document.getElementById("bestScore").innerText =
    bestPercentage + "%";

    document.getElementById("questionsSolved").innerText =
    totalQuestionsSolved;

document.getElementById("studyTime").innerText =
    Math.round(totalStudyTime / 60) + " min";

document.getElementById("bestChapter").innerText =
    bestChapter;

document.getElementById("recentActivity").innerHTML =
    activityHTML;
    
document.getElementById("chaptersCompleted").innerText =
    completedChapters.size;
    } else {

        window.location.href = "login.html";

    }

});

logoutBtn.addEventListener("click", async () => {

    await signOut(auth);

    window.location.href = "login.html";

});
import { calculateDashboardStats } from "./dashboard-stats.js";
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
            console.log("Image element:", userPhoto);
            console.log("Current SRC:", userPhoto.src);
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

const dashboardStats = calculateDashboardStats(snapshot);
console.log(dashboardStats);
document.getElementById("testsAttempted").innerText =
   dashboardStats.totalTests;

document.getElementById("averageScore").innerText =
    dashboardStats.average + "%";

document.getElementById("bestScore").innerText =
    dashboardStats.bestPercentage + "%";

    document.getElementById("questionsSolved").innerText =
    dashboardStats.totalQuestionsSolved;

document.getElementById("studyTime").innerText =
    Math.round(dashboardStats.totalStudyTime / 60) + " min";

document.getElementById("bestChapter").innerText =
    dashboardStats.bestChapter;

document.getElementById("recentActivity").innerHTML =
    dashboardStats.activityHTML;
    
document.getElementById("chaptersCompleted").innerText =
    dashboardStats.completedChapters.size;
    if (dashboardStats.latestQuiz) {

    document.getElementById("continueChapter").innerText =
        dashboardStats.latestQuiz.chapter;

    document.getElementById("continueCBT").innerText =
        dashboardStats.latestQuiz.cbt.toUpperCase();

    document.getElementById("continuePercentage").innerText =
        `${dashboardStats.latestQuiz.percentage}%`;

    document.getElementById("continueBtn")
.addEventListener("click", () => {

    localStorage.setItem(
        "currentCBT",
        dashboardStats.latestQuiz.cbt
    );

    window.location.href =
        "structure-of-atom.html";

});
    }
    } else {

        window.location.href = "login.html";

    }

});
    
logoutBtn.addEventListener("click", async () => {

    await signOut(auth);

    window.location.href = "login.html";

});
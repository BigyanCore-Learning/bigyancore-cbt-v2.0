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
function loadProfilePhoto(photoURL) {

    if (!photoURL) {
        userPhoto.src = "images/default-user.png";
        return;
    }

    const img = new Image();

    img.onload = () => {

        userPhoto.src =
            photoURL + "?v=" + Date.now();

        console.log("✅ Profile photo loaded");

    };

    img.onerror = () => {

        console.log("❌ Google photo failed");

        userPhoto.src =
            "images/default-user.png";

    };

    img.src =
        photoURL + "?v=" + Date.now();

}

onAuthStateChanged(auth, async  (user) => {

    if (user) {
        console.log("Photo URL:", user.photoURL);

        userName.textContent = `Welcome Back, ${user.displayName}`;
        userEmail.textContent = user.email;

        loadProfilePhoto(user.photoURL);
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
    `structure-of-atom.html?id=${chapterId}`;

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
import { loadChapter } from "./chapter-loader.js";
import {
    getQuizResults,
    calculateCBTStats,
    calculateChapterStats
} from "./stats.js";

import { auth, } from "../firebase/firebase-config.js";

import {
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

console.log("chapter-page.js loaded");

const cbt1Button = document.getElementById("cbt1Button");
const cbt2Button = document.getElementById("cbt2Button");

let currentUser = null;

onAuthStateChanged(auth, async (user) => {

    currentUser = user;

    console.log("Current User:", currentUser);

    if (!currentUser) return;
    const chapter = await loadChapter("atomic-structure");

document.getElementById("pageTitle").innerText =
    chapter.title;

document.getElementById("chapterTitle").innerText =
    `${chapter.emoji} ${chapter.title}`;

document.getElementById("chapterDescription").innerText =
    chapter.description;

const cbt1 = chapter.cbts[0];
const cbt2 = chapter.cbts[1];

document.getElementById("cbt1Title").innerText =
    `🎯 ${cbt1.title}`;

document.getElementById("cbt1Info").innerHTML =
`${cbt1.questions} Questions<br>
${cbt1.duration} Minutes`;

document.getElementById("cbt1Button").innerText =
    cbt1.buttonText;

document.getElementById("cbt2Title").innerText =
    `🎯 ${cbt2.title}`;

document.getElementById("cbt2Info").innerHTML =
`${cbt2.questions} Questions<br>
${cbt2.duration} Minutes`;

document.getElementById("cbt2Button").innerText =
    cbt2.buttonText;
    const snapshot = await getQuizResults(currentUser.uid);

    const cbtStats = calculateCBTStats(snapshot);

    const chapterStats = calculateChapterStats(snapshot);

const hours = Math.floor(chapterStats.totalTime / 3600);

const minutes = Math.floor(
    (chapterStats.totalTime % 3600) / 60
);

let timeText = "";

if (hours > 0) {

    timeText = `${hours}h ${minutes}m`;

}
else{

    timeText = `${minutes} min`;

}
document.getElementById("practiceSolved").innerText =
    chapterStats.questionsSolved;

document.getElementById("bestScore").innerText =
    chapterStats.bestScore;

document.getElementById("timeSpent").innerText =
    timeText;
document.getElementById("notesProgress").innerText =
    "0%";
console.log(cbtStats);
document.getElementById("cbt1Attempts").innerText =
    `Attempts : ${cbtStats.cbt1.attempts}`;

document.getElementById("cbt1BestScore").innerText =
    `Best Score : ${cbtStats.cbt1.bestScore}`;
document.getElementById("cbt1Percentage").innerText =
    `Best Percentage : ${cbtStats.cbt1.bestPercentage}%`;
document.getElementById("cbt2Attempts").innerText =
    `Attempts : ${cbtStats.cbt2.attempts}`;

document.getElementById("cbt2BestScore").innerText =
    `Best Score : ${cbtStats.cbt2.bestScore}`;
document.getElementById("cbt2Percentage").innerText =
    `Best Percentage : ${cbtStats.cbt2.bestPercentage}%`;
});
cbt1Button.addEventListener("click", (e) => {

    e.preventDefault();

    localStorage.setItem("currentCBT", "cbt1");

    window.location.href = "quiz.html";

});

cbt2Button.addEventListener("click", (e) => {

    e.preventDefault();

    localStorage.setItem("currentCBT", "cbt2");

    window.location.href = "quiz.html";

});
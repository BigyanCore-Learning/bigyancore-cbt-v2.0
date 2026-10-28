import { loadChapter } from "./chapter-loader.js";
import {
    getQuizResults,
    calculateCBTStats,
    calculateChapterStats
} from "./stats.js";
import { auth } from "../firebase/firebase-config.js";
import {
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
console.log("chapter-page.js loaded");
let currentUser = null;
let chapter = null;
const params = new URLSearchParams(window.location.search);
const chapterId = params.get("id") || "atomic-structure";
const cbtButtons = {};
for (let i = 1; i <= 6; i++) {
    cbtButtons[`cbt${i}`] = document.getElementById(`cbt${i}Button`);
}
onAuthStateChanged(auth, async (user) => {
    currentUser = user;
    console.log("Current User:", currentUser);
    try {
        chapter = loadChapter(chapterId);
    } catch (error) {
        console.error("Chapter data not found:", error);
        return;
    }
    document.getElementById("pageTitle").innerText = chapter.title;
    document.getElementById("chapterTitle").innerText =
        `${chapter.emoji} ${chapter.title}`;
    document.getElementById("chapterDescription").innerText =
        chapter.description;
    // Show only the CBT cards configured for this chapter.
    for (let i = 1; i <= 6; i++) {
        const card = document.getElementById(`cbt${i}Card`);
        if (card) {
            card.style.display = "none";
        }
    }
    chapter.cbts.forEach((cbt, index) => {
        const number = index + 1;
        const card = document.getElementById(`cbt${number}Card`);
        if (!card) {
            console.error(`Missing HTML card for CBT ${number}`);
            return;
        }
        card.style.display = "";
        document.getElementById(`cbt${number}Title`).innerText =
            `🎯 ${cbt.title}`;
        document.getElementById(`cbt${number}Info`).innerHTML =
            `${cbt.questions} Questions<br>${cbt.duration} Minutes`;
        cbtButtons[`cbt${number}`].innerText = cbt.buttonText;
        // Reset displayed statistics before loading saved results.
        document.getElementById(`cbt${number}Attempts`).innerText =
            "Attempts : 0";
        document.getElementById(`cbt${number}BestScore`).innerText =
            "Best Score : --";
        document.getElementById(`cbt${number}Percentage`).innerText =
            "Best Percentage : --";
    });
    if (!currentUser) {
        console.log(
            "Visitor is not logged in. Showing public chapter content."
        );
        chapter.cbts.forEach((cbt, index) => {
            const number = index + 1;
            document.getElementById(`cbt${number}Attempts`).innerText =
                "Attempts : —";
            document.getElementById(`cbt${number}BestScore`).innerText =
                "Best Score : —";
            document.getElementById(`cbt${number}Percentage`).innerText =
                "Best Percentage : —";
        });
        return;
    }
    try {
        const snapshot = await getQuizResults(currentUser.uid);
        const cbtStats = calculateCBTStats(snapshot, chapter.title);
        const chapterStats = calculateChapterStats(snapshot, chapter.title);
        console.log("Current chapter:", chapter.title);
console.log("Calculated chapter statistics:", chapterStats);
                const totalSeconds = chapterStats.totalTime;
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        const timeText = hours > 0
    ? `${hours}h ${minutes}m`
    : minutes > 0
        ? `${minutes} min`
        : `${seconds} sec`;
        document.getElementById("practiceSolved").innerText =
            chapterStats.questionsSolved;
        document.getElementById("bestScore").innerText =
            chapterStats.bestScore;
        document.getElementById("timeSpent").innerText = timeText;
        document.getElementById("notesProgress").innerText = "0%";
        console.log("CBT statistics:", cbtStats);
        chapter.cbts.forEach((cbt, index) => {
            const number = index + 1;
            const key = `cbt${number}`;
            const stats = cbtStats[key];
            if (!stats) {
                console.warn(`No statistics found for ${key}`);
                return;
            }
            document.getElementById(`${key}Attempts`).innerText =
                `Attempts : ${stats.attempts}`;
            document.getElementById(`${key}BestScore`).innerText =
                `Best Score : ${stats.bestScore}`;
            document.getElementById(`${key}Percentage`).innerText =
                `Best Percentage : ${stats.bestPercentage}%`;
        });
    } catch (error) {
        console.error("Could not load chapter statistics:", error);
    }
});
// Each CBT button records both the selected chapter and CBT.
for (let i = 1; i <= 6; i++) {
    const button = cbtButtons[`cbt${i}`];
    if (!button) continue;
    button.addEventListener("click", (event) => {
        event.preventDefault();
        const number = i;
        const cbt = chapter?.cbts[number - 1];
        if (!chapter || !cbt) {
            console.error("This CBT is not configured for the chapter.");
            return;
        }
        localStorage.setItem("currentChapter", chapter.id);
        localStorage.setItem("currentCBT", cbt.id);
        window.location.href = "quiz.html";
    });
}

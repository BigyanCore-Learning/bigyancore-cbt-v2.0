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

    // Safely update general chapter info if elements exist
    const pageTitleEl = document.getElementById("pageTitle");
    if (pageTitleEl) pageTitleEl.innerText = chapter.title;

    const chapterTitleEl = document.getElementById("chapterTitle");
    if (chapterTitleEl) chapterTitleEl.innerText = `${chapter.emoji || ""} ${chapter.title}`;

    const chapterDescEl = document.getElementById("chapterDescription");
    if (chapterDescEl) chapterDescEl.innerText = chapter.description || "";

    // Show only the CBT cards configured for this chapter.
    for (let i = 1; i <= 6; i++) {
        const card = document.getElementById(`cbt${i}Card`);
        if (card) {
            card.style.display = "none";
        }
    }

    if (chapter.cbts && Array.isArray(chapter.cbts)) {
        chapter.cbts.forEach((cbt, index) => {
            const number = index + 1;
            const card = document.getElementById(`cbt${number}Card`);
            if (!card) {
                console.error(`Missing HTML card for CBT ${number}`);
                return;
            }
            card.style.display = "";

            const titleEl = document.getElementById(`cbt${number}Title`);
            if (titleEl) titleEl.innerText = `🎯 ${cbt.title}`;

            const infoEl = document.getElementById(`cbt${number}Info`);
            if (infoEl) infoEl.innerHTML = `${cbt.questions} Questions<br>${cbt.duration} Minutes`;

            if (cbtButtons[`cbt${number}`]) {
                cbtButtons[`cbt${number}`].innerText = cbt.buttonText || "Start CBT";
            }

            // Reset displayed statistics before loading saved results.
            const attemptsEl = document.getElementById(`cbt${number}Attempts`);
            if (attemptsEl) attemptsEl.innerText = "Attempts : 0";

            const bestScoreEl = document.getElementById(`cbt${number}BestScore`);
            if (bestScoreEl) bestScoreEl.innerText = "Best Score : --";

            const bestPercEl = document.getElementById(`cbt${number}Percentage`);
            if (bestPercEl) bestPercEl.innerText = "Best Percentage : --";
        });
    }

    if (!currentUser) {
        console.log("Visitor is not logged in. Showing public chapter content.");
        if (chapter.cbts && Array.isArray(chapter.cbts)) {
            chapter.cbts.forEach((_, index) => {
                const number = index + 1;
                const attemptsEl = document.getElementById(`cbt${number}Attempts`);
                if (attemptsEl) attemptsEl.innerText = "Attempts : —";

                const bestScoreEl = document.getElementById(`cbt${number}BestScore`);
                if (bestScoreEl) bestScoreEl.innerText = "Best Score : —";

                const bestPercEl = document.getElementById(`cbt${number}Percentage`);
                if (bestPercEl) bestPercEl.innerText = "Best Percentage : —";
            });
        }
        return;
    }

    try {
        const snapshot = await getQuizResults(currentUser.uid);
        const cbtStats = calculateCBTStats(snapshot, chapter.title);
        const chapterStats = calculateChapterStats(snapshot, chapter.title);

        console.log("Current chapter:", chapter.title);
        console.log("Calculated chapter statistics:", chapterStats);

        const totalSeconds = chapterStats?.totalTime || 0;
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        
        const timeText = hours > 0
            ? `${hours}h ${minutes}m`
            : minutes > 0
                ? `${minutes} min`
                : `${seconds} sec`;

        const practiceSolvedEl = document.getElementById("practiceSolved");
        if (practiceSolvedEl) practiceSolvedEl.innerText = chapterStats?.questionsSolved || 0;

        const bestScoreEl = document.getElementById("bestScore");
        if (bestScoreEl) bestScoreEl.innerText = chapterStats?.bestScore ?? "--";

        const timeSpentEl = document.getElementById("timeSpent");
        if (timeSpentEl) timeSpentEl.innerText = timeText;

        const notesProgressEl = document.getElementById("notesProgress");
        if (notesProgressEl) notesProgressEl.innerText = "0%";

        console.log("CBT statistics:", cbtStats);

        if (chapter.cbts && Array.isArray(chapter.cbts)) {
            chapter.cbts.forEach((_, index) => {
                const number = index + 1;
                const key = `cbt${number}`;
                const stats = cbtStats?.[key];

                if (!stats) {
                    console.warn(`No statistics found for ${key}`);
                    return;
                }

                const attemptsEl = document.getElementById(`${key}Attempts`);
                if (attemptsEl) attemptsEl.innerText = `Attempts : ${stats.attempts || 0}`;

                const bestScoreCbtEl = document.getElementById(`${key}BestScore`);
                if (bestScoreCbtEl) bestScoreCbtEl.innerText = `Best Score : ${stats.bestScore ?? "--"}`;

                const bestPercCbtEl = document.getElementById(`${key}Percentage`);
                if (bestPercCbtEl) bestPercCbtEl.innerText = `Best Percentage : ${stats.bestPercentage ?? 0}%`;
            });
        }
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
        const cbt = chapter?.cbts?.[number - 1];

        if (!chapter || !cbt) {
            console.error("This CBT is not configured for the chapter.");
            return;
        }

        localStorage.setItem("currentChapter", chapter.id);
        localStorage.setItem("currentCBT", cbt.id);
        window.location.href = "quiz.html";
    });
}
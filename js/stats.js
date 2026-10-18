
import { db } from "../firebase/firebase-config.js";

import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

export function calculateCBTStats(snapshot) {
    const cbtStats = {
        cbt1: {
            attempts: 0,
            bestScore: 0,
            bestPercentage: 0,
            latestScore: 0,
            latestAttempt: null,
            totalTime: 0
        },

        cbt2: {
            attempts: 0,
            bestScore: 0,
            bestPercentage: 0,
            latestScore: 0,
            latestAttempt: null,
            totalTime: 0
        },

        cbt3: {
            attempts: 0,
            bestScore: 0,
            bestPercentage: 0,
            latestScore: 0,
            latestAttempt: null,
            totalTime: 0
        },

                cbt4: {
            attempts: 0,
            bestScore: 0,
            bestPercentage: 0,
            latestScore: 0,
            latestAttempt: null,
            totalTime: 0
        },

        cbt5: {
            attempts: 0,
            bestScore: 0,
            bestPercentage: 0,
            latestScore: 0,
            latestAttempt: null,
            totalTime: 0
        }
    };

    snapshot.forEach(doc => {
        const result = doc.data();

        if (!cbtStats[result.cbt]) {
            return;
        }

        const stats = cbtStats[result.cbt];

        stats.attempts++;

        if (result.score > stats.bestScore) {
            stats.bestScore = result.score;
        }

        if (result.percentage > stats.bestPercentage) {
            stats.bestPercentage = result.percentage;
        }
    });

    return cbtStats;
}

export async function getQuizResults(uid) {
    const quizRef = collection(
        db,
        "students",
        uid,
        "quizResults"
    );

    const snapshot = await getDocs(quizRef);

    return snapshot;
}

export function calculateChapterStats(snapshot) {
    const chapterStats = {
        totalTime: 0,
        bestScore: 0,
        questionsSolved: 0,
        notesProgress: 0
    };

    snapshot.forEach(doc => {
        const result = doc.data();

        chapterStats.totalTime += result.timeTaken || 0;
        chapterStats.questionsSolved += result.totalQuestions || 0;

        if (result.score > chapterStats.bestScore) {
            chapterStats.bestScore = result.score;
        }
    });

    return chapterStats;
}

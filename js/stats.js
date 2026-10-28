import { db } from "../firebase/firebase-config.js";
import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

export function calculateCBTStats(snapshot, chapterName) {
    const cbtStats = {};

    snapshot.forEach(doc => {
        const result = doc.data();
        
        // Filter by chapter name if provided
        if (chapterName && result.chapter !== chapterName) {
            return;
        }

        const cbtKey = result.cbt;
        if (!cbtKey) {
            return;
        }

        // Dynamically initialize CBT stats object if it doesn't exist yet
        if (!cbtStats[cbtKey]) {
            cbtStats[cbtKey] = {
                attempts: 0,
                bestScore: 0,
                bestPercentage: 0,
                latestScore: 0,
                latestAttempt: null,
                totalTime: 0
            };
        }

        const stats = cbtStats[cbtKey];
        stats.attempts++;

        const score = result.score || 0;
        const percentage = result.percentage || 0;
        const timeTaken = result.timeTaken || 0;

        stats.totalTime += timeTaken;

        if (score > stats.bestScore) {
            stats.bestScore = score;
        }

        if (percentage > stats.bestPercentage) {
            stats.bestPercentage = percentage;
        }

        // Track latest attempt if completedAt is available
        const completedAt = result.completedAt;
        if (completedAt) {
            const attemptDate = typeof completedAt.toDate === "function" 
                ? completedAt.toDate() 
                : new Date(completedAt);

            if (!stats.latestAttempt || attemptDate > stats.latestAttempt) {
                stats.latestAttempt = attemptDate;
                stats.latestScore = score;
            }
        }
    });

    return cbtStats;
}

export async function getQuizResults(uid) {
    if (!uid) {
        throw new Error("User UID is required to fetch quiz results.");
    }

    const quizRef = collection(
        db,
        "students",
        uid,
        "quizResults"
    );
    
    const snapshot = await getDocs(quizRef);
    return snapshot;
}

export function calculateChapterStats(snapshot, chapterName) {
    const chapterStats = {
        totalTime: 0,
        bestScore: 0,
        questionsSolved: 0,
        notesProgress: 0
    };

    if (!snapshot) return chapterStats;

    snapshot.forEach(doc => {
        const result = doc.data();
        
        if (chapterName && result.chapter !== chapterName) {
            return;
        }

        chapterStats.totalTime += result.timeTaken || 0;
        chapterStats.questionsSolved += result.totalQuestions || 0;
        
        const score = result.score || 0;
        if (score > chapterStats.bestScore) {
            chapterStats.bestScore = score;
        }
    });

    return chapterStats;
}
import { auth } from "../firebase/firebase-config.js";
import {
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

// Safe DOM element references
const studentName = document.getElementById("student-name");
const studentEmail = document.getElementById("student-email");
const resultPhoto = document.getElementById("result-photo");
const scoreElement = document.getElementById("score");
const percentageElement = document.getElementById("percentage");
const gradeElement = document.getElementById("grade");
const chapterNameElement = document.getElementById("chapter-name");

onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.href = "login.html";
        return;
    }

    if (studentName) studentName.textContent = user.displayName || "Student";
    if (studentEmail) studentEmail.textContent = user.email || "";
    
    if (user.photoURL && resultPhoto) {
        resultPhoto.src = user.photoURL;
    }
});

// Safely parse latestResult from localStorage with error handling
let latestResult = null;
try {
    const storedResult = localStorage.getItem("latestResult");
    if (storedResult) {
        latestResult = JSON.parse(storedResult);
    }
} catch (error) {
    console.error("Failed to parse latestResult from localStorage:", error);
}

if (latestResult) {
    const chapterTitles = {
        "atomic-structure": "Structure of Atom",
        "classification-periodicity": "Classification of Elements and Periodicity in Properties",
        "chemical-bonding": "Chemical Bonding and Molecular Structure"
    };

    if (chapterNameElement) {
        chapterNameElement.textContent = chapterTitles[latestResult.chapterId] || "Structure of Atom";
    }

    const totalMarks = latestResult.totalMarks ?? (latestResult.totalQuestions * 4);

    if (scoreElement) {
        scoreElement.textContent = `${latestResult.score ?? 0} / ${totalMarks || 0}`;
    }

    const percentage = latestResult.percentage ?? 0;
    if (percentageElement) {
        percentageElement.textContent = `${percentage}%`;
    }

    if (gradeElement) {
        if (percentage >= 90) {
            gradeElement.textContent = "Excellent";
        } else if (percentage >= 75) {
            gradeElement.textContent = "Very Good";
        } else if (percentage >= 60) {
            gradeElement.textContent = "Good";
        } else {
            gradeElement.textContent = "Needs Improvement";
        }
    }
} else {
    console.warn("No latestResult found in localStorage.");
}
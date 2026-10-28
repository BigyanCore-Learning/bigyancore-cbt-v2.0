export function renderDashboard(stats) {
    if (!stats) return;

    const testsAttempted = document.getElementById("testsAttempted");
    if (testsAttempted) testsAttempted.innerText = stats.totalTests ?? 0;

    const averageScore = document.getElementById("averageScore");
    if (averageScore) averageScore.innerText = `${stats.average ?? 0}%`;

    const bestScore = document.getElementById("bestScore");
    if (bestScore) bestScore.innerText = `${stats.bestPercentage ?? 0}%`;

    const questionsSolved = document.getElementById("questionsSolved");
    if (questionsSolved) questionsSolved.innerText = stats.totalQuestionsSolved ?? 0;

    const studyTime = document.getElementById("studyTime");
    if (studyTime) {
        const timeInMinutes = Math.round((stats.totalStudyTime || 0) / 60);
        studyTime.innerText = `${timeInMinutes} min`;
    }

    const bestChapter = document.getElementById("bestChapter");
    if (bestChapter) bestChapter.innerText = stats.bestChapter || "--";

    const chaptersCompleted = document.getElementById("chaptersCompleted");
    if (chaptersCompleted) {
        chaptersCompleted.innerText = stats.completedChapters instanceof Set 
            ? stats.completedChapters.size 
            : 0;
    }

    const recentActivity = document.getElementById("recentActivity");
    if (recentActivity) recentActivity.innerHTML = stats.activityHTML || "";
}

export function renderContinueLearning(stats) {
    if (!stats || !stats.latestQuiz) return;

    const continueChapter = document.getElementById("continueChapter");
    if (continueChapter) {
        continueChapter.innerText = stats.latestQuiz.chapter || "Unknown Chapter";
    }

    const continueCBT = document.getElementById("continueCBT");
    if (continueCBT) {
        continueCBT.innerText = stats.latestQuiz.cbt ? stats.latestQuiz.cbt.toUpperCase() : "";
    }

    const continuePercentage = document.getElementById("continuePercentage");
    if (continuePercentage) {
        continuePercentage.innerText = `${stats.latestQuiz.percentage ?? 0}%`;
    }
}
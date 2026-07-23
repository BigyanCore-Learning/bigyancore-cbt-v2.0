export function renderDashboard(stats) {

    document.getElementById("testsAttempted").innerText =
        stats.totalTests;

    document.getElementById("averageScore").innerText =
        stats.average + "%";

    document.getElementById("bestScore").innerText =
        stats.bestPercentage + "%";

    document.getElementById("questionsSolved").innerText =
        stats.totalQuestionsSolved;

    document.getElementById("studyTime").innerText =
        Math.round(stats.totalStudyTime / 60) + " min";

    document.getElementById("bestChapter").innerText =
        stats.bestChapter;

    document.getElementById("chaptersCompleted").innerText =
        stats.completedChapters.size;

    document.getElementById("recentActivity").innerHTML =
        stats.activityHTML;

}
export function renderContinueLearning(stats) {

    if (!stats.latestQuiz) return;

    document.getElementById("continueChapter").innerText =
        stats.latestQuiz.chapter;

    document.getElementById("continueCBT").innerText =
        stats.latestQuiz.cbt.toUpperCase();

    document.getElementById("continuePercentage").innerText =
        `${stats.latestQuiz.percentage}%`;

}
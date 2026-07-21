export function calculateDashboardStats(snapshot) {

    let totalTests = 0;
    let totalPercentage = 0;
    let bestPercentage = 0;

    let totalQuestionsSolved = 0;
    let totalStudyTime = 0;

    let bestChapter = "--";

    const completedChapters = new Set();

    let activityHTML = "";
    let latestQuiz = null;
    snapshot.forEach((doc) => {

        const data = doc.data();
        if (!latestQuiz) {

    latestQuiz = data;

    }
        totalQuestionsSolved += data.totalQuestions || 0;

        totalStudyTime += data.timeTaken || 0;

        completedChapters.add(data.chapter);

        totalTests++;

        totalPercentage += data.percentage || 0;

        if ((data.percentage || 0) > bestPercentage) {

            bestPercentage = data.percentage;
            bestChapter = data.chapter;

        }

        const completedDate = data.completedAt
            ? data.completedAt.toDate().toLocaleString()
            : "Just now";

        activityHTML += `
<div class="activity-box">
    <p>✅ ${data.chapter}</p>
    <span>${data.percentage}%</span>
    <small>${completedDate}</small>
</div>`;
    });

    const average =
        totalTests > 0
            ? (totalPercentage / totalTests).toFixed(2)
            : 0;

return {
    totalTests,
    average,
    bestPercentage,
    totalQuestionsSolved,
    totalStudyTime,
    completedChapters,
    bestChapter,
    activityHTML,
    latestQuiz
};
}
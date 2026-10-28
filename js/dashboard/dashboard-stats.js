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
        
        // Track the first doc as latest (make sure your Firestore query is ordered if needed)
        if (!latestQuiz) {
            latestQuiz = data;
        }

        totalQuestionsSolved += data.totalQuestions || 0;
        totalStudyTime += data.timeTaken || 0;
        
        if (data.chapter) {
            completedChapters.add(data.chapter);
        }

        totalTests++;
        const percentage = data.percentage || 0;
        totalPercentage += percentage;

        if (percentage > bestPercentage) {
            bestPercentage = percentage;
            bestChapter = data.chapter || "--";
        }

        // Safely handle Firestore Timestamps, regular JS Dates, or missing values
        let completedDate = "Just now";
        if (data.completedAt) {
            const dateObj = typeof data.completedAt.toDate === "function" 
                ? data.completedAt.toDate() 
                : new Date(data.completedAt);
            
            completedDate = isNaN(dateObj.getTime()) ? "Just now" : dateObj.toLocaleString();
        }

        const chapterName = data.chapter || "Unknown Chapter";
        const cbtType = data.cbt ? data.cbt.toUpperCase() : "";

        activityHTML += `
<div class="activity-box">
    <div class="activity-left">
        <h4>⚛ ${chapterName}</h4>
        <p>${cbtType}</p>
    </div>
    <div class="activity-right">
        <h3>${percentage}%</h3>
        <small>${completedDate}</small>
    </div>
</div>
`;
    });

    const average = totalTests > 0 ? (totalPercentage / totalTests).toFixed(2) : 0;

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
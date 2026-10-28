/* =====================================================
   Atomic Structure CBT
   Result Report Generator
===================================================== */
export function generateReport(
    score,
    studentData,
    userAnswers,
    questionTimeSpent,
    questions
) {
    // Ensure questions and studentData exist to prevent runtime errors
    const totalQuestions = Array.isArray(questions) ? questions.length : 0;
    const safeStudent = studentData || { name: "Student", roll: "N/A" };
    const safeAnswers = Array.isArray(userAnswers) ? userAnswers : [];

    // Generate analytics safely
    let analytics = typeof generateAnalytics === "function" 
        ? generateAnalytics(safeAnswers, questions) 
        : { level: "Standard Level", topicStats: {}, strongTopics: [], weakTopics: [], suggestions: [] };

    let attempted = safeAnswers.filter(x => x && x.length > 0).length;
    let incorrect = Math.max(0, attempted - score);
    
    let percentage = totalQuestions > 0 
        ? Math.round((score / totalQuestions) * 100) 
        : 0;

    let resultHTML = `
<div class="result-box">
    <h2>পরীক্ষার ফলাফল (Examination Result)</h2>
    <h3>${safeStudent.name}</h3>
    <p>Roll Number: ${safeStudent.roll}</p>
    <div class="score">${score} / ${totalQuestions}</div>
    <h3>Percentage: ${percentage}%</h3>
    <hr>
    <h3>Performance Level</h3>
    <p>${analytics.level || "Evaluated"}</p>
    <hr>
    <h3>Detailed Analysis (বিশ্লেষণ)</h3>
    <table border="1" width="100%" cellpadding="10">
        <tr>
            <th>Topic</th>
            <th>Correct</th>
            <th>Total</th>
            <th>Accuracy</th>
        </tr>
`;

    if (analytics.topicStats && Object.keys(analytics.topicStats).length > 0) {
        Object.keys(analytics.topicStats).forEach(topic => {
            let data = analytics.topicStats[topic];
            let acc = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
            resultHTML += `
        <tr>
            <td>${topic}</td>
            <td>${data.correct}</td>
            <td>${data.total}</td>
            <td>${acc}%</td>
        </tr>
`;
        });
    } else {
        resultHTML += `
        <tr>
            <td colspan="4" style="text-align: center;">No topic stats available.</td>
        </tr>
`;
    }

    resultHTML += `
    </table>
    <hr>
    <h3>আপনার শক্তিশালী বিষয় (Strong Areas)</h3>
    <ul>
`;

    if (analytics.strongTopics && analytics.strongTopics.length > 0) {
        analytics.strongTopics.forEach(topic => {
            resultHTML += `<li>${topic}</li>`;
        });
    } else {
        resultHTML += `<li>কোনো নির্দিষ্ট শক্তিশালী বিষয় চিহ্নিত করা যায়নি।</li>`;
    }

    resultHTML += `
    </ul>
    <h3>যে বিষয়গুলিতে আরও উন্নতি প্রয়োজন (Improvement Areas)</h3>
    <ul>
`;

    if (analytics.weakTopics && analytics.weakTopics.length > 0) {
        analytics.weakTopics.forEach(topic => {
            resultHTML += `<li>${topic}</li>`;
        });
    } else {
        resultHTML += `<li>কোনো দুর্বল বিষয় পাওয়া যায়নি। দুর্দান্ত!</li>`;
    }

    resultHTML += `
    </ul>
    <h3>ব্যক্তিগত পরামর্শ (Personal Suggestions)</h3>
    <ul>
`;

    if (analytics.suggestions && analytics.suggestions.length > 0) {
        analytics.suggestions.forEach(item => {
            resultHTML += `<li>${item}</li>`;
        });
    } else {
        resultHTML += `<li>Regular practice চালিয়ে যান।</li>`;
    }

    resultHTML += `
    </ul>
    <hr>
    <h3>JEE / NEET Preparation Advice</h3>
    <p>এই ফলাফল শুধুমাত্র এই Quiz-এর performance-এর উপর ভিত্তি করে তৈরি। নিয়মিত revision এবং numerical practice করলে উন্নতি সম্ভব।</p>
    <h3>Attempt Summary</h3>
    <p>Attempted: ${attempted}<br>Correct: ${score}<br>Incorrect: ${incorrect}</p>
</div>
`;

    const resultContentEl = document.getElementById("resultContent");
    if (resultContentEl) {
        resultContentEl.innerHTML = resultHTML;
    } else {
        console.warn("Element with ID 'resultContent' not found on this page.");
    }
}
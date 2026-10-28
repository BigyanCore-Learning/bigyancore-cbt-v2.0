import questions from "../data/atomic-structure/question-bank.js";
/* =====================================================
   Atomic Structure CBT
   Performance Analytics System
===================================================== */
function generateAnalytics(userAnswers) {
    let topicStats = {};

    if (!questions || questions.length === 0) {
        return {
            percentage: 0,
            level: "Needs More Practice ⭐⭐",
            topicStats: {},
            strongTopics: [],
            weakTopics: [],
            suggestions: ["No questions available for analysis."]
        };
    }

    questions.forEach((q, index) => {
        let topic = q.topic || "General";
        if (!topicStats[topic]) {
            topicStats[topic] = {
                total: 0,
                correct: 0
            };
        }
        topicStats[topic].total++;

        // Normalize user answers to an array and sort without mutating original data
        let rawUserAns = userAnswers[index] || [];
        let user = (Array.isArray(rawUserAns) ? [...rawUserAns] : [rawUserAns]).sort();

        // Normalize correct answers to an array and sort without mutating question bank
        let rawCorrectAns = q.answer || [];
        let correct = (Array.isArray(rawCorrectAns) ? [...rawCorrectAns] : [rawCorrectAns]).sort();

        if (JSON.stringify(user) === JSON.stringify(correct)) {
            topicStats[topic].correct++;
        }
    });

    let strongTopics = [];
    let weakTopics = [];

    Object.keys(topicStats).forEach(topic => {
        let data = topicStats[topic];
        let accuracy = data.total > 0 ? (data.correct / data.total) * 100 : 0;
        
        if (accuracy >= 75) {
            strongTopics.push(topic);
        } else if (accuracy < 50) {
            weakTopics.push(topic);
        }
    });

    let totalCorrect = 0;
    let totalQuestions = questions.length;

    Object.values(topicStats).forEach(item => {
        totalCorrect += item.correct;
    });

    let percentage = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
    let level = "";

    if (percentage >= 85) {
        level = "Excellent Foundation ⭐⭐⭐⭐⭐";
    } else if (percentage >= 70) {
        level = "Good Foundation ⭐⭐⭐⭐";
    } else if (percentage >= 50) {
        level = "Developing Level ⭐⭐⭐";
    } else {
        level = "Needs More Practice ⭐⭐";
    }

    let suggestions = [];
    weakTopics.forEach(topic => {
        switch (topic) {
            case "Quantum Numbers":
                suggestions.push("Quantum Numbers এবং Orbital ধারণা আরও অনুশীলন করুন।");
                break;
            case "Bohr Model":
                suggestions.push("Bohr Equation ও Hydrogen Spectrum-এর numerical practice করুন।");
                break;
            case "Electron Configuration":
                suggestions.push("Aufbau, Hund এবং Pauli rule পুনরাবৃত্তি করুন।");
                break;
            case "Shapes of Orbitals":
                suggestions.push("Orbital shape ও radial probability graph revise করুন।");
                break;
            default:
                suggestions.push(topic + " chapter-এর basic concept revise করুন।");
        }
    });

    if (suggestions.length === 0) {
        suggestions.push("আপনার দুর্বল কোনো নির্দিষ্ট topic পাওয়া যায়নি। Regular practice চালিয়ে যান।");
    }

    return {
        percentage,
        level,
        topicStats,
        strongTopics,
        weakTopics,
        suggestions
    };
}

export { generateAnalytics };
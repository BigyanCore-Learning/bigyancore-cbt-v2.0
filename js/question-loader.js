// A clean, scalable configuration map for dynamic imports
const questionBankMap = {
    "classification-periodicity": {
        cbt1: () => import("../data/classification-periodicity/cbt1-question-bank.js"),
        cbt2: () => import("../data/classification-periodicity/cbt2-question-bank.js"),
        cbt3: () => import("../data/classification-periodicity/cbt3-question-bank.js"),
        cbt4: () => import("../data/classification-periodicity/cbt4-question-bank.js"),
    },
    "atomic-structure": {
        cbt1: () => import("../data/atomic-structure/question-bank.js"),
        cbt2: () => import("../data/atomic-structure/cbt2-question-bank.js"),
        cbt3: () => import("../data/atomic-structure/cbt3-question-bank.js"),
        cbt4: () => import("../data/atomic-structure/cbt4-question-bank.js"),
        cbt5: () => import("../data/atomic-structure/cbt5-question-bank.js"),
        cbt6: () => import("../data/atomic-structure/cbt6-question-bank.js"),
    },
    "chemical-bonding": {
        cbt1: () => import("../data/chemical-bonding/cbt1-question-bank.js"),
        cbt2: () => import("../data/chemical-bonding/cbt2-question-bank.js"),
        cbt3: () => import("../data/chemical-bonding/cbt3-question-bank.js"),
        cbt4: () => import("../data/chemical-bonding/cbt4-question-bank.js"),
    }
};

export async function loadQuestions() {
    const currentChapter = localStorage.getItem("currentChapter") || "atomic-structure";
    const currentCBT = localStorage.getItem("currentCBT") || "cbt1";

    // Validate if chapter exists in the map
    if (!questionBankMap[currentChapter]) {
        throw new Error(`Unknown chapter: ${currentChapter}`);
    }

    // Validate if CBT exists for the selected chapter
    const cbtLoader = questionBankMap[currentChapter][currentCBT];
    if (!cbtLoader) {
        throw new Error(`CBT "${currentCBT}" is not configured for chapter "${currentChapter}".`);
    }

    try {
        const module = await cbtLoader();
        const questions = module.default || [];

        if (!Array.isArray(questions)) {
            throw new Error(`Question bank for ${currentChapter} (${currentCBT}) does not export a valid array.`);
        }

        console.log("Current Chapter:", currentChapter);
        console.log("Current CBT:", currentCBT);
        console.log("Questions Loaded:", questions.length);

        return questions;
    } catch (error) {
        console.error(`Failed to load question bank for ${currentChapter} / ${currentCBT}:`, error);
        throw error;
    }
}
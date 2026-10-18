
let questions = [];

export async function loadQuestions() {
    const currentCBT = localStorage.getItem("currentCBT") || "cbt1";

    if (currentCBT === "cbt1") {
        questions = (
            await import("../data/atomic-structure/question-bank.js")
        ).default;
    } else if (currentCBT === "cbt2") {
        questions = (
            await import("../data/atomic-structure/cbt2-question-bank.js")
        ).default;
    } else if (currentCBT === "cbt3") {
        questions = (
            await import("../data/atomic-structure/cbt3-question-bank.js")
        ).default;
    } else if (currentCBT === "cbt4") {
        questions = (
            await import("../data/atomic-structure/cbt4-question-bank.js")
        ).default;
    } else if (currentCBT === "cbt5") {
        questions = (
            await import("../data/atomic-structure/cbt5-question-bank.js")
        ).default;
    } else {
        questions = (
            await import("../data/atomic-structure/question-bank.js")
        ).default;
    }

    return questions;
}

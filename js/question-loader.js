let questions = [];

export async function loadQuestions() {

    const currentCBT =
        localStorage.getItem("currentCBT") || "cbt1";

    if (currentCBT === "cbt2") {

        questions =
            (await import("../data/atomic-structure/cbt2-question-bank.js")).default;

    } else {

        questions =
            (await import("../data/atomic-structure/question-bank.js")).default;

    }

    return questions;
}
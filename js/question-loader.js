
let questions = [];

export async function loadQuestions() {
    const currentChapter =
        localStorage.getItem("currentChapter") || "atomic-structure";

    const currentCBT =
        localStorage.getItem("currentCBT") || "cbt1";

    
    // Classification of Elements and Periodicity in Properties
    
if (currentChapter === "classification-periodicity") {
    if (currentCBT === "cbt1") {
        questions = (
            await import("../data/classification-periodicity/cbt1-question-bank.js")
        ).default;
    } else if (currentCBT === "cbt2") {
        questions = (
            await import("../data/classification-periodicity/cbt2-question-bank.js")
        ).default;
    } else if (currentCBT === "cbt3") {
        questions = (
            await import("../data/classification-periodicity/cbt3-question-bank.js")
        ).default;
    } else if (currentCBT === "cbt4") {
        questions = (
            await import("../data/classification-periodicity/cbt4-question-bank.js")
        ).default;
    } else {
        throw new Error(
            `CBT "${currentCBT}" is not configured for ${currentChapter}.`
        );
    }
}



    // Existing Atomic Structure question banks
     else if (currentChapter === "atomic-structure") {

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

        } else if (currentCBT === "cbt6") {
            questions = (
                await import("../data/atomic-structure/cbt6-question-bank.js")
            ).default;

        } else {
            throw new Error(`Unknown Atomic Structure CBT: ${currentCBT}`);
        }

    
    } else if (currentChapter === "chemical-bonding") {

        if (currentCBT === "cbt1") {
            questions = (
                await import("../data/chemical-bonding/cbt1-question-bank.js")
            ).default;

        } else {
            throw new Error(
                `CBT "${currentCBT}" is not configured for ${currentChapter}.`
            );
        }

    } else {
        throw new Error(`Unknown chapter: ${currentChapter}`);
    }


    console.log("Current Chapter:", currentChapter);
    console.log("Current CBT:", currentCBT);
    console.log("Questions Loaded:", questions.length);

    return questions;
}

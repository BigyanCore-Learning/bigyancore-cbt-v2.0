let questions = [];

export async function loadQuestions() {

    const currentCBT =
        localStorage.getItem("currentCBT") || "cbt1";
        localStorage.setItem("currentCBT","cbt2");
        localStorage.setItem("currentCBT","cbt3");
        window.location.href="chemistry.html";
if (currentCBT === "cbt1") {

    questions =
        (await import("../data/atomic-structure/question-bank.js")).default;

}
else if (currentCBT === "cbt2") {

    questions =
        (await import("../data/atomic-structure/cbt2-question-bank.js")).default;

}
else if (currentCBT === "cbt3") {

    questions =
        (await import("../data/atomic-structure/cbt3-question-bank.js")).default;

}
else {

    questions =
        (await import("../data/atomic-structure/question-bank.js")).default;
}; 
}
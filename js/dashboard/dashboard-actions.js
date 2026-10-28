
export function setupContinueButton(stats) {
    const button = document.getElementById("continueBtn");
    if (!button || !stats.latestQuiz) return;
    button.onclick = () => {
        const latestQuiz = stats.latestQuiz;
        const chapterMap = {
            "Structure of Atom": "atomic-structure",
            "Atomic Structure": "atomic-structure",
            "Classification of Elements and Periodicity in Properties":
                "classification-periodicity",
            "Chemical Bonding": "chemical-bonding",
            "Chemical Bonding and Molecular Structure": "chemical-bonding"
        };
        const chapterId = chapterMap[latestQuiz.chapter];
        if (!chapterId) {
            alert("Could not identify the chapter for this test result.");
            return;
        }
        localStorage.setItem("currentChapter", chapterId);
        localStorage.setItem("currentCBT", latestQuiz.cbt);
        window.location.href = `chapter.html?id=${chapterId}`;
    };
}
export function setupLogout(auth) {
    const logoutBtn = document.getElementById("logout-btn");
    if (!logoutBtn) return;
    logoutBtn.onclick = async () => {
        const { signOut } = await import(
            "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js"
        );
        await signOut(auth);
        window.location.href = "login.html";
    };
}
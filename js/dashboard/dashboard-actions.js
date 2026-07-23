export function setupContinueButton(stats){

    const button =
        document.getElementById("continueBtn");

    if(!stats.latestQuiz) return;

    button.onclick = () => {

        localStorage.setItem(
            "currentCBT",
            stats.latestQuiz.cbt
        );

        window.location.href =
            "chapter.html?id=atomic-structure";

    };

}

export function setupLogout(auth){

    const logoutBtn =
        document.getElementById("logout-btn");

    logoutBtn.onclick = async () => {

        const {
            signOut
        } = await import(
"https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js"
        );

        await signOut(auth);

        window.location.href =
            "login.html";

    };

}
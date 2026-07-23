import {

    setupContinueButton,

    setupLogout

} from "./dashboard-actions.js";
import {

    renderDashboard,

    renderContinueLearning

} from "./dashboard-ui.js";
import {

    setGreeting,

    setProfile,

    loadProfilePhoto

} from "./dashboard-profile.js";
import { calculateDashboardStats } from "./dashboard-stats.js";
import { auth, db } from "../../firebase/firebase-config.js";
import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

import {
    collection,
    getDocs,
    query,
    orderBy,
    limit
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

onAuthStateChanged(auth, async (user) => {

    if (!user) {

        window.location.href = "login.html";
        return;

    }

    console.log("Photo URL:", user.photoURL);

    setGreeting();

    setProfile(user);

    loadProfilePhoto(user.photoURL);

    // ===============================
    // Dashboard Analytics
    // ===============================

    const quizRef = collection(
        db,
        "students",
        user.uid,
        "quizResults"
    );

    const quizQuery = query(
        quizRef,
        orderBy("completedAt", "desc"),
        limit(5)
    );

    const snapshot = await getDocs(quizQuery);

    const dashboardStats =
        calculateDashboardStats(snapshot);

    console.log(dashboardStats);

    renderDashboard(dashboardStats);

    renderContinueLearning(dashboardStats);

    setupContinueButton(dashboardStats);

    setupLogout(auth);

});
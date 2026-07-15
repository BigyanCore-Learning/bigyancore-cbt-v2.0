import { auth, db } from "../firebase/firebase-config.js";
import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

const userName = document.getElementById("user-name");
const userEmail = document.getElementById("user-email");
const userPhoto = document.getElementById("user-photo");
const logoutBtn = document.getElementById("logout-btn");

onAuthStateChanged(auth, async  (user) => {

    if (user) {
        console.log("Photo URL:", user.photoURL);

        userName.textContent = `Welcome Back, ${user.displayName}`;
        userEmail.textContent = user.email;

        if (user.photoURL) {
            userPhoto.src = user.photoURL;
        }

    } else {

        window.location.href = "login.html";

    }

});

logoutBtn.addEventListener("click", async () => {

    await signOut(auth);

    window.location.href = "login.html";

});
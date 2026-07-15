import { saveUser } from "./firestore.js";
import { auth } from "./firebase-config.js";

import {
    GoogleAuthProvider,
    signInWithPopup
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

const provider = new GoogleAuthProvider();

const googleBtn = document.getElementById("google-login");

googleBtn.addEventListener("click", async () => {

    try{

        const result = await signInWithPopup(auth, provider);

        const user = result.user;

await saveUser(user);

window.location.href="dashboard.html";
    }

    catch(error){

        console.error(error);

        alert(error.message);

    }

});
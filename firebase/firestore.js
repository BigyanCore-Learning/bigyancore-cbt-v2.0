import { db } from "./firebase-config.js";

import {
    doc,
    getDoc,
    setDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

export async function saveUser(user){

    const userRef = doc(db,"students",user.uid);

    const snapshot = await getDoc(userRef);

    if(!snapshot.exists()){

        await setDoc(userRef,{
    uid: user.uid,
    name: user.displayName,
    email: user.email,
    photo: user.photoURL,

    createdAt: serverTimestamp(),
    lastLogin: serverTimestamp(),

    role: "student",
    board: "",
    class: "",

    // ==========================
    // Student Progress
    // ==========================

    xp: 0,
    level: 1,
    streak: 0,

    achievements: [],

    notesCompleted: [],

    practiceCompleted: [],

    chaptersCompleted: []

});

        console.log("New student created");

    }else{

        await setDoc(userRef,{
            lastLogin:serverTimestamp()
        },{merge:true});

        console.log("Student already exists");

    }

}
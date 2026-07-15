import { auth } from "../firebase/firebase-config.js";

import {
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

const studentName =
document.getElementById("student-name");

const studentEmail =
document.getElementById("student-email");

const resultPhoto =
document.getElementById("result-photo");

const scoreElement =
document.getElementById("score");

const percentageElement =
document.getElementById("percentage");

const gradeElement =
document.getElementById("grade");

onAuthStateChanged(auth,(user)=>{

if(!user){

window.location.href="login.html";

return;

}

studentName.textContent =
user.displayName;

studentEmail.textContent =
user.email;

if(user.photoURL){

resultPhoto.src =
user.photoURL;

}

});

const latestResult =
JSON.parse(
localStorage.getItem("latestResult")
);

if(latestResult){

scoreElement.textContent =
`${latestResult.score} / ${latestResult.totalQuestions}`;

percentageElement.textContent =
`${latestResult.percentage}%`;

if(latestResult.percentage>=90){

gradeElement.textContent =
"Excellent";

}else if(latestResult.percentage>=75){

gradeElement.textContent =
"Very Good";

}else if(latestResult.percentage>=60){

gradeElement.textContent =
"Good";

}else{

gradeElement.textContent =
"Needs Improvement";

}

}
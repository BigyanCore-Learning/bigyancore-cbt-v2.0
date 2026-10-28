import { quizConfig } from "./js/quiz-config.js";
import { loadQuestions } from "./js/question-loader.js";
import { saveQuizResult } from "./firebase/results.js";
import { auth } from "./firebase/firebase-config.js";
import {
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
let questions = [];
function checkStudentLogin() {
    return new Promise((resolve) => {
        let unsubscribe = null;
        let resolved = false;
        unsubscribe = onAuthStateChanged(auth, (user) => {
            if (resolved) return;
            resolved = true;
            if (unsubscribe) {
                unsubscribe();
            }        
            if (!user) {
                alert("Please sign in with Google before starting a test.");
                window.location.href = "login.html";
                resolve(false);
                return;
            }
            resolve(true);
        });
    });    
}
const isLoggedIn = await checkStudentLogin();
if (!isLoggedIn) {
    throw new Error("Test access requires Google sign-in.");
}
async function initializeQuiz() {
    questions = await loadQuestions();
}
await initializeQuiz();
const currentChapter =
    localStorage.getItem("currentChapter") || "atomic-structure";
const currentCBT =
    localStorage.getItem("currentCBT") || "cbt1";
const configKey =
    currentChapter === "atomic-structure"
        ? currentCBT
        : `${currentChapter}-${currentCBT}`;
const config = quizConfig[configKey];
if (!config) {
    throw new Error(`Quiz configuration not found: ${configKey}`);
}
document.getElementById("quizTitle").innerText =
    config.title;
document.getElementById("quizSubtitle").innerText =
    config.subtitle;
document.getElementById("quizDuration").innerText =
    `${config.duration} Minutes`;
document.getElementById("quizQuestions").innerText =
    `${config.totalQuestions} MCQs`;
document.getElementById("quizMarks").innerText =
    config.fullMarks;
const instructionList =
    document.getElementById("instructionList");
instructionList.innerHTML = "";
config.instructions.forEach(item => {
    instructionList.innerHTML += `
        <li>${item}</li>
    `;
});
console.log("Current CBT:", currentCBT);
console.log("Questions Loaded:", questions.length);
console.log("script.js loaded");
console.log("saveQuizResult =", saveQuizResult);
/* =====================================================
   Atomic Structure CBT System
   Main Quiz Engine
===================================================== */
// -------------------------
// Global Variables
// -------------------------
let currentQuestion = 0;
let userAnswers = [];
let markedQuestions = [];
let questionStartTime = [];
let questionTimeSpent = [];
let examStarted = false;
let totalSeconds = config.duration * 60;
// 60 minutes
let timerInterval;
let questionTimerInterval;
let currentQuestionSeconds = 0;
// -------------------------
// Student Data
// -------------------------
let studentData = {
    name:"",
    roll:""
};
// -------------------------
// Start Button
// -------------------------
document
.getElementById("startExamBtn")
.onclick=function(){
    let name =
    document.getElementById("studentName").value.trim();
    let roll =
    document.getElementById("rollNumber").value.trim();
    if(name==="" || roll===""){
        alert(
        "অনুগ্রহ করে নাম এবং রোল নম্বর লিখুন।\nPlease enter Name and Roll Number."
        );
        return;
    }
    studentData.name=name;
    studentData.roll=roll;
    document
    .getElementById("student-section")
    .classList.add("hidden");
    document
    .getElementById("instruction-section")
    .classList.remove("hidden");
};
// -------------------------
// Begin Exam
// -------------------------
document
.getElementById("beginBtn")
.onclick=function(){
    examStarted=true;
    userAnswers =
    Array(questions.length)
    .fill(null);
    markedQuestions =
    Array(questions.length)
    .fill(false);
    questionTimeSpent =
    Array(questions.length)
    .fill(0);
    document
    .getElementById("instruction-section")
    .classList.add("hidden");
    document
    .getElementById("exam-section")
    .classList.remove("hidden");
    createPalette();
    showQuestion(0);
    startExamTimer();
};
// -------------------------
// Exam Timer
// -------------------------
function startExamTimer(){
timerInterval=setInterval(()=>{
    totalSeconds--;
    let min=
    Math.floor(totalSeconds/60);
    let sec=
    totalSeconds%60;
    document
    .getElementById("examTimer")
    .innerHTML=
    `${String(min).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;
    if(totalSeconds<=0){
        clearInterval(timerInterval);
        submitExam();
    }
},1000);
}
// -------------------------
// Question Timer
// -------------------------
function recordCurrentQuestionTime() {
    if (
        questionTimeSpent[currentQuestion] !== undefined
    ) {
        questionTimeSpent[currentQuestion] += currentQuestionSeconds;
    }
    currentQuestionSeconds = 0;
}
function startQuestionTimer() {
    clearInterval(questionTimerInterval);
    currentQuestionSeconds = 0;
    questionTimerInterval = setInterval(() => {
        currentQuestionSeconds++;
        document.getElementById("questionTimer").innerHTML =
            formatTime(currentQuestionSeconds);
    }, 1000);
}
function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}
// -------------------------
// Display Question
// -------------------------
function showQuestion(index) {
    recordCurrentQuestionTime();
    clearInterval(questionTimerInterval);
    currentQuestion = index;
    let q = questions[index];
questionStartTime[index]=Date.now();
startQuestionTimer();
document
.getElementById("questionNumber")
.innerHTML=
`প্রশ্ন ${index+1} / ${questions.length}`;
document
.getElementById("questionCounter")
.innerHTML=
`${index+1} / ${questions.length}`;
document
.getElementById("questionText")
.innerHTML=
q.question;
let container=
document.getElementById("optionsContainer");
container.innerHTML="";
q.options.forEach((option,i)=>{
let type=
q.type==="multiple"
?"checkbox"
:"radio";
let checked="";
if(userAnswers[index] &&
userAnswers[index].includes(
String.fromCharCode(65+i)
)){
checked="checked";
}
container.innerHTML +=
`
<label class="option">
<input 
type="${type}"
name="answer"
value="${String.fromCharCode(65+i)}"
${checked}
>
${option}
</label>
`;
});
document
.getElementById("hintBox")
.classList.add("hidden");
document
.getElementById("hintBox")
.innerHTML=q.hint;
updateProgress();
updatePalette();
}
// -------------------------
// Save Answer
// -------------------------
function saveAnswer(){
let selected=
document
.querySelectorAll(
'input[name="answer"]:checked'
);
let answers=[];
selected.forEach(item=>{
answers.push(item.value);
});
userAnswers[currentQuestion]=answers;
updatePalette();
}
document
.getElementById("optionsContainer")
.addEventListener(
"change",
saveAnswer
);
// -------------------------
// Hint Button
// -------------------------
document.getElementById("hintBtn").onclick = function () {
    const box = document.getElementById("hintBox");
    const q = questions[currentQuestion];
    if (box.classList.contains("hidden")) {
        box.textContent =
            q.hint || q.explanation || "এই প্রশ্নের জন্য কোনো hint দেওয়া নেই।";
        box.classList.remove("hidden");
    } else {
        box.classList.add("hidden");
    }
};
// -------------------------
// Navigation
// -------------------------
document
.getElementById("nextBtn")
.onclick=function(){
saveAnswer();
if (currentQuestion < questions.length - 1) {
    showQuestion(currentQuestion + 1);
}
};
document
.getElementById("previousBtn")
.onclick=function(){
saveAnswer();
if(currentQuestion>0){
showQuestion(currentQuestion-1);
}
};
// -------------------------
// Mark for Review
// -------------------------
document
.getElementById("markBtn")
.onclick=function(){
markedQuestions[currentQuestion]
=
!markedQuestions[currentQuestion];
updatePalette();
};
// -------------------------
// Question Palette
// -------------------------
function createPalette(){
let palette=
document.getElementById(
"questionPalette"
);
palette.innerHTML="";
questions.forEach((q,i)=>{
let btn=
document.createElement("button");
btn.innerHTML=i+1;
btn.className="palette-btn";
btn.onclick=function(){
saveAnswer();
showQuestion(i);
};
palette.appendChild(btn);
});
}
function updatePalette(){
let buttons=
document
.querySelectorAll(
".palette-btn"
);
buttons.forEach((btn,i)=>{
btn.className="palette-btn";
if(userAnswers[i]
&& userAnswers[i].length>0){
btn.classList.add(
"answered"
);
}
if(markedQuestions[i]){
btn.classList.add(
"review"
);
}
});
}
function updateProgress(){
let answered=
userAnswers.filter(
x=>x && x.length>0
).length;
let percent=
(answered/questions.length)*100;
document
.getElementById("progressBar")
.style.width=
percent+"%";
}
// -------------------------
// Submit Exam
// -------------------------
document
.getElementById("submitBtn")
.onclick=function(){
let confirmSubmit=
confirm(
"আপনি কি পরীক্ষা জমা দিতে চান?\nDo you want to submit?"
);
if(confirmSubmit){
submitExam();
}
};
async function submitExam() {
    recordCurrentQuestionTime();
    clearInterval(timerInterval);
    clearInterval(questionTimerInterval);
    saveAnswer();
    let score = 0;
    // JEE/NEET-style marking: +4 correct, -1 incorrect, 0 unanswered
    questions.forEach((q, i) => {
        let correct;
        if (typeof q.correctAnswer === "number") {
            correct = [String.fromCharCode(65 + q.correctAnswer)];
        } else if (Array.isArray(q.correctAnswer)) {
            correct = q.correctAnswer
                .map(answer =>
                    typeof answer === "number"
                        ? String.fromCharCode(65 + answer)
                        : String(answer)
                )
                .sort();
        } else if (Array.isArray(q.answer)) {
            // Legacy CBT1/CBT2 answer format
            correct = [...q.answer].sort();
        } else {
            console.error("Invalid answer format for question:", q.id);
            return;
        }
        const given = [...(userAnswers[i] || [])].sort();
        // Unanswered: 0 marks
        if (given.length === 0) {
            return;
        }
        // Correct: +4; incorrect: -1
        if (JSON.stringify(given) === JSON.stringify(correct)) {
            score += 4;
        } else {
            score -= 1;
        }
    });
    // Maximum marks: 4 marks per question
    const totalMarks = questions.length * 4;
    // Keep the raw score, including any negative score.
    // Clamp percentage to 0–100 for display.
    const percentage = Number(
        Math.max(0, Math.min(100, (score / totalMarks) * 100)).toFixed(2)
    );
    // Calculate actual elapsed exam time
    const timeTaken = Math.max(
        0,
        (config.duration * 60) - totalSeconds
    );
    // Save result locally
    localStorage.setItem(
        "latestResult",
        JSON.stringify({
            score: score,
            totalQuestions: questions.length,
            totalMarks: totalMarks,
            percentage: percentage,
            chapterId: localStorage.getItem("currentChapter") || "atomic-structure"
        })
    );
    // Save result to Firebase
    try {
        await saveQuizResult({
            subject: "Chemistry",
            chapter:
    localStorage.getItem("currentChapter") === "classification-periodicity"
        ? "Classification of Elements and Periodicity in Properties"
        : localStorage.getItem("currentChapter") === "chemical-bonding"
            ? "Chemical Bonding and Molecular Structure"
            : "Structure of Atom",
            cbt: currentCBT,
            score: score,
            totalQuestions: questions.length,
            totalMarks: totalMarks,
            percentage: percentage,
            timeTaken: timeTaken,
            questionTimeSpent: questionTimeSpent
        });
        console.log("Quiz result saved.");
    } catch (error) {
        console.error("Quiz result save failed:", error);
    }
    // Generate report
    try {
        if (typeof generateReport === "function") {
            generateReport(
                score,
                studentData,
                userAnswers,
                questionTimeSpent
            );
        }
    } catch (error) {
        console.error("Report generation failed:", error);
    }
    window.location.href = "result.html";
}
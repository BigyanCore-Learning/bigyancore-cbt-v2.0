import { db } from "../firebase/firebase-config.js";

import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

export function calculateCBTStats(snapshot){

    const cbtStats = {

        cbt1:{
            attempts:0,
            bestScore:0,
            bestPercentage:0,
            latestScore:0,
            latestAttempt:null,
            totalTime:0
        },

        cbt2:{
            attempts:0,
            bestScore:0,
            bestPercentage:0,
            latestScore:0,
            latestAttempt:null,
            totalTime:0
        }

    };

    snapshot.forEach(doc=>{

        const result=doc.data();

        if(result.cbt!=="cbt1" && result.cbt!=="cbt2"){
            return;
        }

        cbtStats[result.cbt].attempts++;

        if(result.score>cbtStats[result.cbt].bestScore){
            cbtStats[result.cbt].bestScore=result.score;
        }

        if(result.percentage>cbtStats[result.cbt].bestPercentage){
            cbtStats[result.cbt].bestPercentage=result.percentage;
        }

    });

    return cbtStats;

}
export async function getQuizResults(uid){

    const quizRef = collection(
        db,
        "students",
        uid,
        "quizResults"
    );

    const snapshot = await getDocs(quizRef);

    return snapshot;

}
export function calculateChapterStats(snapshot){

    const chapterStats = {

        totalTime: 0,

        bestScore: 0,

        questionsSolved: 0,

        notesProgress: 0

    };

    snapshot.forEach(doc=>{

        const result = doc.data();

        chapterStats.totalTime += result.timeTaken || 0;

        chapterStats.questionsSolved += result.totalQuestions || 0;

        if(result.score > chapterStats.bestScore){

            chapterStats.bestScore = result.score;

        }

    });

    return chapterStats;

}
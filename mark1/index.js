const readLineSync = require("readline-sync");

let userName = readLineSync.question("Enter your name here:");
userName = userName.toUpperCase();
console.log(`Hello ${userName}, Do you know Jamal? try to answer some Questions..`)
console.log("")
let start = readLineSync.question("Press Enter to continue...")
let score = 0;
function play(q,a){
    var userAnswer = readLineSync.question(q);
    if(userAnswer === a){
        console.log("Correct Answer!")
        score++;
    }else {
        console.log("Wrong Answer..")
        score = score-0.25;
    }
}
var questions = {
    "what is my full name?": "Md JamalUddin Ansari",
    "where do I live?": "Giridih",
    "what is my nationality?": "Indian"
}

for(var question in questions){
    play(question,questions[question]);
}
console.log(`Hey ${userName} your score is: ${score}`);
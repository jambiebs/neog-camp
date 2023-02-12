const readLineSync = require("readline-sync");
score = 0;
var userName = readLineSync.question("Please Enter Your Name:")
function welcome() {
  console.log("");
  console.log(`Hello ${userName.toUpperCase()}, Hope your are doing well!`);
  console.log("");
  console.log("Welcome to Jamal's quiz about General Science, in this quiz there is negative marking of 1/4 for wrong answers. You are not required to type the full answer, instead type the option like A, B, C, D. Make sure that you type it in Capital letters or it may result in wrong answer.");
  console.log("")
  console.log("HINT: Turn on the CapsLock ")
  console.log("Good Luck!!!!")
  console.log("");
  var start = readLineSync.question("Press Enter to start the quiz!");
  console.log("");
}
function play(q, o1, o2, o3, o4, a) {
  console.log(q);
  console.log("");
  console.log(o1);
  console.log(o2);
  console.log(o3);
  console.log(o4);
  console.log("");
  var userAnswer = readLineSync.question("Enter your Answer:");
  userAnswer = userAnswer.toUpperCase();
  if (userAnswer === a) {
    console.log("Correct Answer!")
    score++;
    console.log("Score:", score);
  } else {
    console.log("Wrong Answer..")
    score = score - 0.25
    console.log("Score:", score);
  }
  console.log("-----------------------------------------------")
}
var questions = [
  {
    question: "1.Which of the following is the first calculating device?",
    option1: "A.Abacus",
    option2: "B.Calculator",
    option3: "C.Turing Machine",
    option4: "D.Pascaline",
    answer: "A",
  },
  {
    question: "2.Who invented mechanical calculator called Pascaline?",
    option1: "A.Charles Babbage",
    option2: "B.Blaise Pascal",
    option3: "C.Alan Turing",
    option4: "D.Lee De Forest",
    answer: "B",
  },
  {
    question: "3.Who among the following considered as the 'father of artificial intelligence'?",
    option1: "A.Charles Babbage",
    option2: "B.Lee De Forest",
    option3: "C.John McCarthy",
    option4: "D.JP Eckert",
    answer: "C"
  },
  {
    question: "4.Which was the world's first successful electronic computer?",
    option1: "A.PARAM",
    option2: "B.CRAY-1",
    option3: "C.Pascaline",
    option4: "D.ENIAC electronic Numerical Integrator and computer",
    answer: "D"
  },
  {
    question: "5. Who among the following used the term computer worm for the first time?",
    option1: "A.John Brunner",
    option2: "B.Alan Turing",
    option3: "C.John McCarthy",
    option4: "D.JP Eckert",
    answer: "A"
  },
  // {
  //     question: "6.",
  //     option1: "A.",
  //     option2: "B.",
  //     option3: "C.",
  //     option4: "D.",
  //     answer: ""
  // },
  // {
  //     question: "7.",
  //     option1: "A.",
  //     option2: "B.",
  //     option3: "C.",
  //     option4: "D.",
  //     answer: ""
  // },
  // {
  //     question: "8.",
  //     option1: "A.",
  //     option2: "B.",
  //     option3: "C.",
  //     option4: "D.",
  //     answer: ""
  // },
  // {
  //     question: "9.",
  //     option1: "A.",
  //     option2: "B.",
  //     option3: "C.",
  //     option4: "D.",
  //     answer: ""
  // },
  // {
  //     question: "10.",
  //     option1: "A.",
  //     option2: "B.",
  //     option3: "C.",
  //     option4: "D.",
  //     answer: ""
  // },
];
function game(){
for (var i = 0; i < questions.length; i++) {
  currentQ = questions[i];
  play(currentQ.question, currentQ.option1, currentQ.option2, currentQ.option3, currentQ.option4, currentQ.answer);
}
}
function showScore(){
console.log("Hey",userName.toUpperCase(),"Your final score is:", score);
}

welcome();
game();
showScore();
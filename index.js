//installing chalk
var chalk = require("chalk");

//installing readlineSync
var readlineSync = require("readline-sync");


var userName = readlineSync.question("What is your name? ");
console.log();
console.log(chalk.yellowBright("Hello",userName));
console.log();
console.log(chalk.yellowBright("Welcome to DECODE_IT!"));
console.log("----------------------");
console.log(chalk.blueBright("Instructions - Type your answer without using capital letters and use space between words."));
console.log("----------------------");
var score = 0;

//Function Defination

function play(question,answer)
{
  var userAnswer = readlineSync.question(chalk.cyanBright.bold(question));
  if(userAnswer === answer)
  {
    console.log(chalk.greenBright("Right!"));
    score++;
  }
  else
  {
    console.log(chalk.redBright("Wrong!"));
  }
  console.log("----------------------");
}

//Array Creation - Array of objects

var questions = [{
    question : "What is the full form of API? ",
    answer : "application programming interface"
  },{
    question : "What is the full form of ASP? ",
    answer : "active server page"
},{
    question : "What is the full form of AJAX? ",
    answer : "asynchronous javascript and xml"
},{
    question : "What is the full form of DNS? ",
    answer : "domain name system"
},{
    question : "What is the full form of HTTP? ",
    answer : "hyper text transfer protocol"
},{
    question : "What is the full form of RIP? ",
    answer : "routing information protocol"
},{
    question : "What is the full form of SMS? ",
    answer : "short message service"
},{
    question : "What is the full form of APK? ",
    answer : "android application package"
}];

for(var i = 0;i<questions.length;i++)
{
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}

console.log("Your final score : ",chalk.hex('#FBBF24').bold(score));






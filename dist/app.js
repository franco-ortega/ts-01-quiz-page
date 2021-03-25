import { confirmQuiz, countsAsYes, question } from './utils.js';
var startButton = document.querySelector('button');
var results = document.getElementById('results');
var quizScore = 0;
console.log(quizScore);
startButton.addEventListener('click', function () {
    console.log('Button was clicked!');
    if (!confirmQuiz()) {
        alert('Try again anytime!');
    }
    else {
        var userName = prompt('What is your name?');
        var questionOne = "Hey " + userName + "! Does Lavinia get married?";
        var questionTwo = "How about this one, " + userName + ". Is the new found city called Lantuma?";
        var questionThree = "One more to go, " + userName + "! Does Lavinia turn into a cat?";
        var answerOne = question(userName, questionOne);
        var scoreOne = countsAsYes(answerOne);
        console.log(userName);
        console.log(answerOne);
        console.log(scoreOne);
        if (scoreOne) {
            quizScore++;
        }
        ;
        console.log(quizScore);
        var answerTwo = question(userName, questionTwo);
        var scoreTwo = countsAsYes(answerTwo);
        console.log(answerTwo);
        console.log(scoreTwo);
        if (scoreTwo) {
            quizScore++;
        }
        console.log(quizScore);
        var answerThree = question(userName, questionThree);
        var scoreThree = countsAsYes(answerThree);
        console.log(answerThree);
        console.log(scoreThree);
        if (!scoreThree) {
            quizScore++;
        }
        console.log(quizScore);
    }
    ;
});

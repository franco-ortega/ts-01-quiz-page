import { confirmQuiz, countsAsYes, question } from './utils.js';
var startButton = document.querySelector('button');
var results = document.getElementById('results');
var quizScore = 0;
console.log(quizScore);
startButton.addEventListener('click', function () {
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
        if (scoreOne) {
            quizScore++;
        }
        ;
        var answerTwo = question(userName, questionTwo);
        var scoreTwo = countsAsYes(answerTwo);
        if (scoreTwo) {
            quizScore++;
        }
        ;
        var answerThree = question(userName, questionThree);
        var scoreThree = countsAsYes(answerThree);
        if (!scoreThree) {
            quizScore++;
        }
        ;
        results.textContent = "Your score is " + String(quizScore) + " out of 3 for " + String(quizScore / 3 * 100) + "%.";
        console.log(quizScore);
        quizScore = 0;
    }
    ;
});

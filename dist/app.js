import { confirmQuiz, countsAsYes, questionOne } from './utils.js';
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
        var answerOne = questionOne(userName);
        var scoreOne = countsAsYes(answerOne);
        console.log(userName);
        console.log(answerOne);
        console.log(scoreOne);
        if (scoreOne) {
            quizScore++;
        }
        ;
        console.log(quizScore);
    }
    ;
});

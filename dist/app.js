import { confirmQuiz, countsAsYes, question, completeQuiz, quizResults } from './utils.js';
var startButton = document.querySelector('button');
var results = document.getElementById('results');
var quizScore = 0;
startButton.addEventListener('click', function () {
    if (!confirmQuiz()) {
        alert('Try again anytime!');
    }
    else {
        var userName = prompt('What is your name?');
        var questionOne = "Hey " + userName + "! Does Lavinia get hitched?";
        var questionTwo = "How about this one, " + userName + ". Is the new found city called Lantuma?";
        var questionThree = "One more to go, " + userName + "! Does Lavinia turn into a cat?";
        var answerOne = question(questionOne);
        var yes = countsAsYes(answerOne);
        if (yes)
            quizScore++;
        var answerTwo = question(questionTwo);
        yes = countsAsYes(answerTwo);
        if (!yes)
            quizScore++;
        var answerThree = question(questionThree);
        yes = countsAsYes(answerThree);
        if (!yes)
            quizScore++;
        completeQuiz(userName);
        results.textContent = quizResults(userName, quizScore);
        quizScore = 0;
    }
    ;
});

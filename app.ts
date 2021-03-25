import { confirmQuiz, countsAsYes, questionOne } from './utils.js';

const startButton = document.querySelector('button') as HTMLButtonElement;
const results = document.getElementById('results') as HTMLElement;

let quizScore = 0;
console.log(quizScore);

startButton.addEventListener<'click'>('click', () => {
console.log('Button was clicked!')

    if(!confirmQuiz()) {
        alert('Try again anytime!');
    } else {
        const userName: string = prompt('What is your name?');
        const answerOne: string = questionOne(userName);
        const scoreOne: boolean = countsAsYes(answerOne);

console.log(userName);
console.log(answerOne);
console.log(scoreOne);

        if(scoreOne) {
            quizScore++;
        };

console.log(quizScore);

    };


});

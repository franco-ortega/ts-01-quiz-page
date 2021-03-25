import { confirmQuiz, countsAsYes, question } from './utils.js';

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

        const questionOne = `Hey ${userName}! Does Lavinia get married?`;
        const questionTwo = `How about this one, ${userName}. Is the new found city called Lantuma?`;
        const questionThree = `One more to go, ${userName}! Does Lavinia turn into a cat?`;

        const answerOne: string = question(userName, questionOne);
        const scoreOne: boolean = countsAsYes(answerOne);

console.log(userName);
console.log(answerOne);
console.log(scoreOne);

        if(scoreOne) {
            quizScore++;
        };

console.log(quizScore);

        const answerTwo: string = question(userName, questionTwo);
        const scoreTwo: boolean = countsAsYes(answerTwo);

console.log(answerTwo);
console.log(scoreTwo);
        

        if(scoreTwo) {
            quizScore++;
        }

console.log(quizScore);

        const answerThree: string = question(userName, questionThree);
        const scoreThree: boolean = countsAsYes(answerThree);

console.log(answerThree);
console.log(scoreThree);
        

        if(!scoreThree) {
            quizScore++;
        }

console.log(quizScore);

    };


});

import { confirmQuiz, countsAsYes, question, completeQuiz } from './utils.js';

const startButton = document.querySelector('button') as HTMLButtonElement;
const results = document.getElementById('results') as HTMLElement;

let quizScore = 0;
console.log(quizScore);


startButton.addEventListener<'click'>('click', () => {
    if(!confirmQuiz()) {
        alert('Try again anytime!');
    } else {
        const userName: string = prompt('What is your name?');

        const questionOne = `Hey ${userName}! Does Lavinia get married?`;
        const questionTwo = `How about this one, ${userName}. Is the new found city called Lantuma?`;
        const questionThree = `One more to go, ${userName}! Does Lavinia turn into a cat?`;

        const answerOne: string = question(userName, questionOne);
        let yes: boolean = countsAsYes(answerOne);

        if(yes) {
            quizScore++;
        };

        const answerTwo: string = question(userName, questionTwo);
        yes = countsAsYes(answerTwo);

        if(yes) {
            quizScore++;
        };

        const answerThree: string = question(userName, questionThree);
        yes = countsAsYes(answerThree);

        if(!yes) {
            quizScore++;
        };

        completeQuiz(userName);


        results.textContent = `Your score is ${String(quizScore)} out of 3 for ${String(quizScore / 3 * 100)}%.`;

console.log(quizScore);

        quizScore = 0;


    };


});

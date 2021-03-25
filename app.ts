import { confirmQuiz, countsAsYes, question, completeQuiz, quizResults } from './utils.js';

const startButton = document.querySelector('button') as HTMLButtonElement;
const results = document.getElementById('results') as HTMLElement;

let quizScore = 0;

startButton.addEventListener<'click'>('click', () => {
    if(!confirmQuiz()) {
        alert('Try again anytime!');
    } else {
        const userName: string = prompt('What is your name?');

        const questionOne: string = `Hey ${userName}! Does Lavinia get married?`;
        const questionTwo: string = `How about this one, ${userName}. Is the new found city called Lantuma?`;
        const questionThree: string = `One more to go, ${userName}! Does Lavinia turn into a cat?`;

        const answerOne: string = question(userName, questionOne);
        let yes: boolean = countsAsYes(answerOne);

        if(yes) {
            quizScore++;
        };

        const answerTwo: string = question(userName, questionTwo);
        yes = countsAsYes(answerTwo);

        if(!yes) {
            quizScore++;
        };

        const answerThree: string = question(userName, questionThree);
        yes = countsAsYes(answerThree);

        if(!yes) {
            quizScore++;
        };

        completeQuiz(userName);

        results.textContent = quizResults(userName, quizScore);

console.log(quizScore);

        quizScore = 0;
    };
});

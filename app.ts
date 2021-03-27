import { confirmQuiz, countsAsYes, question, completeQuiz, quizResults } from './utils.js';

const startButton = document.querySelector('button') as HTMLButtonElement;
const results = document.getElementById('results') as HTMLElement;

startButton.addEventListener<'click'>('click', (): void => {
    let quizScore: number = 0;
    let yes: boolean;

    if(!confirmQuiz()) {
        alert('Try again anytime!');
    } else {
        const userName: string = prompt('What is your name?');
        
        const questionOne: string = `Hey ${userName}! Does Lavinia get married?`;
        const questionTwo: string = `How about this one, ${userName}. Is the new found city called Lantuma?`;
        const questionThree: string = `One more to go, ${userName}! Does Lavinia turn into a cat?`;

        const answerOne: string = question(questionOne);
        yes = countsAsYes(answerOne);
        if(yes) quizScore++;

        const answerTwo: string = question(questionTwo);
        yes = countsAsYes(answerTwo);
        if(!yes) quizScore++;

        const answerThree: string = question(questionThree);
        yes = countsAsYes(answerThree);
        if(!yes) quizScore++;

        completeQuiz(userName);

        results.textContent = quizResults(userName, quizScore);
    };
});

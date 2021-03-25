import { confirmQuiz } from './utils.js';

const startButton = document.querySelector('button') as HTMLButtonElement;
const results = document.getElementById('results') as HTMLElement;

console.log(startButton);
console.log(results);
console.log(confirmQuiz);


startButton.addEventListener<'click'>('click', () => {
    console.log('Button was clicked!')

    if(!confirmQuiz()) {
        alert('Try again anytime!');
    } else {
        const userName: string = prompt('What is your name?');
    };


});

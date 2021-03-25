import { confirmQuiz } from './utils.js';
var startButton = document.querySelector('button');
var results = document.getElementById('results');
console.log(startButton);
console.log(results);
console.log(confirmQuiz);
startButton.addEventListener('click', function () {
    console.log('Button was clicked!');
    confirmQuiz();
});

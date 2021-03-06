var confirmQuiz = function () {
    return confirm('Do you want to proceed?');
};
var countsAsYes = function (reply) {
    if (reply.charAt(0).toUpperCase() === 'Y') {
        return true;
    }
    else {
        return false;
    }
    ;
};
var question = function (question) {
    return prompt(question);
};
var completeQuiz = function (userName) {
    return alert("Congratulations, " + userName + ", you have completed the quiz.");
};
var calculatePercentage = function (score) {
    return Math.floor(score / 3 * 100);
};
var quizResults = function (userName, score) {
    if (score === 3) {
        return "Congratulations, " + userName + "! You correctly answered all " + score + " out of 3 for " + calculatePercentage(score) + "%!!";
    }
    else if (score === 2) {
        return "Good job, " + userName + "! You correctly answered " + score + " out of 3 for " + calculatePercentage(score) + "%.";
    }
    else if (score === 1) {
        return "Good try, " + userName + ". You correctly answered " + score + " out of 3 for " + calculatePercentage(score) + "%.";
    }
    else {
        return "You correctly answered " + score + " out of 3 for " + calculatePercentage(score) + "%. Better luck next time, " + userName + ".";
    }
    ;
};
export { confirmQuiz, question, countsAsYes, completeQuiz, quizResults };

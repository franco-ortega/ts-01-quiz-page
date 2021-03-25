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
var questionOne = function (userName) {
    return prompt("Hey " + userName + "! Does Lavinia get married?");
};
export { confirmQuiz, questionOne, countsAsYes };

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
var question = function (userName, question) {
    return prompt("Hey " + userName + "! Does Lavinia get married?");
};
export { confirmQuiz, question, countsAsYes };

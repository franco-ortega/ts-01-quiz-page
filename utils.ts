const confirmQuiz = (): boolean => {
    return confirm('Do you want to proceed?')
};

const countsAsYes = (reply: string): boolean => {
    if(reply.charAt(0).toUpperCase() === 'Y') {
        return true;
    } else {
        return false;
    };
};

const question = (userName: string, question: string): string => {
    return prompt(`Hey ${userName}! Does Lavinia get married?`);
};

const completeQuiz = (userName: string): void => {
    return alert(`Congratulations, ${userName}, you have completed the quiz.`)
};

const quizResults = (userName: string, score: number): string => {
    if(score === 3) {
        return `Congratulations, ${userName}! You correctly answered all ${score} out of 3 for ${Math.floor(score / 3 * 100)}%!!`;
    } else if(score === 2) {
        return `Good job, ${userName}! You correctly answered ${score} out of 3 for ${Math.floor(score / 3 * 100)}%.`;
    } else if(score === 1) {
        return `Good try, ${userName}. You correctly answered ${score} out of 3 for ${Math.floor(score / 3 * 100)}%.`;
    } else {
        return `You correctly answered ${score} out of 3 for ${Math.floor(score / 3 * 100)}%. Better luck next time, ${userName}.`;
    };
};

export {
    confirmQuiz,
    question,
    countsAsYes,
    completeQuiz,
    quizResults
};

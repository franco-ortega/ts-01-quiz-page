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

const question = (question: string): string => {
    return prompt(question);
};

const completeQuiz = (userName: string): void => {
    alert(`Congratulations, ${userName}, you have completed the quiz.`);
};

const calculatePercentage = (score: number): number => {
    return Math.floor(score / 3 * 100);
};

const quizResults = (userName: string, score: number): string => {
    if(score === 3) {
        return `Congratulations, ${userName}! You correctly answered all ${score} out of 3 for ${calculatePercentage(score)}%!!`;
    } else if(score === 2) {
        return `Good job, ${userName}! You correctly answered ${score} out of 3 for ${calculatePercentage(score)}%.`;
    } else if(score === 1) {
        return `Good try, ${userName}. You correctly answered ${score} out of 3 for ${calculatePercentage(score)}%.`;
    } else {
        return `You correctly answered ${score} out of 3 for ${calculatePercentage(score)}%. Better luck next time, ${userName}.`;
    };
};

export {
    confirmQuiz,
    question,
    countsAsYes,
    completeQuiz,
    quizResults
};

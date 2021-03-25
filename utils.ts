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

export {
    confirmQuiz,
    question,
    countsAsYes
};

import { useState, useCallback } from 'react';

import QUESTIONS from '../questions';
import Questions from '../components/Question';
import Summary from './Summary';

export default function Quiz() {
    const [answers, setAnswers] = useState([]);

    const activeQuestionIndex = answers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(
        selectedAnswer
    ) {
        setAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);
    },
    []);

    const handleSkipAnswer = useCallback(
        () => handleSelectAnswer(null),
        [handleSelectAnswer]
    );

    if (quizIsComplete) {
        return <Summary userAnswers={answers} />;
    }

    return (
        <div id="quiz">
            <Questions
                key={activeQuestionIndex}
                questionIndex={activeQuestionIndex}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
        </div>
    );
}

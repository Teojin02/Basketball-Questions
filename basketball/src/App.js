import React, { useState } from "react";

export default function App () {
    const questions = [
        {
            questionsText: "Who has the most rings in the nba?",
            answerOptions: [
                {answerText: 'Bill Russel', isCorrect: true},
                {answerText: 'Micheal Jordan', isCorrect: false},
                {answerText: 'Kobe Bryant', isCorrect: false},
                {answerText: 'Magic Johnson ', isCorrect: false},
            ],
        },

        {
            questionsText: "Who scored the most points in the nba?",
            answerOptions: [
                {answerText: 'Lebron James', isCorrect: false},
                {answerText: 'Karl Malone', isCorrect: false},
                {answerText: ' Kobe Bryant', isCorrect: false},
                {answerText: 'Kareem Abdul-Jabbar', isCorrect: true},
            ],
        },
          {
            questionsText: "Who has the most assist ",
            answerOptions: [
                {answerText: 'Lebron James', isCorrect: false},
                {answerText: 'Micheal Jordan', isCorrect: false},
                {answerText: 'John Stockton', isCorrect: true},
                {answerText: 'Magic Johnson ', isCorrect: false},
            ],
        },
    ];

const [currentQuestions, setCurrentQuestions]= useState (0);
const [showScore, setShowScore] = useState(false);
const [score, setScore] = useState(0);

const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect){
        setScore(score + 1);
    }

    const nextQuestion = currentQuestions + 1;
    if (nextQuestion < questions.length) {
        setCurrentQuestions(nextQuestion);
    }else {
        setShowScore(true);
    }
};

return (
    <div className="app">
        {showScore ? (
            <div className="score-section">
                You Scored {score} out of 3
            </div>
        ) : (
            <>
            <div className="question-section">
                <div className= "question-count">
        <span>Question {currentQuestions + 1}</span>/{questions.lenth}
                </div>
        <div className="questions-text">{questions[currentQuestions].questionsText}</div>
            </div>
            <div className="answer-section">
                {questions[currentQuestions].answerOptions.map((answerOptions) => (
                    <button onClick={() => handleAnswerOptionClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>

                ))}
            </div>
            </>
        )}
    </div>








);



} 


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
          {
            questionsText: "When did Micheal Jordan won his first MPV ?",
            answerOptions: [
                {answerText: '1985-86', isCorrect: false},
                {answerText: '1992-1993', isCorrect: false},
                {answerText: '1987-88', isCorrect: true},
                {answerText: '1998-99', isCorrect: false},
            ],
        },
          {
            questionsText: "Who invented basketball?",
            answerOptions: [
                {answerText: 'Micheal Jordan', isCorrect: false},
                {answerText: 'Adam Silver', isCorrect: false},
                {answerText: 'Tyrone Corbin', isCorrect: false},
                {answerText: 'James Naismith', isCorrect: true},
            ],
        },
          {
            questionsText: "Who won the NBA championship in 2016?",
            answerOptions: [
                {answerText: 'Cleveland Cavaliers', isCorrect: true},
                {answerText: 'Golden State Warriors', isCorrect: false},
            ],
        },
           {
            questionsText: "Who's the Greatest Player Of All Time?",
            answerOptions: [
                {answerText: 'Lebron James', isCorrect: true},
                {answerText: 'Kobe Bryant', isCorrect: true},
                {answerText: 'Micheal Jordan', isCorrect: true},
                {answerText: "shaquille O'neal", isCorrect: true},
            ],
        },
           {
            questionsText: "Who was the first player to be drafted in the NBA",
            answerOptions: [
                {answerText: 'Dan Gadzuric', isCorrect: false},
                {answerText: 'Clifton McNeeley', isCorrect: true},
                {answerText: 'Tyrone Corbin', isCorrect: false},
                {answerText: 'Earl Lloyd', isCorrect: false},
            ],
        },
           {
            questionsText: "Who wom the dunk const back in 2016?",
            answerOptions: [
                {answerText: 'Zach Lavine', isCorrect: true},
                {answerText: 'Aaron Gordon', isCorrect: false},
            ],
        },
           {
            questionsText: "Who won rookie of the year 2020?",
            answerOptions: [
                {answerText: 'Zion Williamson', isCorrect: false},
                {answerText: 'Brandon Clarke', isCorrect: false},
                {answerText: 'Ja Morant', isCorrect: true},
                {answerText: 'Kendrick Nunn', isCorrect: false},
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
                You Scored {score} out of 10
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


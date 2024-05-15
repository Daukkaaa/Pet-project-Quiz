import React, { useState } from "react";
import { questions } from "./Questions.js";

const Card = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { question, choices, id, correctAnswer } = questions[currentQuestion];
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const [showResult, setShowResult] = useState(false);

  function answerSelected(answer) {
    setSelectedAnswer(answer);
    if (answer === correctAnswer) {
      setResult((prev) => ({
        ...prev,
        score: prev.score + 1,
        correctAnswers: prev.correctAnswers + 1,
      }));
    } else {
      setResult((prev) => ({
        ...prev,
        wrongAnswers: prev.wrongAnswers + 1,
      }));
    }
  }

  function onNextQuestion() {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  }

  return (
    <div className="card">
      {showResult ? (
        <div className="result">
          <h2>Quiz Results</h2>
          <p>Score: {result.score}</p>
          <p>Correct Answers: {result.correctAnswers}</p>
          <p>Wrong Answers: {result.wrongAnswers}</p>
        </div>
      ) : (
        <>
          <h2>{id}. {question}</h2>
          <ul>
            {choices.map((item) => (
              <li
                key={item}
                onClick={() => answerSelected(item)}
                className={`answer ${
                  selectedAnswer 
                    ? (item === correctAnswer ? "correct" : (item === selectedAnswer ? "wrong" : "")) 
                    : ""
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
          <button onClick={onNextQuestion} className="next-button">Next</button>
          <div className="index">{currentQuestion + 1} of {questions.length} questions</div>
        </>
      )}
    </div>
  );
};

export default Card;




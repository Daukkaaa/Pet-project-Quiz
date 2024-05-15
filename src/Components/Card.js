import React, { useState } from "react";
import { questions } from "./Questions.js";

const Card = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { question, choices, id, correctAnswer } = questions[currentQuestion];
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const isAnswered = selectedAnswer !== null;
  const [result, setResult] = useState({
    score: 0,
    correctAnswer: 0,
    wrongAnswer: 0,
  });


  function answerSelected(answer) {
    setSelectedAnswer(answer);
    if (answer === correctAnswer) {
      setResult((prev) => ({
        ...prev,
        score: prev.score + 1,
        correctAnswer: prev.correctAnswer + 1,
      }));
    } else {
      setResult((prev) => ({
        ...prev,
        wrongAnswer: prev.wrongAnswer + 1,
      }));
    }
  }

  function onNextQuestion() {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true)
    }
  }

  function restartQuiz() {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setResult({
      score: 0,
      correctAnswer: 0,
      wrongAnswer: 0,
    });
  }


  return (
    <div className="card">
      {showResult ? (
        <div className="result">
          <h2>Quiz</h2>
          <p>Score: {result.score}</p>
          <p>Correct Answer: {result.correctAnswer}</p>
          <p>Wrong Answer: {result.wrongAnswer}</p>
          <button onClick={restartQuiz} className="Again">Start Again</button>
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
                  selectedAnswer !== null 
                    ? (item === correctAnswer ? "correct" : (item === selectedAnswer ? "wrong" : "")) 
                    : ""
                } ${selectedAnswer !== null ? "disabled" : ""}`}
              >{item}</li>
            ))}
          </ul>
          <button onClick={() => onNextQuestion()} className={`next-button ${isAnswered ? '' : "next-button-disabled"} `}>
            Next
          </button>
          <div className="index">
            {currentQuestion + 1} of {questions.length} questions
          </div>
        </>
      )}
    </div>
  );
};

export default Card;







/*const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const [showResult, setShowResult] = useState(false);


  function answerSelected(answer) {
    if (selectedAnswer !== null) return;
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
                  selectedAnswer !== null 
                    ? (item === correctAnswer ? "correct" : (item === selectedAnswer ? "wrong" : "")) 
                    : ""
                } ${selectedAnswer !== null ? "disabled" : ""}`}
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
  );*/

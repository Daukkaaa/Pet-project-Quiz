import React, { useState } from "react";

const Card = (props) => {
    const [isCorrect, setIsCorrect] = useState(false);
    const [isAnswered, setIsAnswered] = useState(false);


  return (
    <div className="card">
      {props.questions.map((question) => (
        <div key={question.id}>
          <div className="card-title">
            <h3>{question.id}. {question.title}</h3>
          </div>
          <div className="answer">
          <p>{question.answer1}</p>
          <p>{question.answer2}</p>
          <p>{question.answer3}</p>
          <p>{question.answer4}</p>
          </div>
          <div className="checkBtn">
          <button className="checkAnwser" disabled={isAnswered}>Check Answer</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;

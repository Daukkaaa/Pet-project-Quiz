import React, { useState } from "react";
import { questions } from "./Questions.js";

const Card = (props) => {
  const [currentQuestion, setCurrentQuention] = useState(0);

  const {question, choices} = questions[currentQuestion];


  function nextQuestion() {
    setCurrentQuention((prev) => prev + 1)
  }

  return (
    <div className="card" key={question.id}>
      <h2>
        {currentQuestion + 1}. {question}
      </h2>
      <ul>
        {choices.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <button onClick={nextQuestion} className="next-button">Next</button>
      <div className="index">{1} of {questions.length} questions</div>
    </div>
  );
};

export default Card;

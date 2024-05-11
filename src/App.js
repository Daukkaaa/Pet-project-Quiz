import React from "react";
import Header from "./Components/Header.js";
import './main.css';
import Card from "./Components/Card.js";

function App() {
  const questions = [
    {
      id: 1,
      title: "What is useState() for?",
      answer1: "Allows you to add state to a functional component",
      answer2: "Allows you to add hook to a functional component",
      answer3: "Give you many component",
      answer4: "You can edit title",
    },
    /*{
            id: 2,
            title: 'What is useState() for?',
            answer1: 'Allows you to add state to a functional component',
            answer2: 'Allows you to add hook to a functional component',
            answer3: 'Give you many component',
            answer4: 'You can edit title'
        },
        {
            id: 3,
            title: 'What is useState() for?',
            answer1: 'Allows you to add state to a functional component',
            answer2: 'Allows you to add hook to a functional component',
            answer3: 'Give you many component',
            answer4: 'You can edit title'
        }*/
  ];

  return (
    <div>
      <Header />
      <main>
        <Card questions={questions} />
      </main>
    </div>
  );
}

export default App;

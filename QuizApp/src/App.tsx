import { useState } from "react";
import "./App.css";
import React from "react";

//components
import QuestionCard from "./components/QuestionCard";
const TOTAL_QUESTIONS = 10;
const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserState] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {};
  const checkAnswer = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {};
  const nextQuestion = () => {};
  return (
    <>
      <div className="App">
        <h1>Quiz Game</h1>
        <button className="start" onClick={startTrivia}>
          Start
        </button>
        <p className="score">Score:</p>
        <p>Loading Question</p>
        <QuestionCard
          questionNo={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={
            userAnswers ? userAnswers[number] : undefined
          }
          callback={checkAnswer}
        />
        <button className="next" onClick={nextQuestion}>
          Next Question
        </button>
      </div>
    </>
  );
};

export default App;

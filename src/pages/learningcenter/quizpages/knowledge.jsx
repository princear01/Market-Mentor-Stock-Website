import React, { useState } from "react";
import Layout from "../../../components/Layout/Layout.jsx";
import styles from "./knowledge.module.css";
import quiz from "../../../quiz.js";
import classNames from 'classnames';


const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [classmate, setClassmate] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    answers: []
  });

  const { questions } = quiz;
  const { question, choices, correctAnswer } = questions[activeQuestion];
  const restartQuiz = () => {
    setActiveQuestion(0);
    setShowResult(false);
    setSelectedAnswer("");
    setSelectedAnswerIndex(null);
    setResult({
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      answers: []
    });
  };

  const onClickNext = () => {
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
            answers: [
              ...prev.answers,
              {
                question: question,
                selectedAnswer: selectedAnswer,
                correctAnswer: correctAnswer,
              },
            ],
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
            answers: [
              ...prev.answers,
              {
                question: question,
                selectedAnswer: selectedAnswer,
                correctAnswer: correctAnswer,
              },
            ],
          }
    );
    setSelectedAnswerIndex(null);
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
  };

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);
  
  const onClassmateChange = (event) => {
    setClassmate(event.target.value);
  };

return (
  <Layout>
    <div className={styles.main}>
      <h1 className={styles.header}>Knowledge Quiz</h1>

      <div className={styles.quizcontainer}>
        {!showResult ? (
          <div>
            <div>
              <span className={styles.activequestionno}>
                {addLeadingZero(activeQuestion + 1)}
              </span>
              <span className={styles.totalquestion}>
                /{addLeadingZero(questions.length)}
              </span>
            </div>
            <h2>{question}</h2>
            <ul>
              {choices.map((answer, index) => (
                <li
                  onClick={() => onAnswerSelected(answer, index)}
                  key={answer}
                  className={
                    selectedAnswerIndex === index ? styles.selectedanswer : null
                  }
                >
                  {answer}
                </li>
              ))}
            </ul>
            <div className={styles.flexright}>
              <button
                onClick={onClickNext}
                disabled={selectedAnswerIndex === null}
                className={styles.inquizButton}
              >
                {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.result}>
            <h3>Result</h3>

            <p>Total Questions: {questions.length} </p>
            <p>Total Score: {result.score} </p>
            <p>Correct Answers: {result.correctAnswers}</p>
            <p>Wrong Answers: {result.wrongAnswers} </p>

            <button className={styles.restartbutton} onClick={restartQuiz}>
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  </Layout>
);

}

export default Quiz

// {questions.map((q, index) => (
//   <div key={index}>
//     <p>Question {index + 1}: {q.question}</p>
//     {result.selectedAnswers && (
//       <>
//         <p>Your Answer: {q.choices[result.selectedAnswers[index]]}</p>
//         <p>Correct Answer: {q.choices[q.correctAnswer]}</p>
//       </>
//     )}
//     <hr />
//   </div>
// ))}
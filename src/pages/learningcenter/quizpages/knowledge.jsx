import React, {useState} from "react";
import Layout from "../../../components/Layout/Layout.jsx";
import styles from "./knowledge.module.css";
import quiz from "../../../data/quiz.js";

const Quiz = () => {
    const [activeQuestion,
        setActiveQuestion] = useState(0);
    const [selectedAnswer,
        setSelectedAnswer] = useState("");
    const [showResult,
        setShowResult] = useState(false);
    const [selectedAnswerIndex,
        setSelectedAnswerIndex] = useState(null);
    const [result,
        setResult] = useState({score: 0, correctAnswers: 0, wrongAnswers: 0, answers: []});

    const {questions} = quiz;
    const {question, choices, correctAnswer} = questions[activeQuestion];
    const restartQuiz = () => {
        setActiveQuestion(0);
        setShowResult(false);
        setSelectedAnswer("");
        setSelectedAnswerIndex(null);
        setResult({
            score: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            answers: [],
            quiz: [],
            question: []
        });
    };

    const onClickNext = () => {
        setResult((prev) => selectedAnswer
            ? {
                ...prev,
                score: prev.score + 1,
                correctAnswers: prev.correctAnswers + 1,
                answers: [
                    ...prev.answers, {
                        question: question,
                        selectedAnswer: selectedAnswer,
                        correctAnswer: correctAnswer
                    }
                ]
            }
            : {
                ...prev,
                wrongAnswers: prev.wrongAnswers + 1,
                answers: [
                    ...prev.answers, {
                        question: question,
                        selectedAnswer: selectedAnswer,
                        correctAnswer: correctAnswer
                    }
                ]
            });
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

    const addLeadingZero = (number) => (number > 9
        ? number
        : `0${number}`);

    return (
        <Layout>
            <div className={styles.main}>
                <h1 className={styles.header}>Knowledge Quiz</h1>

                <div className={styles.quizcontainer}>
                    {!showResult
                        ? (
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
                                            className={selectedAnswerIndex === index
                                            ? styles.selectedanswer
                                            : null}>
                                            {answer}
                                        </li>
                                    ))}
                                </ul>
                                <div className={styles.flexright}>
                                    <button
                                        onClick={onClickNext}
                                        disabled={selectedAnswerIndex === null}
                                        className={styles.inquizButton}>
                                        {activeQuestion === questions.length - 1
                                            ? "Finish"
                                            : "Next"}
                                    </button>
                                </div>
                            </div>
                        )
                        : (
                            <div className={styles.result}>
                                <h3>Result</h3>

                                <p>Total Questions: {questions.length}
                                </p>
                                <p>Total Score: {result.score}
                                </p>
                                <p>Correct Answers: {result.correctAnswers}</p>
                                <p>Wrong Answers: {result.wrongAnswers}
                                </p>

                                <button className={styles.restartbutton} onClick={restartQuiz}>
                                    Restart Quiz
                                </button>
                            </div>
                        )}
                </div>
            </div>

            <div className={styles.bottom}>
                <div className={styles.termsContainer}>
                    <h2>QUIZ LIST</h2>
                    {/* <main> 
                    {quiz
                                .questions
                                .map((q,type) => (
                                    <div key={quiz}>
                                        <span className={styles.definitionCell}>{q.question}
                                        {q.choices}</span>
                                    </div> 

                               ) )}

                    </main> */}
                    <table>
                        <thead>
                            <tr>
                                <th>Questions</th>
                                <th>Choices</th>
                            </tr>
                        </thead>
                        <tbody>
                            {quiz
                                .questions
                                .map((q, type) => (
                                    <tr key={quiz}>
                                        <td className={styles.termCell}>{q.question}</td>
                                        <li className={styles.definitionCell}>- {q.choices}</li>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    );

}

export default Quiz

// {questions.map((q, index) => (   <div key={index}>     <p>Question {index +
// 1}: {q.question}</p>     {result.selectedAnswers && (       <> <p>Your
// Answer: {q.choices[result.selectedAnswers[index]]}</p> <p>Correct Answer:
// {q.choices[q.correctAnswer]}</p>       </>     )}     <hr />   </div> ))}
import React from "react"
import Layout from "../../Layout";

const Markets = () => {
  return (
    <Layout>
      <div>
          <body>Markets</body>
      </div>
      </Layout>
  );
  };
export default Markets;




// Define quiz questions and answers
//const quizQuestions = [
//    {
//      question: "What is the capital of France?",
 //     options: ["Paris", "Madrid", "Berlin", "Rome"],
 //     answer: "Paris"
 //   },
 //   {
 //     question: "What is the largest planet in our solar system?",
 //     options: ["Mars", "Jupiter", "Venus", "Saturn"],
 //     answer: "Jupiter"
 //   },
 //   {
 //     question: "What is the highest mountain in the world?",
 //     options: ["Kilimanjaro", "Everest", "Denali", "Aconcagua"],
 //     answer: "Everest"
  //  }
  //];
  
  //// Get DOM elements
 // const quizContainer = document.querySelector(".quiz-container");
 // const resultsContainer = document.querySelector(".results-container");
 // const submitButton = document.querySelector(".submit-button");
  
 // // Create quiz HTML
 // let quizHTML = "";
 // quizQuestions.forEach((question, index) => {
  //  quizHTML += `
  //    <div class="question">
  //      <h3>${index + 1}. ${question.question}</h3>
  //      <ul class="options">
  //        ${question.options.map(option => `<li>${option}</li>`).join("")}
  //      </ul>
   //   </div>
  //  `;
 // });
 // quizContainer.innerHTML = quizHTML;
 // 
 // // Add event listener to submit button
 // submitButton.addEventListener("click", () => {
 //   // Get all user-selected answers
  //  const userAnswers = Array.from(document.querySelectorAll(".options li.selected")).map(li => li.innerText);
  //
    // Calculate score and display results
  //  let score = 0;
  //  quizQuestions.forEach((question, index) => {
     // if (question.answer === userAnswers[index]) {
     //   score++;
  //    }
  //  });
  //  const percentage = (score / quizQuestions.length) * 100;
  //  resultsContainer.innerHTML = `
  //    <h2>Your Score: ${score}/${quizQuestions.length} (${percentage.toFixed(2)}%)</h2>
   //   <p>Answers: ${quizQuestions.map((question, index) => `${index + 1}. ${question.answer}`).join(", ")}</p>
 //   `;
 // });
  
  // Add event listener to options to allow selection
 // const options = document.querySelectorAll(".options li");
 // options.forEach(option => {
 //   option.addEventListener("click", () => {
  //    option.classList.toggle("selected");
 //   });
 // });

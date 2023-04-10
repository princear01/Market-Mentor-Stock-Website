import React from "react";
import Layout from "../../Layout";
import styles from "./Learningcenter.module.css";
import Logo from "/Users/alirana/senior-project/src/webimage.jpg"
import data from "../../data";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const LearningCenter = () => {
 
  return (
    <Layout>
      <div className={styles.LearningCenter}>
        <div className={styles.LCcontainer}/>

      <div className={styles.headingcont}>
         <div className={styles.idkcontainer}>
          <div className={styles.maintextContainer}>
            <h1 className={styles.header}>Learning Center</h1>
            <p className={styles.maintext}>
            The Learning Center is a modern way to learn about stocks that makes learning engaging and visually attractive. 
            With expertly curated content and a user-friendly interface, we empower individuals to become savvy investors. 
            Our mission is to provide everyone with the necessary knowledge and skills to make informed decisions in the stock market, an essential component of the US economy. 
            Join us today and embark on a journey of discovery and growth.
            </p>
        </div>
        <div className={styles.cardContainer}>
        <img src={Logo} alt="Stock Logo" className={styles.card} />
          
          </div>
          </div>
          </div>
    
    <div className={styles.secondcont}>
      <div className={styles.vocabcont}>
        <h1 className={styles.vocab}>Vocabulary</h1>
         <p className={styles.vocabtext}>Expand your stock market knowledge with our curated vocabulary lists, organized by difficulty level. From basic terms to advanced concepts, our Vocabulary section has everything you need to improve your financial literacy.</p>
    <div className={styles.vocabContainer}>   
      
      <a href="/learningcenter/esyvocab">
        <div className={styles.menu_a}>
          <h2>Basic</h2>
        </div>
        <p className={styles.basicexplanation}>Covers basic stock market terms and concepts.</p>    
      </a>

      <a href="/learningcenter/medvocab"> 
        <div className={styles.menu_b}>
          <h2>Intermediate</h2>
        </div>
        <p className={styles.intermediateexplanation}>Covers more advanced stock market concepts and terminology.</p>    
      </a>

      <a href="/learningcenter/hardvocab"> 
        <div className={styles.menu_c}>
          <h2>Hard</h2>
        </div>
        <p className={styles.hardexplanation}>Covers complex financial topics and advanced investment strategies.</p>    
      </a>
    </div>
  </div>
</div>

  <div className={styles.thrdcont}>
    <div className={styles.quizcont}>
      <h1 className={styles.quizzes}>Quizzes</h1>
        <p className={styles.quiztext}>Expand your stock market knowledge with our curated vocabulary lists, organized by difficulty level. From basic terms to advanced concepts, our Vocabulary section has everything you need to improve your financial literacy.</p>
  
          <div className={styles.quizContainer}>  
              <a href="/learningcenter/knowledgequizzes"> 
              <div className={styles.quiz}>
        <h2>Knowledge</h2>
        </div>
        </a>
      </div>
      </div>
    </div>
  
</div>
</Layout>
  );
};

export default LearningCenter;

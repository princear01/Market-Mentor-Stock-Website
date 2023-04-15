import React, { useState } from "react";
import Layout from "../../../components/Layout/Layout.jsx";
import styles from "./esyvocab.module.css";
import data from "../../../data.js";

const Esyvocab = () => {
  const [currentTermIndex, setCurrentTermIndex] = useState(0);
  const [showDefinition, setShowDefinition] = useState(false);

  const handleNext = () => {
    setCurrentTermIndex((index) =>
      index === data.basicvocab.length - 1 ? 0 : index + 1
    );
    setShowDefinition(false);
  };

  const handleBack = () => {
    setCurrentTermIndex((index) =>
      index === 0 ? data.basicvocab.length - 1 : index - 1
    );
    setShowDefinition(false);
  };

  const handleShowDefinition = () => {
    setShowDefinition((prevState) => !prevState);
  };

  const { term, definition } = data.basicvocab[currentTermIndex];

  return (
    <Layout>
      <div className={styles.LearningCenter}>
        <div className={styles.LCcontainer}>
          <h1 className={styles.title}>
            <span className={styles.highlight}>Basic</span>Vocab{" "}
          </h1>

          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <div className={styles.termContainer}>
                <div className={styles.term}>{term}</div>
                {showDefinition && (
                  <div className={styles.definition}>{definition}</div>
                )}
                <div className={styles.buttonContainer}>
                  <button className={styles.backButton} onClick={handleBack}>
                    Back
                  </button>
                  <button className={styles.nextButton} onClick={handleNext}>
                    Next
                  </button>
                </div>
                <button
                  className={styles.showDefinitionButton}
                  onClick={handleShowDefinition}>
                  {showDefinition ? "Hide Definition" : "Show Definition"}
                </button>
              </div>
            </div>
          </div>
          </div>

  <div className={styles.vocabContainer}> 
    <div className={styles.termsContainer}> 
      <h2>VOCAB LIST</h2>
  <table>
    <thead>
      <tr>
        <th>Terms</th>
        <th>Definitions</th>
      </tr>
    </thead>
  <tbody>
    {data.basicvocab.map((vocab, index) => (
      <tr key={index}>
    <td className={styles.termCell}>{vocab.term}</td>
    <td className={styles.definitionCell}>- {vocab.definition}</td>
  </tr>
))}

      </tbody>
    </table>
    </div>
  </div>  
</div>

  </Layout>
  );
};

export default Esyvocab;

    {/* <div className={styles.termsContainer}> 
    <h2>Term List</h2>
      <h3>Terms</h3>                
        <h4>Definitions</h4>

      {data.basicvocab.map((vocab, index) => (
        <div key={index} className={styles.termDefinitionContainer}>
          
          <div className={styles.termBottom}>{vocab.term} </div>
          <div className={styles.definitionBottom}>{vocab.definition}</div>
        </div>
      ))}
    </div> */}
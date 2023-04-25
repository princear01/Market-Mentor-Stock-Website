import React, {useState} from "react";
import Layout from "../../../components/Layout/Layout.jsx";
import styles from "./esyvocab.module.css";
import data from "../../../data/data.js";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import PrintIcon from '@mui/icons-material/Print';
import {Link} from 'react-router-dom';

const Esyvocab = () => {
    const [currentTermIndex,
        setCurrentTermIndex] = useState(0);
    const [showDefinition,
        setShowDefinition] = useState(false);
    const [showExample,
        setShowExample] = useState(false);

    const handleNext = () => {
        setCurrentTermIndex((index) => index === data.basicvocab.length - 1
            ? 0
            : index + 1);
        setShowDefinition(false);
        setShowExample(false);
    };

    const handleBack = () => {
        setCurrentTermIndex((index) => index === 0
            ? data.basicvocab.length - 1
            : index - 1);
        setShowDefinition(false);
        setShowExample(false);
    };

    const handleShowDefinition = () => {
        setShowDefinition((prevState) => !prevState);
    };
    const handleShowExample = () => {
        setShowExample((prevState) => !prevState);
    };
    const {term, definition, example} = data.basicvocab[currentTermIndex];

    const handlePrint = () => {
        window.print();
    };

    return (
        <Layout>
            <div className={styles.LearningCenter}>

                <div className={styles.LCcontainer}>
                    <div className={styles.title}>
                        <span className={styles.highlight}>Basic</span>Vocab
                        <div className={styles.intlink}>
                            <Link to="/learningcenter/medvocab" className={styles.link}>
                                Intermediate Vocabulary
                                <ArrowRightIcon
                                    style={{
                                    marginLeft: "-5px"
                                }}/>
                            </Link>
                        </div>
                    </div>

                    <div className={styles.cardContainer}>

                        <div className={styles.card}>
                            <div className={styles.counter}>
                                {currentTermIndex + 1} of {data.basicvocab.length}
                            </div>
                            <div className={styles.termContainer}>
                                <div className={styles.term}>{term}</div>

                                {showDefinition && (
                                    <div className={styles.definition}>{definition}</div>
                                )}
                                {showExample && (
                                    <div className={styles.example}>{example}</div>
                                )}
                            </div>

                            <div className={styles.buttonContainer}>
                                <button className={styles.backButton} onClick={handleBack}>
                                    Back
                                </button>
                                <button className={styles.showButtons} onClick={handleShowDefinition}>
                                    {showDefinition
                                        ? "Hide Definition"
                                        : "Show Definition"}
                                </button>

                                <button className={styles.showButtons} onClick={handleShowExample}>
                                    {showExample
                                        ? "Hide Example"
                                        : "Show Example"}
                                </button>

                                <button className={styles.nextButton} onClick={handleNext}>
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.vocabContainer}>
                    <div className={styles.termsContainer}>
                        <h2>BASIC STOCK VOCABULARY LIST</h2>
                        <button className={styles.printButton} onClick={handlePrint}>
                            <PrintIcon
                                style={{
                                fontSize: "2rem"
                            }}/>
                        </button>
                        <table>
                            <thead>
                                <tr>
                                    <th>Terms</th>
                                    <th>Definitions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data
                                    .basicvocab
                                    .map((vocab, index) => (
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

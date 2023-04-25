import React from "react";
import Layout from "../../components/Layout/Layout";
import styles from "./Learningcenter.module.css";
import Logo from "../../assets/pics/webimage.jpg"
import DifficultyButton from "./DifficultyButton";
import QuizButton from "./QuizButton";

const LearningCenter = () => {

    return (
        <Layout>
            <div className={styles.LearningCenter}>

                <div className={styles.headingcont}>
                    {/* <div className={styles.idkcontainer}> */}
                    <div className={styles.maintextContainer}>
                        <h1 className={styles.header}>Learning Center</h1>
                        <p className={styles.maintext}>
                            The Learning Center is a modern way to learn about stocks that makes learning
                            engaging and visually attractive. With expertly curated content and a
                            user-friendly interface, we empower individuals to become savvy investors. Our
                            mission is to provide everyone with the necessary knowledge and skills to make
                            informed decisions in the stock market, an essential component of the US
                            economy. Join us today and embark on a journey of discovery and growth.
                        </p>
                    </div>
                    {/* <div className={styles.cardContainer}> */}
                    <img src={Logo} alt="" className={styles.card}/> {/* </div> */}
                    {/* </div> */}
                </div>

                <div className={styles.secondcont}>
                    <h1 className={styles.vocab}>Vocabulary</h1>
                    <p className={styles.vocabtext}>Expand your stock market knowledge with our
                        curated vocabulary lists, organized by difficulty level. From basic terms to
                        advanced concepts, our Vocabulary section has everything you need to improve
                        your financial literacy.</p>
                    <div className={styles.vocabContainer}>
                        <DifficultyButton
                            difficulty={"Basic"}
                            explanation={"Covers basic stock market terms and concepts."}
                            link={"/learningcenter/esyvocab"}
                            divstyle={styles.menu_a}
                            pstyle={styles.basicexplanation}/>

                        <DifficultyButton
                            difficulty={"Intermediate"}
                            explanation={"Covers more advanced stock market concepts and terminology."}
                            link={"/learningcenter/medvocab"}
                            divstyle={styles.menu_a}
                            pstyle={styles.basicexplanation}/>

                        <DifficultyButton
                            difficulty={"Hard"}
                            explanation={"Covers complex financial topics and advanced investment strategies."}
                            link={"/learningcenter/hardvocab"}
                            divstyle={styles.menu_a}
                            pstyle={styles.basicexplanation}/>
                    </div>
                </div>

                <div className={styles.thrdcont}>
                    <h1 className={styles.quizzes}>Quizzes</h1>
                    <p className={styles.quiztext}>Expand your stock market knowledge with our
                        curated vocabulary lists, organized by difficulty level. From basic terms to
                        advanced concepts, our Vocabulary section has everything you need to improve
                        your financial literacy.</p>

                    <div className={styles.quizContainer}>
                        <QuizButton
                            type={"Knowledge"}
                            explanation={"A review quiz for the basic vocabs you have learned"}
                            link={"/learningcenter/knowledgequizzes"}
                            divstyle={styles.quiz}
                            pstyle={styles.basicexplanation}/> {/* remember to change the pstyle to the correct css */}

                        {/* -------------------------------*/}

                        <QuizButton type={"Stocks"} explanation={"write explanation"} link={"/learningcenter/knowledgequizzes"} //  create its page 
                            divstyle={styles.quiz} pstyle={styles.basicexplanation}/> {/* remember to change the pstyle to the correct css */}

                        <QuizButton type={"Trading"} explanation={"write explanation"} link={"/learningcenter/knowledgequizzes"} //  create its page
                            divstyle={styles.quiz} pstyle={styles.basicexplanation}/> {/* remember to change the pstyle to the correct css */}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default LearningCenter;

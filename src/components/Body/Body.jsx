import React, { useEffect, useState } from "react";
import styles from "./Body.module.css";
import Image from "../../assets/pics/bg.jpg";


const Body = (props) => {
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    const stockCard = createCard('Stocks',  'Lorem ');
    const exchangesCard = createCard('Exhcanges',  'Dignissimos ');
    const marketsCard = createCard('Markets',  'Asperiores,');
  
    setCardList([stockCard, exchangesCard, marketsCard]);
  }, []);

  function createCard(title, description) {
    return (
      <li className={`${styles.card} ${styles["cards__item"]}`}>
        <div className={styles["card__frame"]}>
          <div className={styles["card__picture"]}></div>
          <h2 className={styles["card__title"]}>{title}</h2>
        </div>
        <div className={styles["card__overlay"]}></div>
        <div className={styles["card__content"]}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </li>
    );
  }

  
  return (
    <div className={styles.imageContainer}>
    <img className={styles.image} src={Image} alt="Login Image"/>
      <div className={styles.body}>
        <div className={styles.container}>
          <ul className={styles.cards}>{cardList}</ul>
        </div>
        {props.children}
       
        </div>
    </div>
  );
};

export default Body;

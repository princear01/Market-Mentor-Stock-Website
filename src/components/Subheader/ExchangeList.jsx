import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import styles from "./ExchangeList.module.css";

function ExchangeList() {

    const [msftDailyData,
        setMsftDailyData] = useState('');

    const [appleDailyData,
        setAppleDailyData] = useState('');

    const [amznDailyData,
        setAmznDailyData] = useState('');

    const [metaDailyData,
        setMetaDailyData] = useState('');

    useEffect(() => {
        fetchDailyData('MSFT', setMsftDailyData);
        fetchDailyData('AAPL', setAppleDailyData);
        fetchDailyData('AMZN', setAmznDailyData);
        fetchDailyData('META', setMetaDailyData);
        
    }, []);

    const fetchDailyData = async(symbol, setDailyData) => {
        const API_KEY = 'GKXRO2ZXHWTTL66A';
        let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&outputsize=full&apikey=${API_KEY}`;

        const response = await fetch(API_Call);
        const data = await response.json();

        const dailyDataArray = Object
            .entries(data['Time Series (Daily)'])
            .map(([date, values]) => {
                return {
                    date: date,
                    open: parseFloat(values['1. open'])
                };
            });

        setDailyData(dailyDataArray);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Top Stocks</h1>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <div className={styles.dot}/>
                    <div className={styles.name}>MSFT
                    </div>
                    <span className={styles.bold}>Open:
                    </span>
                    <span className={styles.data}>
                        ${msftDailyData.length > 0 && msftDailyData[0].open}
                    </span>
                </li>
                <li className={styles.listItem}>
                    <div className={styles.dot}/>
                    <div className={styles.name}>AAPL
                    </div>
                    <span className={styles.bold}>Open:
                    </span>
                    <span className={styles.data}>
                        ${appleDailyData.length > 0 && appleDailyData[0].open}
                    </span>
                </li>
                <li className={styles.listItem}>
                    <div className={styles.dot}/>
                    <div className={styles.name}>AMZN</div>
                    <span className={styles.bold}>
                        Open:
                    </span>
                    <span className={styles.data}>
                        ${amznDailyData.length > 0 && amznDailyData[0].open}
                    </span>

                </li>
                <li className={styles.listItem}>
                    <div className={styles.dot}/>
                    <div className={styles.name}>META</div>
                    <span className={styles.bold}>Open:</span>
                    <span className={styles.data}>
                        ${metaDailyData.length > 0 && metaDailyData[0].open}
                    </span>

                </li>
            </ul>
        </div>
    )
}
export default ExchangeList


// describe your project 
// talk about the biggest elements of the project (connecting pages, firebase)
// may 3rs if final exam date, if incomplete is needed
// ask teacher for incomplete form fill it out 
// for the following reason, "work pressures, family issues"
// work needed to be completed final report 
// put a X on deadline 
// deadline end of september
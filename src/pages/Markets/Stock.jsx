import {useEffect, useState} from 'react'
import styles from './Stock.module.css';
import Layout from '../../components/Layout/Layout';
import {useParams} from 'react-router-dom';

function Stock() {

    const [description,
        setDescription] = useState('');
    const [symbol,
        setSymbol] = useState('');
    const [name,
        setName] = useState('');
    const [AssetType,
        setAssetType] = useState('')
    const [Exchange,
        setExchange] = useState('')
    const [Sector,
        setSector] = useState('')
    const {ticker} = useParams();
    const [dailyDataArray,
        setDailyData] = useState('');
    const [showFullDescription,
        setShowFullDescription] = useState(false);
    const [marketCapitalization,
        setMarketCapitalization] = useState('');
    const [week52High,
        set52WeekHigh] = useState('');
    const [week52Low,
        set52WeekLow] = useState('');

    useEffect(() => {
        fetchStock();
        fetchDailyData();

    }, []);

    const fetchStock = async() => {
        const API_KEY = 'GKXRO2ZXHWTTL66A';
        // `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=
        // ${API_KEY}`
        let API_Call = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=${API_KEY}`;

        const response = await fetch(API_Call);
        const data = await response.json();

        setDescription(data.Description);
        setSymbol(data.Symbol);
        setName(data.Name);
        setAssetType(data.AssetType);
        setExchange(data.Exchange);
        setSector(data.Sector);

        setMarketCapitalization(data.MarketCapitalization)
        set52WeekHigh(data['52WeekHigh']);
        set52WeekLow(data['52WeekLow'])

    };
    const fetchDailyData = async() => {
        const API_KEY = 'GKXRO2ZXHWTTL66A';
        let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${ticker}&outputsize=full&apikey=${API_KEY}`;

        const response = await fetch(API_Call);
        const data = await response.json();

        const dailyDataArray = Object
            .entries(data['Time Series (Daily)'])
            .map(([date, values]) => {
                return {
                    date: date,
                    open: parseFloat(values['1. open']),
                    high: parseFloat(values['2. high']),
                    low: parseFloat(values['3. low']),
                    close: parseFloat(values['4. close']),
                    adjustedclose: parseFloat(values['5. adjusted close']),
                    volume: parseFloat(values['6. volume'])
                };
            });

        setDailyData(dailyDataArray);
    };

    return (
        <Layout>
            <div className={styles.main_container}>
                <span className={styles.leftside_container}>
                    <div className={styles.main_title}>
                        {name}
                        {symbol}
                    </div>
                    <div className={styles.current_price}>
                        $165.13
                    </div>
                    <div className={styles.main_graph}>
                        MAIN Stock GRAPH
                    </div>
                </span>
                <span className={styles.rightside_container}>
                    <h2 className={styles.Dailystats}>Daily Statistics</h2>

                    <div className={styles.daily_date}>
                        <span className={styles.bold}>Date:
                        </span>
                        {dailyDataArray.length > 0 && dailyDataArray[0].date}
                    </div>

                    <div className={styles.grid_container}>
                        <div className={styles.grid_item}>
                            <span className={styles.bold}>Open:</span>
                            {dailyDataArray.length > 0 && dailyDataArray[0].open}
                        </div>
                        <div className={styles.grid_item}>
                            <span className={styles.bold}>High:</span>
                            {dailyDataArray.length > 0 && dailyDataArray[0].high}
                        </div>
                        <div className={styles.grid_item}>
                            <span className={styles.bold}>Close:</span>
                            {dailyDataArray.length > 0 && dailyDataArray[0].close}
                        </div>
                        <div className={styles.grid_item}>
                            <span className={styles.bold}>Low:</span>
                            {dailyDataArray.length > 0 && dailyDataArray[0].low}
                        </div>
                        <div className={styles.grid_item}>
                            <span className={styles.bold}>Volume:</span>
                            {dailyDataArray.length > 0 && dailyDataArray[0]
                                .volume
                                .toLocaleString()}
                        </div>
                        <div className={styles.grid_item}>
                            <span className={styles.bold}>Adjusted Close:</span>
                            {dailyDataArray.length > 0 && dailyDataArray[0].adjustedclose}
                        </div>

                    </div>
                    <h2 className={styles.Keystats}>Key Statistics</h2>
                    <div className={styles.grid2_container}>

                        <div className={styles.grid_item}>
                            <span className={styles.bold}>Market Cap:
                            </span>
                            {marketCapitalization}
                        </div>
                        <div className={styles.grid_item}>
                            <span className={styles.bold}>52 Week High:
                            </span>
                            {week52High}
                        </div>
                        <div className={styles.grid_item}>
                            <span className={styles.bold}>52 Week Low:
                            </span>
                            {week52Low}
                        </div>
                    </div>
                </span>
            </div>
            <div className={styles.second_container}>

                <div className={styles.about_container}>
                    <div className={styles.about_title}>
                        About {symbol}
                    </div>
                    <hr/>
                    <div className={styles.about_description}>
                        {description && ( // check if description is defined and not null
                                showFullDescription
                            ? description
                            : `${description.slice(0, 300)}...`)}
                        <button
                            className={styles.showButton}
                            onClick={() => setShowFullDescription(!showFullDescription)}>
                            {showFullDescription
                                ? " Show less"
                                : " Show more"}
                        </button>
                    </div>

                    <div class={styles.Infocontainer}>
                        <div class={styles.line}>
                            <span class={styles.label}>Exchange</span>
                            <span class={styles.label}>Sector</span>
                            <span class={styles.label}>Asset Type</span>
                        </div>

                        <div class={styles.line}>
                            <span class={styles.value}>{AssetType}</span>
                            <span class={styles.value}>{Exchange}</span>
                            <span class={styles.value}>{Sector}</span>
                        </div>

                    </div>

                </div>
            </div>

        </Layout>
    )
}

export default Stock

import {useEffect, useState, useRef} from 'react';
import {useParams} from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import Chart from 'chart.js/auto';
import styles from './Markets.module.css'
import {Link} from 'react-router-dom';


function Markets() {
    // const [stockChartXValues, setStockChartXValues] = useState([]);
    // const [stockChartYValues, setStockChartYValues] = useState([]);
    // const [chart, setChart] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const isMounted = useRef(true);
    // const {ticker} = useParams();

    // useEffect(() => {
    //     if (isMounted.current) {
    //         fetchStock();
    //         setLoading(false);

    //         return () => {
    //             if (chart) {
    //                 chart.destroy();
    //             }
    //         };
    //     }
    //     return () => {
    //         isMounted.current = false;
    //     };
    // }, [isMounted, chart]);

    // useEffect(() => {
    //     if (stockChartXValues.length > 0 && stockChartYValues.length > 0) {
    //         updateChart();
    //     }
    // }, [stockChartXValues, stockChartYValues]);

    // const fetchStock = () => {
    //     const API_KEY = 'GKXRO2ZXHWTTL66A';
    //     let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=5min&outputsize=compact&apikey=${API_KEY}`;

    //     fetch(API_Call).then((response) => {
    //         return response.json();
    //     }).then((data) => {
    //         const stockChartXValuesFunction = [];
    //         const stockChartYValuesFunction = [];

    //         for (const key in data['Time Series (5min)']) {
    //             stockChartXValuesFunction.push(key);
    //             stockChartYValuesFunction.push(data['Time Series (5min)'][key]['1. open']);
    //         }

    //         setStockChartXValues(stockChartXValuesFunction);
    //         setStockChartYValues(stockChartYValuesFunction);
    //     });
    // };

    // const updateChart = () => {
    //     const ctx = document
    //         .getElementById('myChart')
    //         .getContext('2d');

    //     if (chart) {
    //         chart.destroy();
    //     }

    //     const newChart = new Chart(ctx, {
    //         type: 'line',
    //         data: {
    //             labels: stockChartXValues,
    //             datasets: [
    //                 {
    //                     label: 'Stock Chart',
    //                     data: stockChartYValues,
    //                     fill: false,
    //                     backgroundColor: 'rgb(255, 99, 132)',
    //                     borderColor: 'rgba(255, 99, 132, 0.2)'
    //                 }
    //             ]
    //         }
    //     });

    //     setChart(newChart);
    // };

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    return (
        <Layout>
  <div className={styles.Hi}>
                <Link to="/stock">Stock</Link>
            </div>            {/* <div>
                <h1>{ticker}</h1>
                <canvas id='myChart'></canvas>
            </div> */}
        </Layout>
    );
}

export default Markets;

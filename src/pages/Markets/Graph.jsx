import {useEffect, useState, useRef} from 'react';
import {useParams} from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import Chart from 'chart.js/auto';
import styles from './Graph.module.css'
import {Link} from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import axios from 'axios';


function Graph({ ticker, symbol }) {

    const [ chartData, setChartData ] = useState({ labels: [], prices: []});

    useEffect(() => {
        fetchStockData().then((data) => setChartData(data));
        
    }, [])

    const fetchStockData = async () => {
        const API_KEY = 'GKXRO2ZXHWTTL66A';
        const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=5min&outputsize=compact&apikey=${API_KEY}`;
        const response = await axios.get(url);
        const { data } = response;
        const timeSeries = data['Time Series (5min)'];

        const chartData = {
            labels: [],
            prices: []
        };

        for (const timestamp in timeSeries) {
            chartData.labels.unshift(timestamp);
            chartData.prices.unshift(parseFloat(timeSeries[timestamp]['4. close']));
        }

        return chartData;
    }

    const data = {
      labels: chartData.labels,
      datasets: [
        {
          label: `Stock Price (${symbol})`,
          data: chartData.prices,
          borderColor: 'rgba(64, 217, 57, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          tension: 0.4,
          borderWidth: 2,
          pointRadius: 0, // Add this line to remove the dots from the line
          pointHitRadius: 10, // Add this line to increase the hover area for the tooltip
        },
      ],
    };
      const options = {
        scales: {
          y: {
            beginAtZero: false,
          },
          x: {
            display: false,
          }
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                return `$${context.parsed.y}`;
              },
            },
          },
        },
      };


    return (
        <div>
            <Line data={data} options={options} />
        </div>
    );
}

export default Graph
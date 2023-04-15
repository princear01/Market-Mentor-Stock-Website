import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import Chart from 'chart.js/auto';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockChartXValues: [],
      stockChartYValues: []
    }
  }
  componentDidMount() {
    this.fetchStock();
  }
  fetchStock() {
    const pointerToThis= this;
    console.log(pointerToThis);
    const API_KEY ="GKXRO2ZXHWTTL66A"
    let StockSymbol = 'IBM'; 
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${StockSymbol}&interval=5min&outputsize=compact&apikey=${API_KEY}`;
    let stockChartXValuesFunction = []
    let stockChartYValuesFunction = []

    fetch(API_Call)
      .then(
        function(response) {
          return response.json();
        }
      )
      .then(
        function(data) {
          console.log(data);

          for (var key in data['Time Series (5min)']) {
            stockChartXValuesFunction.push(key);
            stockChartYValuesFunction.push(data['Time Series (5min)'][key]['1. open']);
          }
          pointerToThis.setState({
            stockChartXValues : stockChartXValuesFunction,
            stockChartYValues : stockChartYValuesFunction
          });
        }
      );
  }

    render() {
      return (
        <Layout>
          <div>
            <h1>About The Stock Market</h1>
            <canvas id="myChart"></canvas>
          </div>
        </Layout>
      );
    }
          componentDidUpdate() {
        const ctx = document.getElementById('myChart').getContext('2d');
        if (this.chart) {
          this.chart.destroy();
        }
        this.chart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: this.state.stockChartXValues,
            datasets: [
              {
                label: 'Stock Chart',
                data: this.state.stockChartYValues,
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
          ],
        },
      });
    }
  }

export default About

// import { React, useEffect, useState } from "react"
// import Layout from "../../components/Layout/Layout";
// import { AlphaVantageAPI } from "alpha-vantage-cli";
// const apiKey = 'GKXRO2ZXHWTTL66A';

// var alphaVantageAPI = new AlphaVantageAPI(apiKey, 'compact', 'true');

// const Markets = ({stockName}) => {

//   const [ marketData, setMarketData ] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await alphaVantageAPI.getIntradayData('IBM', '15min');
//       const data = await response.json();
//       setMarketData(data);
//     }
//     fetchData();
//   })

//   return (
//     <Layout>
//       <div>
//           <body>Markets</body>
//           {marketData}
//       </div>
//       </Layout>
//   );
// };
// export default Markets;
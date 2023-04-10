import React from 'react';
import Header from "/Users/alirana/senior-project/src/components/Header/Header.jsx"
import Subheader from "/Users/alirana/senior-project/src/components/Subheader/Subheader.js"
import data from '/Users/alirana/senior-project/src/data.js'
import ExchangeList from "/Users/alirana/senior-project/src/components/Subheader/ExchangeList.jsx"
import Body from "/Users/alirana/senior-project/src/components/Body/Body.jsx";
import Footer from '../../../components/Footer/Footer';


const Home = () => {

    return (
      <div>
        <Header />
        <Subheader>
          <ExchangeList exchanges={data.exchanges} />
        </Subheader>
        <Body/>
        <Footer/>
      </div>
    );
    };
  
export default Home;

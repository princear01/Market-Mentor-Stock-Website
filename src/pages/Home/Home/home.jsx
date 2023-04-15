import React from 'react';
import Header from "../../../components/Header/Header"
import Subheader from "../../../components/Subheader/Subheader"
import data from '../../../data'
import ExchangeList from "../../../components/Subheader/ExchangeList"
import Body from "../../../components/Body/Body.jsx";
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

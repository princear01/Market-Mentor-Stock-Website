import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "/Users/alirana/senior-project/src/pages/Home/Home/home.jsx";
import LearningCenter from "/Users/alirana/senior-project/src/pages/learningcenter/Learningcenter.jsx";
import Markets from "/Users/alirana/senior-project/src/pages/Markets/Markets.jsx";
import InvestmentCalculator from "/Users/alirana/senior-project/src/pages/investmentcalculator/InvestmentCalculator.jsx";
import About from "/Users/alirana/senior-project/src/pages/About/About.jsx";
import Esyvocab from "/Users/alirana/senior-project/src/pages/learningcenter/vocabpages/esyvocab.jsx";
import Medvocab from "/Users/alirana/senior-project/src/pages/learningcenter/vocabpages/medvocab.jsx";
import Hardvocab from "/Users/alirana/senior-project/src/pages/learningcenter/vocabpages/hardvocab.jsx";
import Knowledge from "/Users/alirana/senior-project/src/pages/learningcenter/quizpages/knowledge.jsx";

import data from './data.js'
// import Header from "/Users/alirana/senior-project/src/components/Header/Header.jsx"
// import Subheader from "/Users/alirana/senior-project/src/components/Subheader/Subheader.js"
// import ExchangeList from "/Users/alirana/senior-project/src/components/Subheader/ExchangeList.jsx"
// import Body from "/Users/alirana/senior-project/src/components/Body/Body.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learningcenter" element={<LearningCenter />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/investmentcalculator" element={<InvestmentCalculator />} />
          <Route path="/about" element={<About />} />
          <Route path="/learningcenter/esyvocab" element={<Esyvocab />} />
          <Route path="/learningcenter/medvocab" element={<Medvocab />} />
          <Route path="/learningcenter/hardvocab" element={<Hardvocab />} />
          <Route path="/learningcenter/knowledgequizzes" element={<Knowledge />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "../src/pages/Home/Home/home.jsx";
import LearningCenter from "../src/pages/learningcenter/Learningcenter.jsx";
import Stock from "../src/pages/Markets/Stock.jsx";

import InvestmentCalculator from "../src/pages/investmentcalculator/InvestmentCalculator.jsx";
import About from "../src/pages/About/About.jsx";
import Esyvocab from "../src/pages/learningcenter/vocabpages/esyvocab.jsx";
import Medvocab from "../src/pages/learningcenter/vocabpages/medvocab.jsx";
import Hardvocab from "../src/pages/learningcenter/vocabpages/hardvocab.jsx";
import Knowledge from "../src/pages/learningcenter/quizpages/knowledge.jsx";
import Signin from '../src/pages/Signin/Signin.jsx';
import Signup from '../src/pages/Signin/Signup.jsx';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={< Home />}/>
                    <Route path="/learningcenter" element={< LearningCenter />}/>
                    <Route path="/stock/:ticker?" element={< Stock />}/>
                    <Route path="/investmentcalculator" element={< InvestmentCalculator />}/>
                    <Route path="/about" element={< About />}/>
                    <Route path="/signin" element={< Signin />}/>
                    <Route path="/signup" element={< Signup />}/>
                    <Route path="/learningcenter/esyvocab" element={< Esyvocab />}/>
                    <Route path="/learningcenter/medvocab" element={< Medvocab />}/>
                    <Route path="/learningcenter/hardvocab" element={< Hardvocab />}/>
                    <Route path="/learningcenter/knowledgequizzes" element={< Knowledge />}/>

                </Routes>
            </div>
        </Router>
    );
}

export default App;

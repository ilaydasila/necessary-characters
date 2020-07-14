import React from "react";
import { useSelector } from "react-redux";
import "./App.scss";

import { BrowserRouter as Router, Route } from "react-router-dom";

import CharacterImage from "./CharacterImage";

import { Step1 } from "./stepsAndResult/Step1";
import { Step2 } from "./stepsAndResult/Step2";
import { Result } from "./stepsAndResult/Result";

function App() {
  const characterState = `${useSelector((state) => state.hair)} ${useSelector(
    (state) => state.cloth
  )} ${useSelector((state) => state.weapon)}`;
  return (
    <>
      <div className='split left'>
        <div className='centered'>
          <div className='left-centered'>
            <p className='white-p'>MIX</p>
          </div>
          <Router>
            <Route exact path='/' component={Step1} />
            <Route exact path='/step2' component={Step2} />
            <Route exact path='/result' component={Result} />
          </Router>
        </div>
      </div>
      <div className='split right'>
        <div className='centered'>
          <p className='black-p'>ENJOY</p>
          <CharacterImage characterInfo={characterState} />
        </div>
      </div>
    </>
  );
}

export default App;

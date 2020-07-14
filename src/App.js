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
    <div className='App'>
      <Router>
        <Route exact path='/' component={Step1} />
        <Route exact path='/step2' component={Step2} />
        <Route exact path='/result' component={Result} />
      </Router>
      <CharacterImage characterInfo={characterState} />
    </div>
  );
}

export default App;

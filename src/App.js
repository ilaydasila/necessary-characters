import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faTumblrSquare,
} from "@fortawesome/free-brands-svg-icons";

import CharacterImage from "./CharacterImage";
import Footer from "./Footer";
import { Step1 } from "./stepsAndResult/Step1";
import { Step2 } from "./stepsAndResult/Step2";
import { Result } from "./stepsAndResult/Result";

function App() {
  const characterState = `${useSelector((state) => state.hair)} ${useSelector(
    (state) => state.cloth
  )} ${useSelector((state) => state.weapon)}`;
  return (
    <>
      <header className='container'>
        <div class='left-half'>
          <p className='white-p'>MIX</p>
          <p className='white-p'>CREATE</p>
        </div>
        <div class='right-half'>
          <p className='black-p'>ENJOY</p>
        </div>
      </header>
      <main>
        <Router>
          <Route exact path='/' component={Step1} />
          <Route exact path='/step2' component={Step2} />
          <Route exact path='/result' component={Result} />
        </Router>
        <CharacterImage characterInfo={characterState} />
      </main>
      <Footer>
        <p>Copyright &copy; 2020, IlaydasSila All Rights Reserved</p>
        <p>
          <a target='_blank' href='https://github.com/ilaydasila'>
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
          <a target='_blank' href='https://ilaydasilart.tumblr.com'>
            {" "}
            <FontAwesomeIcon icon={faTumblrSquare} />
          </a>
        </p>
      </Footer>
    </>
  );
}

export default App;

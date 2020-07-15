import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faTumblrSquare,
} from "@fortawesome/free-brands-svg-icons";

import CharacterImage from "./CharacterImage";
import Footer from "./Footer";
import Main from "./Main";
import { Step1 } from "./stepsAndResult/Step1";
import { Step2 } from "./stepsAndResult/Step2";
import { Result } from "./stepsAndResult/Result";
import Header from "./Header";

function App() {
  const characterState = `${useSelector((state) => state.hair)} ${useSelector(
    (state) => state.cloth
  )} ${useSelector((state) => state.weapon)}`;
  return (
    <>
      <Header>
        <div class='left-half'>
          <p className='white-p'>MIX</p>
          <p className='white-p'>CREATE</p>
        </div>
        <div class='right-half'>
          <p className='black-p'>ENJOY</p>
        </div>
      </Header>
      <Main>
        <div id='wrapper'>
          <div id='left'>
            <Router>
              <Route exact path='/' component={Step1} />
              <Route exact path='/step2' component={Step2} />
              <Route exact path='/result' component={Result} />
            </Router>
          </div>
          <CharacterImage characterInfo={characterState} />
        </div>
      </Main>

      <Footer>
        <p>Code and Drawings by IlaydaSila</p>
        <p>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/ilaydasila'
          >
            <FontAwesomeIcon className='github' icon={faGithubSquare} />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ilaydasilart.tumblr.com'
          >
            <FontAwesomeIcon className='tumblr' icon={faTumblrSquare} />
          </a>
        </p>
      </Footer>
    </>
  );
}

export default App;

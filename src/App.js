import React from "react";
import "./App.scss";

import CharacterImage from "./CharacterImage";

function App() {
  return (
    <div className='App'>
      <CharacterImage characterInfo={"hair4 cloth6 weapon5"} />
    </div>
  );
}

export default App;

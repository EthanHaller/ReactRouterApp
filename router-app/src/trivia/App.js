import './App.css';
import React, { useState } from 'react';
import Home from './Home.js'
import Game from './Game.js'
import { AppBar, Toolbar, Button } from '@mui/material';

function App() {
  const [showHome, setShowHome] = useState(true);
  const [apiLink, setApiLink] = useState("");
  const [numQuestions, setNumQuestions] = useState(0);

  const handleLinkChange = (link) => {
    setApiLink(link);
  };

  const handleNumberChange = (num) => {
    setNumQuestions(num);
  }

  if(showHome) {
    return (
      <React.Fragment>
        <AppBar>
          <Toolbar>

          </Toolbar>
        </AppBar>
        <Home link={(link => handleLinkChange(link))} changeView={(value) => setShowHome(value)} changeNumQuestions={(num) => handleNumberChange(num)}></Home>
      </React.Fragment>
    )
  }
  else {
    return (
      <Game apiLink={apiLink} numberOfQuestions={numQuestions}></Game>
    )
  }
}

export default App;
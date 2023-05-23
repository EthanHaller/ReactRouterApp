import './App.css';
import React, { useState } from 'react';
import Home from './Home.js'
import Game from './Game.js'
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

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
            <Button variant='contained' sx={{ color: 'white', mr: '15px' }} component={Link} to="/tictactoe">Tic Tac Toe</Button>
            <Button variant='contained' sx={{ color: 'white', mr: '15px' }} component={Link} to="/trivia">Trivia</Button>
            <Button variant='contained' sx={{ color: 'white', mr: '15px' }} component={Link} to="/weather-news">Weather and News</Button>
          </Toolbar>
        </AppBar>
        <Home link={(link => handleLinkChange(link))} changeView={(value) => setShowHome(value)} changeNumQuestions={(num) => handleNumberChange(num)}></Home>
      </React.Fragment>
    )
  }
  else {
    return (
      <React.Fragment>
        <AppBar>
          <Toolbar>
            <Button variant='contained' sx={{ color: 'white', mr: '15px' }} component={Link} to="/tictactoe">Tic Tac Toe</Button>
            <Button variant='contained' sx={{ color: 'white', mr: '15px' }} component={Link} to="/trivia">Trivia</Button>
            <Button variant='contained' sx={{ color: 'white', mr: '15px' }} component={Link} to="/weather-news">Weather and News</Button>
          </Toolbar>
        </AppBar>
        <Game apiLink={apiLink} numberOfQuestions={numQuestions}></Game>
      </React.Fragment>
    )
  }
}

export default App;
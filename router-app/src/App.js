import './App.css';
import React from 'react'
import { AppBar, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

function App() {
    return (
        <React.Fragment>
            <AppBar>
                <Toolbar>
                    <Link to="/tictactoe">Tic Tac Toe</Link>
                    <Link to="/trivia">Trivia</Link>
                    <Link to="/weather-news">Weather and News</Link>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default App;

import './App.css';
import React from 'react'
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function App() {
    return (
        <React.Fragment>
            <AppBar>
                <Toolbar>
                    <Button variant='contained' sx={{ color: 'white', mr: '15px' }} component={Link} to="/tictactoe">Tic Tac Toe</Button>
                    <Button variant='contained' sx={{ color: 'white', mr: '15px' }} component={Link} to="/trivia">Trivia</Button>
                    <Button variant='contained' sx={{ color: 'white', mr: '15px' }} component={Link} to="/weather-news">Weather and News</Button>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default App;

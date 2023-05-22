import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TicTacToeApp from './tictactoe/App'
import TriviaApp from './trivia/App'
import WeatherNewsApp from './weather-news/App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/tictactoe" element={<TicTacToeApp />} />
      <Route path="/trivia" element={<TriviaApp />} />
      <Route path="weather-news" element={<WeatherNewsApp />} />
    </Routes>
  </BrowserRouter>
);
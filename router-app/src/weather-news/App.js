import React, { useState } from 'react';
import { AppBar, Toolbar, Box, CssBaseline, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import LocationFinder from './LocationFinder';
import Weather from './Weather';
import UnitsButton from './UnitsButton';
import News from './News';


function App() {
  const [locationDetails, setLocationDetails] = useState(null);
  const [units, setUnits] = useState("F");

  console.log(units);

  if (locationDetails) {
    return (
      <>
        <CssBaseline />
        <AppBar>
          <Toolbar>
            <Link to="/tictactoe">Tic Tac Toe</Link>
            <Link to="/trivia">Trivia</Link>
            <Link to="/weather-news">Weather and News</Link>
            <LocationFinder locationInfo={(i) => setLocationDetails(i)}></LocationFinder>
            <UnitsButton changeUnits={(u) => setUnits(u)}></UnitsButton>
          </Toolbar>
        </AppBar>
        <Box id="content" sx={{ display: 'flex', flexDirection: 'row', height: '89vh', marginTop: '60px'}}>
          <Weather locationInfo={locationDetails} units={units}></Weather>
          <News></News>
        </Box>
      </>
    )
  }
  else {
    return (
      <>
        <CssBaseline />
        <AppBar>
          <Toolbar>
            <Link to="/tictactoe">Tic Tac Toe</Link>
            <Link to="/trivia">Trivia</Link>
            <Link to="/weather-news">Weather and News</Link>
            <LocationFinder locationInfo={(i) => setLocationDetails(i)}></LocationFinder>
            <UnitsButton changeUnits={(u) => setUnits(u)}></UnitsButton>
          </Toolbar>
        </AppBar>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
          <Typography variant="h2">Please enter a location.</Typography>
        </Box>
      </>
    )
  }
}
export default App;
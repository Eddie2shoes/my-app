import React, { useState } from 'react';
import VacationSpotCard from '../components/VacationSpotCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { cities } from '../components/locationImages';
import SearchAppBar from '../components/SearchAppBar';

const Home = (props) => {
  return (
    <div className="App">
      <SearchAppBar />
      <Container maxWidth="lg" sx={{ marginY: 12 }}>
        <Grid container spacing={5}>
          {cities.map((city, i) => {
            return <VacationSpotCard key={i} city={city} />;
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;

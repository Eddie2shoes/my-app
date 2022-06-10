import React, { useState, useEffect } from 'react';
import VacationSpotCard from '../components/VacationSpotCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { cities } from '../components/locationImages';
import SearchAppBar from '../components/SearchAppBar';

const Home = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectCities, setSelectCities] = useState(null);

  console.log(selectedCity);

  useEffect(() => {
    setSelectCities([...cities.filter((city) => selectedCity === city.name)]);
  }, [selectedCity]);

  return (
    <div className="App">
      <SearchAppBar setSelectedCity={setSelectedCity} />
      <Container maxWidth="lg" sx={{ marginY: 12 }}>
        <Grid container spacing={5}>
          {selectedCity === null || undefined
            ? cities.map((city) => {
                return <VacationSpotCard key={city.id} city={city} />;
              })
            : selectCities.map((city, i) => {
                return <VacationSpotCard key={i} city={city} />;
              })}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;

/*
{cities.map((city, i) => {
            if (selectedCity === city.name) {
              return <VacationSpotCard key={i} city={city} />;
            }
            return <VacationSpotCard key={i} city={city} />;
          })}
*/

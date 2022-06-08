import VacationSpotCard from '../components/VacationSpotCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { cities } from '../components/locationImages';

const Home = () => (
  <div className="App">
    <Container maxWidth="lg" sx={{ marginY: 5 }}>
      <Grid container spacing={5}>
        {cities.map((city, i) => {
          return <VacationSpotCard key={i} city={city} />;
        })}
      </Grid>
    </Container>
  </div>
);

export default Home;

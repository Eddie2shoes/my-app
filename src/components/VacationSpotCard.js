import React, { useState } from 'react';
import { Paper, Grid, Box, Typography, Rating, createTheme, ThemeProvider } from '@mui/material';
import { labels } from './locationImages';
import StarIcon from '@mui/icons-material/Star';
import { MonetizationOn } from '@mui/icons-material';
import ModalPlayer from './ModalPlayer';

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: 'body2',
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: 'body3',
          },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
});

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const VacationSpotCard = ({ city }) => {
  const [value, setValue] = useState(city.rating);
  const [hover, setHover] = useState(-1);

  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <ModalPlayer city={city} />
          <Box padding={1}>
            <Typography variant="subtitle2" component="h2" marginBottom={1}>
              {city.name}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
              marginTop={1}
            >
              <Typography component="legend" variant="body3">
                Reviews
              </Typography>
              <Rating
                name="hover-feedback"
                value={value}
                onChange={(evt, newValue) => {
                  setValue(newValue);
                }}
                getLabelText={getLabelText}
                precision={0.5}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                emptyIcon={<StarIcon style={{ opacity: 1 }} fontSize="inherit" />}
                size="small"
              />
              <Typography variant="body3" component="p" marginLeft={1.5}>
                ({city.reviews}) reviews
              </Typography>
            </Box>
            <Box>{value !== null && <Box sx={{ ml: 2, fontSize: 11 }}>{labels[hover !== -1 ? hover : value]}</Box>}</Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <MonetizationOn fontSize="md" />
              <Typography variant="subtitle2" component="h4" marginLeft={0.5}>
                {city.price}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default VacationSpotCard;

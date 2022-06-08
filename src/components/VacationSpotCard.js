import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { labels } from './locationImages';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { createTheme, ThemeProvider } from '@mui/material';
import { MonetizationOn, AccessTime } from '@mui/icons-material';
import Modal from '@mui/material/Modal';
import ReactPlayer from 'react-player/youtube';

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
  const [value, setValue] = React.useState(city.rating);
  const [hover, setHover] = React.useState(-1);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <img src={city.imageUrl[0]} alt={city.name} className="img" onClick={handleOpen} />
          <Modal open={open} onClose={handleClose} aria-labelledby={city.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ position: 'absolute', border: '2px solid #000' }}>
              <ReactPlayer url={city.video} />
            </Box>
          </Modal>
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

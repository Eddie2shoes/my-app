import React, { useRef, useCallback } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { cities } from './locationImages';
// import ModalPlayer from './ModalPlayer';

export default function SearchFunction({ setSelectedCity }) {
  const cityInput = useRef('');

  const handleTitleChange = useCallback(
    ({ target }) => {
      setSelectedCity(target.innerText);
    },
    [setSelectedCity]
  );

  return <Autocomplete freeSolo options={cities.map((city) => city.name)} sx={{ width: 300, marginLeft: 5 }} onChange={handleTitleChange} renderInput={(params) => <TextField {...params} label="Places" ref={cityInput} />} />;
}

// import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { cities } from './locationImages';
// import ModalPlayer from './ModalPlayer';

export default function SearchFunction() {
  // const onChangeHandler = (event) => {};

  return <Autocomplete freeSolo options={cities.map((city) => city.name)} sx={{ width: 300, marginLeft: 5 }} renderInput={(params) => <TextField {...params} label="State" />} />;
}

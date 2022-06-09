import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import ReactPlayer from 'react-player/youtube';

export default function ModalPlayer({ city }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <img src={city.imageUrl[0]} alt={city.name} className="img" onClick={handleOpen} />
      <Modal open={open} onClose={handleClose} aria-labelledby={city.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ position: 'absolute', border: '2px solid #000' }}>
          <ReactPlayer url={city.video} controls={true} />
        </Box>
      </Modal>
    </>
  );
}

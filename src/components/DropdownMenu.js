import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
// import { styled } from '@mui/system';

// const MyComponent = styled('Menu')({
//   color: 'darkslategray',
//   backgroundColor: 'aliceblue',
//   padding: 8,
//   borderRadius: 4,
// });

export default function DropdownMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {/* <Button id="fade-button" aria-controls={open ? 'fade-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
        Dashboard
      </Button> */}
      <IconButton size="large" edge="start" color="inherit" aria-controls={open ? 'fade-menu' : undefined} aria-label="open drawer" aria-haspopup="true" onClick={handleClick} sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>
      {/* <MyComponent> */}
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      {/* </MyComponent> */}
    </div>
  );
}

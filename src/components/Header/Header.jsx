import React from 'react';
import classes from './Header.module.css';
import { TextField } from '@mui/material';

const Header = () => {
  return (
    <div className={classes.Header}>
      <div>
        <TextField
          id='input-with-sx'
          label='Поиск'
          size='small'
          variant='outlined'
        />
      </div>
    </div>
  );
};

export default Header;

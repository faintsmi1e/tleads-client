import React from 'react';
import classes from './Header.module.css';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <div className={classes.Header}>
      <h2 style={{marginLeft:'15px'}}>Тестовое задание</h2>
      <div className={classes.Search}>
        <SearchIcon color='secondary' size='medium' style={{marginRight:'5px', cursor:'pointer'}}/>
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

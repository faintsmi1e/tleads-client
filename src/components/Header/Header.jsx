import React, { useState } from 'react';
import classes from './Header.module.css';
import { CircularProgress, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useFetching } from '../../hooks/useFetching';
import LeadService from '../../API/LeadService';

const Header = ({ setLeads, setContacts }) => {
  const [query, setQuery] = useState('');
  const [fetchData, isLeadsLoading, leadError] = useFetching(async () => {
    const response = await LeadService.getAll(query);
    console.log(response);
    setLeads(response.leads.reverse());
    setContacts(response.contacts);
  });
  const onSearchClick = () => {
    fetchData();
  };

  return (
    <div className={classes.Header}>
      <h2 style={{ marginLeft: '15px' }}>Тестовое задание</h2>
      <div className={classes.Search}>
        {isLeadsLoading ? (
          <CircularProgress style={{ marginRight: '5px'}} color='secondary' size={20} />
        ) : (
          <SearchIcon
            onClick={onSearchClick}
            color='secondary'
            size='medium'
            style={{ marginRight: '5px', cursor: 'pointer' }}
          />
        )}
        
        <TextField
          id='input-with-sx'
          label='Поиск'
          size='small'
          variant='outlined'
          color="secondary"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Header;

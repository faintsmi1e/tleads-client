import React from 'react';
import { useState, useEffect } from 'react';
import LeadService from '../API/LeadService';
import { useFetching } from '../hooks/useFetching';
import { CircularProgress, TableContainer, Paper } from '@mui/material';
import LeadRow from '../components/LeadRow/LeadRow';
import Tableheader from '../components/TableHeader/TableHeader';
import classes from './LeadTable.module.css';
import Header from '../components/Header/Header';
const LeadTable = () => {
  const [leads, setLeads] = useState([]);
  const [contacts, setContacts] = useState([]);

  const [fetchData, isLeadsLoading, leadError] = useFetching(async () => {
    const response = await LeadService.getAll();
    console.log(response);
    setLeads(response.leads.reverse());
    setContacts(response.contacts)
  });

  useEffect(() => {
    fetchData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Header setLeads={setLeads} setContacts={setContacts}></Header>
      <TableContainer
        sx={{
          border: 1,
          borderRadius: '0px 0 6px 6px',
          display: 'flex',
          flexDirection: 'column',
          boxSizing: 'border-box',
          padding: '15px',
          minWidth: '800px',
        }}
        component={Paper}
      >
        <Tableheader />

        {leadError && <h1>{leadError}</h1>}
        {isLeadsLoading ? (
          <div className={classes.Loader}>
            <CircularProgress color='secondary'></CircularProgress>
          </div>
        ) : (
          leads.map((lead, id) => {
            return (
              <LeadRow
                sx={{
                  display: 'flex',
                  width: '100%',
                }}
                key={id}
                row={lead}
                contacts={contacts}
              ></LeadRow>
            );
          })
        )}
      </TableContainer>
    </>
  );
};

export default LeadTable;

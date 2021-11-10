import React, { useState } from 'react';
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  IconButton,
  TableRow,
  Collapse,
  Box,
  Typography,
} from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import classes from './LeadRow.module.css'

function LeadRow(props) {
  const { row , contacts } = props;
  const [open, setOpen] = useState(false);
  const date = new Date(row.created_at * 1000);
  const humanDate =
    date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
  const isTags = row._embedded.tags.length > 0;
  console.log(isTags);
  return (
    <>
      <TableRow {...props}>
        <TableCell>
          <IconButton
            aria-label='expand row'
            size='small'
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell
          component='th'
          scope='row'
          sx={{
            flex: '1 1 40%',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {row.name}
          {isTags && row._embedded.tags.map(tag => <div className={classes.Tag}>{tag.name}</div>)}
        </TableCell>
        <TableCell align='right' sx={{
            flex: '1 1 20%',
            display: 'flex',
            alignItems: 'center',
            justifyContent:'flex-end'
            
          }}><div className={classes.Status} style={{backgroundColor:`${row.status.color}`}}>{row.status.name}</div></TableCell>
        <TableCell align='right' sx={{
            flex: '1 1 20%',
            display: 'flex',
            alignItems: 'center',
            justifyContent:'flex-end'
            
          }}>{row.resUser.name}</TableCell>
        <TableCell align='right' sx={{
            flex: '1 1 10%',
            display: 'flex',
            alignItems: 'center',
          }}>{humanDate}</TableCell>
        <TableCell align='right' sx={{
            flex: '1 1 10%',
            display: 'flex',
            alignItems: 'center',
          }}>{row.price + ' ₽'}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant='h6' gutterBottom component='div'>
                Контакты
              </Typography>
              <Table size='small' aria-label='purchases'>
                <TableBody>
                  <TableRow>
                    {contacts.map((contact, id) => <TableCell key={id}>{contact.name}</TableCell>)}
                    
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default LeadRow;

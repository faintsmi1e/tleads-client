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
  Tab,
} from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import classes from './LeadRow.module.css';
import Mailbutton from '../UI/MailButton';
import PhoneButton from '../UI/PhoneButton';

function LeadRow(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);
  const date = new Date(row.created_at * 1000);
  const humanDate =
    date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
  const isTags = row._embedded.tags.length > 0;
  const contacts = row?._embedded?.contArr;

  const getNumberOrEmail = (value) => {
    switch (value.field_code){
      case 'PHONE':
        return (<TableCell key={value.field_id}><PhoneButton value={value}></PhoneButton> </TableCell>)
      case 'EMAIL':
        return (<TableCell key={value.field_id}><Mailbutton value={value}></Mailbutton></TableCell>)
      default:
        return
    }
  }
  

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
          {isTags &&
            row._embedded.tags.map((tag) => (
              <div key={tag.id}className={classes.Tag}>{tag.name}</div>
            ))}
        </TableCell>
        <TableCell
          align='right'
          sx={{
            flex: '1 1 20%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <div
            className={classes.Status}
            style={{ backgroundColor: `${row.status.color}` }}
          >
            {row.status.name}
          </div>
        </TableCell>
        <TableCell
          align='right'
          sx={{
            flex: '1 1 20%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
         <IconButton
            aria-label='expand row'
            size='small'
            onClick={() => setOpen(!open)}
          >
            {<PersonIcon color='secondary'/>}
          </IconButton>
          {row.resUser.name}
          
        </TableCell>
        <TableCell
          align='right'
          sx={{
            flex: '1 1 10%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          {humanDate}
        </TableCell>
        <TableCell
          align='right'
          sx={{
            flex: '1 1 10%',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {row.price + ' ₽'}
        </TableCell>
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
                    {contacts &&
                      contacts.map((contact) => {
                        return (
                          <TableRow>
                            <TableCell key={contact.id}>{contact.name}</TableCell>
                            {contact.custom_fields_values &&
                              contact.custom_fields_values.map((value) => (
                                getNumberOrEmail(value)
                              ))}
                          </TableRow>
                        );
                      })}
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

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

function LeadRow(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);
  const date = new Date(row.created_at * 1000);
  const humanDate =
    date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();

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
        </TableCell>
        <TableCell align='right' sx={{
            flex: '1 1 20%',
            display: 'flex',
            alignItems: 'center',
            justifyContent:'flex-end'
            
          }}>{row.status_id}</TableCell>
        <TableCell align='right' sx={{
            flex: '1 1 20%',
            display: 'flex',
            alignItems: 'center',
            justifyContent:'flex-end'
            
          }}>{row.responsible_user_id}</TableCell>
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
                    <TableCell>{row.responsible_user_id}</TableCell>
                    <TableCell>{row.responsible_user_id}</TableCell>
                    <TableCell>{row.responsible_user_id}</TableCell>
                    <TableCell>{row.responsible_user_id}</TableCell>
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

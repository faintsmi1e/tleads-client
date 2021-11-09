import React from 'react';
import { TableRow, TableCell } from '@mui/material';

const Tableheader = () => {
  const map = [
    { number: 4, text: 'Название',padding: '80px' },
    { number: 2, text: 'Статус' },
    { number: 2, text: 'Ответственный' },
    { number: 1, text: 'Дата создания' },
    { number: 1, text: 'Бюджет' },
  ];
  return (
    <TableRow
      sx={{
        display: 'flex',
        width: '100%',
        background:'#f0f0f5'
      }}
    >
      {map.map((item, id) => {
        return (
          <TableCell
            sx={{
              flex: item.number,
              display:'flex',
              alignItems:'center',
              fontWeight:'bold',
              paddingLeft:item.padding,
              
            }}
            
          >{item.text}</TableCell>
        );
      })}
    </TableRow>
  );
};

export default Tableheader;

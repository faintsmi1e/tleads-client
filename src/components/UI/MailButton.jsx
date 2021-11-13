import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import { IconButton } from '@mui/material';
const Mailbutton = ({ value }) => {
  const onClick = () => {
    window.open(`mailto:${value.values[0].value}`)
  };
  return (
    <IconButton onClick={onClick}>
      <EmailIcon color="secondary"></EmailIcon>
    </IconButton>
  );
};

export default Mailbutton;

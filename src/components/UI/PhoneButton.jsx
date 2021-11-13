import React from 'react';

import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import {IconButton} from '@mui/material';
const PhoneButton = ({value}) => {
  const onClick = () => {
    window.open(`tel:${value.values[0].value}`)
  };
  return (
    <IconButton onClick={onClick}>
      <PhoneAndroidIcon color="secondary"></PhoneAndroidIcon>
    </IconButton>
  );
}

export default PhoneButton;

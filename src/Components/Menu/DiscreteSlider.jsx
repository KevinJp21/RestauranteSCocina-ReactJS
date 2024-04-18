import * as React from 'react';
import {Box, Slider, Typography} from '@mui/material';
import {red} from '@mui//material/colors';

function valuetext(value) {
  return `${value}`;
}

export default function DiscreteSlider({ value, onChange }) {
const color = '#e040fb'
  return (
    <Box sx={{ width: 200 }}>
        <Typography className='m-0' id="non-linear-slider" gutterBottom>
        ${value}
      </Typography>
      <Slider
        
        aria-label="Precio máximo"
        value={value}
        onChange={onChange}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={5000}
        min={0}
        max={30000}
      />
    </Box>
  );
}
import React from 'react';

import { Grid } from './styles';

import Home from '../TitleColor';
import ConversorNumeric from '../ConversorNumeric';
import Description from '../Description';

export default function() {
  return (
    <Grid>
      <Home/>
      <ConversorNumeric/>
      <Description/>
    </Grid>
  );
};

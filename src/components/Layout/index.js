import React from 'react';

import { Grid } from './styles';

import Home from '../TitleColor';
import ConversorNumeric from '../ConversorNumeric';
import Description from '../Description';
// import ServerList from '../ServerList';
// import ServerName from '../ServerName';
// import ChannelInfo from '../ChannelInfo';
// import ChannelList from '../ChannelList';
// import UserInfo from '../UserInfo';
// import UserList from '../UserList';
// import ChannelData from '../ChannelData';

export default function() {
  return (
    <Grid>
      <Home/>
      <ConversorNumeric/>
      <Description/>
    </Grid>
  );
};

import React from 'react';

import { Container, TitleRoman, SVG } from './styles';

import Logo from './coliseum.svg'

// import ServerList from '../ServerList';
// import ServerName from '../ServerName';
// import ChannelInfo from '../ChannelInfo';
// import ChannelList from '../ChannelList';
// import UserInfo from '../UserInfo';
// import UserList from '../UserList';
// import ChannelData from '../ChannelData';

export default function() {
  return (
    <Container>
      <SVG src={Logo}/>
      <TitleRoman>Roman numerals </TitleRoman>
    </Container>
  );
};

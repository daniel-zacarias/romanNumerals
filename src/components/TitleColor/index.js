import React from 'react';

import { Container, TitleRoman, SVG } from './styles';

import Logo from '../../images/coliseum.svg'


export default function() {
  return (
    <Container>
      <SVG src={Logo}/>
      <TitleRoman>Roman numerals </TitleRoman>
    </Container>
  );
};

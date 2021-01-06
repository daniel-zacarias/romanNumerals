import React , {useState}from 'react';
import { Grid , AlternateTheme} from './styles';
import {ThemeProvider, withTheme} from 'styled-components';
import LightImage from '../../images/Light.png';
import DarkImage from '../../images/Dark.png';
import Home from '../TitleColor';
import ConversorNumeric from '../ConversorNumeric';
import Description from '../Description';

const light = {
  blue_gradient: '#4C45DC',
  blue_gradient_secondary: '#3C8EE8',
  yellow_main: 'rgba(219,192,71,0.5)',
  bg_blue : '#ACC8F2',
  font_color: 'black',
  bg: 'white',
  btn_color:'#468CDA'
}

const dark = {
  blue_gradient: '#141657',
  blue_gradient_secondary: '#3639A3',
  yellow_main: '#A35146',
  bg_blue : '#4062A3',
  font_color: 'white',
  bg: '#36393F',
  btn_color:'black'
}

export default function() {
  const [theme, setTheme] = useState(true);

  
  return (
    <ThemeProvider theme={theme ? light : dark}>
      <Grid>
        <Home/>
        <ConversorNumeric/>
        <Description/>
        <AlternateTheme src={theme ? LightImage : DarkImage}  onClick={() => setTheme(!theme)}/>
      </Grid>
    </ThemeProvider>
  );
};

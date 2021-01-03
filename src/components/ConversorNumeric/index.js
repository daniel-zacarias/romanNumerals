import React from 'react';

import { Container, Content,  Converter, Button, Result } from './styles';

import getDecimal from './functions/decimal';
import getRoman from './functions/roman'
import roman from './functions/roman';

let romanVerification = 'IVXLCDM'.slice('');




export default class data extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      text: '',
      result:''
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getDecimal = getDecimal.bind(this);
    this.getRoman = getRoman.bind(this);
    // this.configRomanCharacter = this.configRomanCharacter.bind(this);
  }
  
  

  

  handleClick(e) {
    let number = this.state.text;

    if(isNaN(number) && number){
      number = this.getRoman(number);
      if(number != getDecimal(number)[0])
      this.setState({
        text:getDecimal(number)[0]
      })
    }
    else
      number = getDecimal(number)[1];
    
    this.setState({
      result:number
    })
  }


  handleChange(e){
    let lastLetter = e.target.value[e.target.value.length -1];

    

    if(lastLetter == null){
      this.setState({text: e.target.value.toUpperCase()});
      return
    } 

    if(e.target.value.length > 7)
      return

      if(window.innerWidth <= 800 ){
        this.setState({text: e.target.value.toUpperCase()});
        return
      }
    if(romanVerification.includes(lastLetter.toUpperCase()) || !isNaN(e.target.value)){
      if(!isNaN(e.target.value) &&  isNaN(lastLetter) && !this.state.text == '' ){
        return
      }
      this.setState({text: e.target.value.toUpperCase()});
    }



  }

  render(){
    return(
      <Container>
        <Content>
          <label for="converter">Digite um número decimal ou Algarismo Romano</label>
          <Converter id="converter" maxLength="7" max="7" type="text" onChange={this.handleChange} value={this.state.text}/>
          <Button onClick={this.handleClick}>Converter Número</Button>
          <Result >{this.state.result}</Result>
        </Content>
        
  
      </Container>
    );
  }
  
};

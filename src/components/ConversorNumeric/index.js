import React from 'react';

import { Container, Content,  Converter, Button, Result } from './styles';

import getDecimal from './functions/decimal';
import getRoman from './functions/roman'

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
    // this.addResult = this.addResult.bind(this)
  }
  
  addResultRoman(){
    let result = getRoman(this.state.text);
    let numeral = getDecimal(result).text

    if(result != numeral)
    this.setState({
      text:numeral
    })
    return (<Result children={result}></Result> );
  }

  addResultDecimal(){
    let data = getDecimal(this.state.text).data;

    data = data.map(element => {
      return (<Result millenium={element.millenium} children={element.numeral}></Result>)
    });

    return data;
  }

  handleClick(e) {
    let result = this.state.text;
    console.log(getDecimal(result));
    if(isNaN(result) && result)
      result = this.addResultRoman()
    else
      result = this.addResultDecimal();
    
    this.setState({
      result:result
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
          <Converter id="converter" onKeyPress={(e) => e.key == 'Enter' ? this.handleClick(e) : ''} maxLength="7" max="7" type="text" onChange={this.handleChange} value={this.state.text}/>
          <Button onClick={this.handleClick}>Converter Número</Button>
          <section children={this.state.result}></section>
        </Content>
        
  
      </Container>
    );
  }
  
};

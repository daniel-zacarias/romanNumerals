import React from 'react';

import { Container, Content,  Converter, Button, Result } from './styles';


const romanVerification = 'IVXLCDM'.slice('');

const romanConverter = {
  'I': 1,
  'V': 5,
  'X':10,
  'L':50,
  'C':100,
  'D':500,
  'M':1000
}



let operationDecimal = {
  'I' : ['V','X'],
  'X': ['L', 'C'],
  'C': ['D', 'M'],
  'M': []
}



export default class data extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      text: '',
      result:''
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getDecimal = this.getDecimal.bind(this);
    this.getRoman = this.getRoman.bind(this);
    // this.configRomanCharacter = this.configRomanCharacter.bind(this);
  }
  
  getDecimal(value){
    let result = [];
    
    let number = parseInt(value);

    if(this.state.text == "" || number > 3999){
      alert('Não pode deixar a caixa vazia ou um valor maior que 3999')
      return
    }

    while(number > 0){
      let numeral = ''

      if(number >= 1 && number < 5){
        numeral = 'I'

        if(number - 4 == 0)
          numeral = 'V'

      }
      else if( number >= 5 && number < 10 ){
        if(number - 9 == 0)
          numeral = 'IX'
        else
          numeral = 'V'
      }
      else if( number >= 10 && number < 50 ){
        numeral = 'X'
        if(number - 40 < 10 && number - 40 >= 0)
          numeral = 'L'
      }
      else if( number >= 50 && number < 100 ){
        if(number - 90 < 10 && number - 90 >= 0)
          numeral = 'XC'
        else
          numeral = 'L'
      }
      else if( number >= 100 && number < 500 ){
        numeral = 'C'
        if(number - 400 < 100 && number - 400 >= 0)
          numeral = 'D'
      }
      else if( number >= 500 && number < 1000 ){
        if(number - 900 < 100 && number - 900 >= 0)
        numeral = 'CM'
      else
        numeral = 'D'
      }
      else{
        numeral = 'M'
      }

      number -= this.getRoman(numeral)   
      result.push(numeral)
      
    }
    
    result = result.join("")
    return result
  }

  getRoman(text){
    // let arrayNumerals =  this.state.text.split('');
    let arrayNumerals = text.toString().split('');
    let trade = text.toString().split('');
    

    let number = 0;
    arrayNumerals.forEach((element, index, array) => {
      if((romanConverter[array[index]] < romanConverter[array[index+1]]) && operationDecimal[element]){
          number -=  romanConverter[element]
        
      }
      else
      number += romanConverter[element]
    })
    return number;
  }

  handleClick(e) {
    let number = this.state.text;

    if(isNaN(number) && number){
      number = this.getRoman(number);
      if(number != this.getDecimal(number))
      this.setState({
        text:this.getDecimal(number)
      })
    }
    else
      number = this.getDecimal(number);
    
    this.setState({
      result:number
    })
  }

  countVerification(previous, current, index){
    let boolean = false;
    previous = [previous[index],previous[index+1], previous[index+2], previous[index+3] ]
    current = Array(4).fill(current);
    if(previous.toString() == current.toString())
    boolean = true

    return boolean;
  }

  handleChange(e){
    let lastLetter = e.nativeEvent.data;
    
    

    if(lastLetter == null){
      this.setState({text: e.target.value.toUpperCase()});
      return
    } 

    if(romanVerification.includes(lastLetter.toUpperCase()) || !isNaN(e.target.value)){
      if(!isNaN(this.state.text) &&  isNaN(lastLetter) && !this.state.text == '' ){
        //this.setState({text: e.target.value.toUpperCase()});
        return
      }
      let count = 0;
      for (let i = 0; i < e.target.value.length ; i++){
        let valueUpperCase = e.target.value.toUpperCase();
        if(this.countVerification(valueUpperCase,e.nativeEvent.data.toUpperCase(), i)){
            return          
        }
      
      }
      this.setState({text: e.target.value.toUpperCase()});
    }

    


  }

  render(){
    return(
      <Container>
        <Content>
          <label for="converter">Digite um número decimal ou Algarismo Romano</label>
          <Converter maxLength='7' id="converter" onChange={this.handleChange} value={this.state.text}/>
          <Button onClick={this.handleClick}>Converter Número</Button>
          <Result>{this.state.result}</Result>
        </Content>
        
  
      </Container>
    );
  }
  
};

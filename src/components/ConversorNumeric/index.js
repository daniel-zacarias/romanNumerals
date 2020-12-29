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

let subtration = {
  'I' : ['V','X'],
  'X': ['L', 'C'],
  'C': ['D', 'M']
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
  
  getDecimal(values){
    let result = [''];
    let number = 0;
    
    if(this.state.text == "")
      return

    for(let i = 0; i < 7; i++){      
      result = result.join('').split("");

      if(subtration[result[result.length - 1]]){
        for(let j = 0; j <subtration[result[result.length - 1]].length; j++){

          if(this.getRoman(result.join('') + subtration[result[result.length - 1]][j]) == parseInt(this.state.text)){
            result.push(subtration[result[result.length - 1]][j])
            return result.join('');
          }
        }
        }
      number = this.getRoman(result.join(''))
        
      }
      
    
    result = result.join("")
    return result
  }

  configRomanCharacter(character){
    // let letters = [];
    // let correct = ''
    // const priority = {
    //   'I':7,
    //   'V':1,
    //   'X':7,
    //   'L':3,
    //   'C':7,
    //   'D':5,
    //   'M':6
    // }
  
    // //console.log(Object.keys(priority). );
    // console.log(character.indexOf('I')+ " " + character.lastIndexOf('I'));
    // for(let i = 0; i < character.length; i++){
    //   if(!['I','X', 'C'].includes(character[i]) && i != character.length)
    //   letters.push(priority[character[i]])
    //   else{
    //     letters[i] =  (priority[character[i]])
    //   }
    // }

    // letters.sort((a,b) => b-a)

    // letters.forEach(element => correct += Object.entries(priority).find((key, value)=> value == element )[0])

    // this.setState({
    //   text : correct
    // })

    // return correct.split('');
  }

  getRoman(text){
    // let arrayNumerals =  this.state.text.split('');
    let arrayNumerals = text.toString().split('');
    let trade = text.toString().split('');
    

    let number = 0;
    arrayNumerals.forEach((element, index, array) => {
      if((romanConverter[array[index]] < romanConverter[array[index+1]]) && subtration[element]){
        if(subtration[element].includes(array[index+1]))
          number -=  romanConverter[element]
        else{
          number += romanConverter[element]
          trade[index] = arrayNumerals[index+1]
          trade[index+1] = arrayNumerals[index]
          this.setState({text:trade.join('')})
          //handleClick(undefined);
        }
      }
      
      else
      number += romanConverter[element]
    })
    return number;
  }

  handleClick(e) {
    let number =  isNaN(this.state.text) ? this.getRoman(this.state.text): this.getDecimal(Object.keys(romanConverter));
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

import getRoman  from './roman'
import React from 'react'
import {Result} from '../styles'



export default function (value) {
        let result = [];
        let number = parseInt(value);
        let display = [];
        let millenium = false;
        let mult = 1;

        function sub(value, comp){
          let boolean = number - value * 1000 >= 0 && number - value * 1000 < comp * 1000;
          return boolean;
        }
        if( number > 3000000){
          alert('O número maximo suportado é 3000000')
          return ['', '']
        }
    
        while(number > 0){
          let numeral = ''
          
          if((number >= 1 && number < 5) || sub(4, 1)){
            numeral = 'I'
    
            if(number - 4  == 0 || sub(4, 1))
              numeral += 'V'
            
    
          }
          else if( (number >= 5  && number < 10 ) || sub(5,4) || sub(9,1)){
            if(number - 9  == 0 || sub(9,1))
              numeral = 'IX'
            else
              numeral = 'V'
          }
          else if( (number >= 10 && number < 50) || sub(10,30) || sub(40,10) ){
            numeral = 'X'
            if((number - 40  < 10 && number - 40 >= 0) || sub(40,10) )
              numeral += 'L'
          }
          else if(( number >= 50 && number < 100 ) || sub(50,40) || sub(90,10)){
            if((number - 90 < 10 && number - 90 >= 0 ) || sub(90,10))
              numeral = 'XC'
            else
              numeral = 'L'
          }
          else if(( number >= 100  && number < 500 || sub(100,300) || sub(400,100) )){
            numeral = 'C'
            if((number - 400   < 100 && number - 400  >= 0) || sub(400,100))
              numeral += 'D'
          }
          else if( (number >= 500  && number < 1000) || sub(500,400) || sub(900,100)){
            if((number - 900  < 100 && number - 900  >= 0) || sub(900,100))
            numeral = 'CM'
          else
            numeral = 'D'
          }
          else if(number >= 1000 * mult && number < 4000 * mult){
            numeral = 'M'
          }
          
          
          if(number > 3999){
            millenium = true;
            mult=  1000
          }
          else{
            millenium = false;
            mult = 1;
          }
          
          
          display.push(<Result millenium={millenium}>{numeral}</Result>)
          number -= getRoman(numeral) * mult   
          result.push(numeral)
          
        }
        // display = [<Result millenium={false}>{result}</Result>, <Result>{result}</Result>]
        result = result.join("")
        return [result, display]
    //   }
}
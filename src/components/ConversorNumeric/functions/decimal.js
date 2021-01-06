import getRoman  from './roman'
import React from 'react'
import {Result} from '../styles'

let mult = 1;


function getCondition(number){
  return [(number >= 1 && number < 4) ,
    number - 4  == 0 || sub(number,4, 1),
    (number >= 5  && number < 9 ) || sub(number,5,4) ,
    number - 9  == 0 || sub(number,9,1),
    (number >= 10 && number < 40) || sub(number,10,30) ,
    (number - 40  < 10 && number - 40 >= 0) || sub(number,40,10),
    ( number >= 50 && number < 90 ) || sub(number,50,40) ,
    (number - 90 < 10 && number - 90 >= 0 ) || sub(number,90,10),
    ( number >= 100  && number < 400 )|| sub(number,100,300) ,
    ((number - 400 < 100 && number - 400 >= 0) || sub(number, 400,100)),
    ( number >= 500 && number < 900 ) || sub(number,500,400) ,
    (number - 900  < 100 && number - 900  >= 0) || sub(number,900,100),
    (number >= 1000 * mult && number < 4000 * mult)
  ]
}

function sub(number,value, comp){return number - value * 1000 >= 0 && number - value * 1000 < comp * 1000;}

export default function (value) {
        let text = [];
        // let display = [];

        let millenium = false;
        let data = []
        let number = parseInt(value) || 0;

        let results = ['I', 'IV', 'V', 'IX','X', 'XL' , 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M']
       

        if( number > 3000000){
          alert('O número maximo suportado é 3000000')
          return ['', '']
        }
        
        if(number == 1000){
          console.log('1000');
        }

        let j = 0;
        while(number > 0){
          let numeral = ''
          if(getCondition(number)[j]){
            numeral = results[j];
            data.push({numeral, millenium})
          }
          getCondition(number)[j]?j=0:j++;
          

          if(number > 3999){
            millenium = true;
            mult=  1000
          }
          else{
            millenium = false;
            mult = 1;
          }
          

          // display.push(<Result millenium={millenium}>{numeral}</Result>)
          number -= getRoman(numeral) * mult   
          text.push(numeral)

          
        }
       
        text = text.join("")
        // return display.filter(element => element.props.children != '')
        console.log(data);
        return {text, data}
}
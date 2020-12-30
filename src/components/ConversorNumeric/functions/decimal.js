import getRoman  from './roman'

export default function (value) {
    // getDecimal(value){
        let result = [];
        
        let number = parseInt(value);
    
        if( number > 3999){
          alert('Não pode deixar a caixa vazia ou um valor maior que 3999')
          return
        }
    
        while(number > 0){
          let numeral = ''
          
          if(number >= 1 && number < 5){
            numeral = 'I'
    
            if(number - 4 == 0)
              numeral += 'V'
    
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
              numeral += 'L'
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
              numeral += 'D'
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
    
          number -= getRoman(numeral)   
          result.push(numeral)
          
        }
        
        result = result.join("")
        return result
    //   }
}
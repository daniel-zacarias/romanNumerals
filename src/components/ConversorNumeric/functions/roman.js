


const romanConverter = {
  'I': 1,
  'V': 5,
  'X':10,
  'L':50,
  'C':100,
  'D':500,
  'M':1000
}

export default function(text){
    let arrayNumerals = text.toString().split('');
    let trade = text.toString().split('');
    

    let number = 0;
    arrayNumerals.forEach((element, index, array) => {
      if((romanConverter[array[index]] < romanConverter[array[index+1]])){
          number -=  romanConverter[element]
        
      }
      else
      number += romanConverter[element]
    })
    return number;
}
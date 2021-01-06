import React from 'react';

import getDecimal from '../ConversorNumeric/functions/decimal'
import { Container, Introdution, List } from './styles';


function ListItem(props) {
  let numbers = {
    1: [1,2,3,4,5,6,7,8,9,10],
    2: [15,20,30,40,50,100,200,400,500,1000]
  }

  return <li>{getDecimal(numbers[props.page][props.value]).text} = {numbers[props.page][props.value]}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number, index) =>
    // Correct! Key should be specified inside the array.
    <ListItem value={number + index} page={props.page}/>
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

export default function() {


  return (
    <Container>
      <Introdution><article>
        Na Roma Antiga, foi inventado o sistema de numeração romana, composto por sete letras: I, V, X, L, C, D, M.
        <br/>
        Ademais, sendo equivalente à respectivamente 1, 5, 10, 50, 100, 500 e 1000
        </article></Introdution>
        <List>
          <h1>Exemplos de números romanos para decimais.</h1>
          <div>
          <NumberList numbers={Array(10).fill(0)} page={1} />
          <NumberList numbers={Array(10).fill(0)} page={2} />
          </div>
        </List>
    </Container>
  );
};

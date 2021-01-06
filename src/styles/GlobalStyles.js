import { createGlobalStyle} from 'styled-components';



export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background 1s ;
  }
  html, body, #root {
    height: 100vh;
    font-size:62.5%;
  }
  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Roboto', sans-serif;
  }


  
`;

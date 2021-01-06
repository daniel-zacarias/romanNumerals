import styled from 'styled-components';
import {Content} from '../ConversorNumeric/styles'

export const Container = styled.section`
  grid-area:D;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  color:${props => props.theme.font_color};
  background-color: ${props => props.theme.bg}
`

export const Introdution = styled(Content)`
  
  height:auto;
  background: ${props => props.theme.yellow_main} !important;
  
  margin-bottom: 5%;

  >article{
    padding: 5px 10px;
    font-size: 1.5rem;
    
  }

  @media(max-width: 1024px) {
    margin-top: 24px;
  }

  @media(max-width: 800px) {
    height:70%;
  }
`;

export const List = styled(Content)`
  background:${props => props.theme.yellow_main} !important;
  min-width: 200px;
  background-color: #ACC8F2;
  
  >h1{
    font-size:1.2rem;
    padding-bottom: 1.3rem
  }  
  >div{
    display:flex;
  justify-content:space-around;
  }
  >ul , li{
    padding: 0px 5px;
    font-size: 1.5rem;
    list-style:none;
  }
  @media(max-width: 1024px) {
    >h1{
      padding: 10px 5px;
      
    }

    margin-bottom: 20px;
  }

  @media(max-width: 800px) {
    margin-bottom: 50px;
  }
`
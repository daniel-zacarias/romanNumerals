import styled from 'styled-components';


export const Container = styled.div`
  grid-area:D;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column
  
`

export const Introdution = styled.div`
  width: 50%;
  height:auto;
  background:rgba(219,192,71,0.5) !important;
  min-width: 200px;
  background-color: #ACC8F2;
  border: 2px black solid;
  border-radius:10px;
  box-shadow: 2px 1px 1px 1px black;
  margin-bottom: 5%;

  >article{
    padding: 5px 10px;
    font-size: 1.5rem;
    
  }

  @media(max-width: 800px) {
    height:70%;
  }
`;

export const List = styled.div`
  width: 50%;
  height:auto;
  background:rgba(219,192,71,0.5) !important;
  min-width: 200px;
  background-color: #ACC8F2;
  border: 2px black solid;
  border-radius:10px;
  box-shadow: 2px 1px 1px 1px black;
  margin-bottom: 30px;
  display:flex;
  justify-content:space-around;
  flex-direction:column;
  text-align:center;

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

`
import styled from 'styled-components';


export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-template-rows: 0.25fr auto; 
  grid-template-areas:
    'TC TC'
    'CN D';
  height: 100vh;
  background-color: ${props => props.theme.bg};
  
  @media(max-width: 800px) {
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: 400px  300px auto; 
    grid-template-areas:
    'TC TC'
    'CN CN'
    'D D';
  }
`;

export const AlternateTheme = styled.img`
  position:absolute;
  height:5%;
  right:3px;
  top: 15px;
  cursor:pointer;

  @media(max-width: 800px) {
    height:7.5%;
    right:3px;
    top: 30px;
  }
`;
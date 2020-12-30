import styled from 'styled-components';


export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-template-rows: 0.25fr auto; 
  grid-template-areas:
    'TC TC'
    'CN D';
  height: 100vh;

  @media(max-width: 800px) {
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: 400px  300px auto; 
    grid-template-areas:
    'TC TC'
    'CN CN'
    'D D';
  }
`;
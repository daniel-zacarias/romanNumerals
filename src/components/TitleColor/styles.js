import styled from 'styled-components';



export const Container = styled.section`
  background: linear-gradient(to bottom right, ${props=> props.theme.blue_gradient}, ${props=> props.theme.blue_gradient_secondary});
  grid-area:TC;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);;
`

export const TitleRoman = styled.title`
  font-family: 'Times New Roman', Times, 'roboto', serif;
  text-align:center;
  color:${props => props.theme.font_color};
  font-size: 2.5rem;
  text-transform:uppercase;
  display:block;
`;

export const SVG = styled.img`
  height:200px;

`;

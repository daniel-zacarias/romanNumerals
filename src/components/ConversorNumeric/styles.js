import styled , {css} from 'styled-components';



export const Container = styled.div`
  /* background: linear-gradient(to bottom right, #4C45DC,#3C8EE8); */
  grid-area:CN;
  display:flex;
  align-items:center;
  justify-content:center;
  
`

export const Content = styled.div`
  width: 50%;
  height:50%;
  /* background:rgba(219,192,71,0.5); */
  min-width: 200px;
  background-color: #ACC8F2;
  border: 2px black solid;
  border-radius:10px;
  box-shadow: 2px 1px 1px 1px black;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;

  >label{
    padding: 5px 10px;
    font-size: 1.5rem;
    
  }

  @media(max-width: 800px) {
    height:auto;
  }
`;

export const Converter = styled.input`
  background: none;
  border-bottom: 2px black solid;
  padding: 5px 3px;
  width:50%;
  font-size: 2.5rem;
  text-transform:uppercase;
  text-align:center;

  @media(max-width: 800px) {
    width:80%;
  }
`;

export const Button = styled.button`
 background: white;
  color: #468CDA;
  font-size: 1.7rem;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #468CDA;
  border-radius: 3px;
  cursor:pointer;
`;


export const Result = styled.span`
  font-size: 2rem;
  text-transform:uppercase;
  ${props => props.millenium && 
  css`
    text-decoration:overline;
  `}
  
`

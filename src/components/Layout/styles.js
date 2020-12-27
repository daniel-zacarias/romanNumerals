import styled from 'styled-components';

// SL - Server List
// SN - Server Name
// CI - Channel Info
// CL - Channel List
// CD - Channel Data
// UI - User Info

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-template-rows: 0.25fr auto; 
  grid-template-areas:
    'TC TC'
    'CN L';
  height: 100vh;
`;
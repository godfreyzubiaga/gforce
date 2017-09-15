import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: blue;

  p {
    border-bottom: 2px solid black;
  }
`;

const Hamburger = () => (
  <StyledDiv>
    <p> </p>
    <p> </p>
    <p> </p>
  </StyledDiv>
);

export default Hamburger;
import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  border-bottom: 1px solid lightgray;
  background: #5D85A8;
`;

const StyledSpan = styled.span`
  color: white;
  font-family: 'Lobster', cursive;
  font-size: 30px;
  margin: auto;
`

const Header = () => (
  <StyledDiv>
    <StyledSpan> Stand.bye </StyledSpan>
  </StyledDiv>
);

export default Header;

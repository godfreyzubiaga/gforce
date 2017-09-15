import React from 'react';
import styled from 'styled-components';
import Hamburger from './Hamburger';

const StyledDiv = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  border-bottom: 1px solid lightgray;
  background: white;
`;

const Header = () => (
  <StyledDiv>
    <Hamburger />
  </StyledDiv>
);

export default Header;
import React from 'react';
import Header from './Header';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background: #FAFAFA;
  height: 100%;
`;

class Dashboard extends React.Component {
  render() {
    return (
      <StyledDiv>
        <Header />
      </StyledDiv>
    );
  }
}

export default Dashboard;
import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Map from '../Map';

const StyledDiv = styled.div`
  background: #FAFAFA;
  height: 100%;
`;

class Dashboard extends React.Component {
  render() {
    return (
      <StyledDiv>
        <Header />
        <Map />
      </StyledDiv>
    );
  }
}

export default Dashboard;
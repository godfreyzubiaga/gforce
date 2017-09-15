import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Sidebar from './Sidebar';
import Map from '../Map';
import Modal from './Modal';

const StyledDiv = styled.div`
  background: #FAFAFA;
  height: 100%;
`;

class Dashboard extends React.Component {
  render() {
    return (
      <StyledDiv>
        <Header />
        <Sidebar />
        <Map />
        <Modal />
      </StyledDiv>
    );
  }
}

export default Dashboard;

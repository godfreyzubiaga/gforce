import React from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  overflow: hidden;

  ${props => !props.viewed && 'display: none;'}
`;

const StyledModal = styled.div`
  width: 800px;
  height: 500px;
  background-color: white;
  display: flex;
  flex-wrap: wrap;

  @media(max-width: 700px) {
    width: 95%;
  }
`

const Modal = ({ viewed, store: { taskStore, viewStore } }) => (
  <StyledDiv viewed={viewStore.taskModalView} >
    <StyledModal>
      <h2> {taskStore.currentTask.name} </h2>
    </StyledModal>
  </StyledDiv>
);

export default inject('store')(observer(Modal));

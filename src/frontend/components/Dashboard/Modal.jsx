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
  overflow-y: none;

  ${props => !props.viewed && 'display: none;'}
`;

const StyledModal = styled.div`
  width: 800px;
  height: 500px;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 1000px;
    margin-bottom: 10px;
  }

  h2 {
    margin: 0px;
    margin-bottom: 10px;    
  }

  h3 {
    margin: 0px;
    margin-bottom: 10px;    
  }

  h4 {
    margin: 0px;
    margin-bottom: 20px;    
  }

  @media (max-width: 700px) {
    width: 95%;
  }
`

const StyledButton = styled.button`
  background: #5D85A8;
  font-size: 20px;
  border: none;
  color: white;
  padding: 10px;
`

const CloseButton = styled.button`
  border: none;
  background: lightcoral;
  font-size: 20px;
`

const Flexed = styled.div`
  display: flex;
  width: 225px;
  justify-content: space-around;
`

const Modal = ({ store }) => {
  return (
    <StyledDiv viewed={store.viewStore.modalView} >
      {store.taskStore.currentTask ?
        <StyledModal>
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/83/Young_man_with_dimples.jpg" />
          <h2> Employer: {store.taskStore.currentTask.name} </h2>
          <h3> Task Description: {store.taskStore.currentTask.description} </h3>
          <h4> Price: {store.taskStore.currentTask.price} </h4>
          <Flexed>
            <StyledButton> Take this Task </StyledButton>
            <CloseButton onClick={() => store.viewStore.setModalView(false)}> Close </CloseButton>
          </Flexed>
        </StyledModal>
        : undefined
      }
    </StyledDiv>
  );
};

export default inject('store')(observer(Modal));

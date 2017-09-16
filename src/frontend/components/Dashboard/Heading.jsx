import React from 'react';
import styled from 'styled-components';
import { inject } from 'mobx-react';

const StyledDiv = styled.div`
  width: 100%;
  height: 20px;
  position: fixed;
  top: 550px;
  margin: auto;
  display: flex;
`

const Flexed = styled.div`
  width: 330px;
  background: white;
  margin: auto;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  text-align: center;
`

const Heading = ({ store }) => (
  <StyledDiv>
    <Flexed>
      <p> There are {store.taskStore.activeTasksLength} active tasks around your area! </p>
    </Flexed>
  </StyledDiv>
);

export default inject('store')(Heading);
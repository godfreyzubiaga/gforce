import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { inject } from 'mobx-react';
import { StyledDiv, AddTaskContStyledDiv, StyledComponent, AddTaskContainer, StyledFields, SelectLocationStyle, SubmitStyle } from './style';
import Header from '../Dashboard/Header';
import Sidebar from '../Dashboard/Sidebar';
import RootStore from '../../stores/RootStore';
import client from '../../client';

const store = new RootStore(client);

@inject('store')
class PaymentGateway extends React.Component {
  constructor(props) {
    super(props);
  }

  showMap() {
    alert('showmap');
  }

  render() {
    return (
      <div>
        <Header />
        <Sidebar />

        <StyledDiv>
          <AddTaskContainer>
            <h2>Create New Task</h2>
            <StyledFields>
              Task name
        <br />
              <input type="text" name="taskName" placeholder="Task Name" />
            </StyledFields>
            <StyledFields>
              Task description
        <br />
              <textarea name="description" rows="5" cols="30"></textarea>
            </StyledFields>
            <StyledFields>
              Budget
        <br /> (&#8369;)
        <br />
              <input type="text" name="budget" placeholder="999" />
            </StyledFields>
            <StyledFields>
              Location
        <br />
              <br />
              <SelectLocationStyle>
                <a onClick={this.showMap}>Select Location</a>
              </SelectLocationStyle>
            </StyledFields>
            <br />
            <br />
            <StyledFields>
              <SubmitStyle>
                <a type="submit" name="submit">Submit</a>
              </SubmitStyle>
            </StyledFields>
          </AddTaskContainer>
        </StyledDiv>
      </div>
    );
  }
}

export default PaymentGateway;

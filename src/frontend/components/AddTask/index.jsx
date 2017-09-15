import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { inject } from 'mobx-react';
import { StyledDiv, AddTaskContStyledDiv, StyledComponent, AddTaskContainer, StyledFields, SelectLocationStyle, SubmitStyle } from './style';
import Header from '../Dashboard/Header';
import Sidebar from '../Dashboard/Sidebar';
import RootStore from '../../stores/RootStore';
import client from '../../client';
import Map from './Map';

const store = new RootStore(client);

@inject('store')
class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.store = store.taskStore;
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
              <input type="text" id="taskName" name="taskName" placeholder="Task Name" onChange={this.store.setValue} />
            </StyledFields>
            <StyledFields>
              Task description
            <br />
              <textarea id="description" name="description" rows="5" cols="30" onChange={this.store.setValue}></textarea>
            </StyledFields>
            <StyledFields>
              Budget
            <br /> (&#8369;)
            <br />
              <input type="text" id="budget" name="budget" placeholder="999" onChange={this.store.setValue} />
            </StyledFields>
            <StyledFields>
              Location
              <br />
              <br />
              <Map />
            </StyledFields>
            <br />
            <br />
            <StyledFields>
              <SubmitStyle>
                <a type="submit" name="submit" onClick={this.store.postTask}>Submit</a>
              </SubmitStyle>
            </StyledFields>
          </AddTaskContainer>
        </StyledDiv>
      </div>
    );
  }
}

export default AddTask;

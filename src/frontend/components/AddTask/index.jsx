import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { StyledDiv, AddTaskContStyledDiv, StyledComponent, AddTaskContainer, StyledFields, SelectLocationStyle, SubmitStyle } from './style';
import Header from '../Dashboard/Header';
import Sidebar from '../Dashboard/Sidebar';
import client from '../../client';
import Map from './Map';

@inject('store') @observer
class AddTask extends React.Component {
  componentDidMount() {
    console.log(this.props.store);
  }

  showMap() {
    alert('showmap');
  }

  render() {
    const { store: { taskStore } } = this.props;
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
              <input type="text" id="taskName" name="taskName" placeholder="Task Name" onChange={taskStore.setValue} />
            </StyledFields>
            <StyledFields>
              Task description
            <br />
              <textarea id="description" name="description" rows="5" cols="30" onChange={taskStore.setValue}></textarea>
            </StyledFields>
            <StyledFields>
              Budget
            <br /> (&#8369;)
            <br />
              <input type="text" id="price" name="price" placeholder="999" onChange={taskStore.setValue} />
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
                <a type="submit" name="submit" onClick={taskStore.postTask}>Submit</a>
              </SubmitStyle>
            </StyledFields>
          </AddTaskContainer>
        </StyledDiv>
      </div>
    );
  }
}

export default AddTask;

import React from 'react';
import { inject, observer } from 'mobx-react';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import client from '../../client';
import Header from '../Dashboard/Header';
import Sidebar from '../Dashboard/Sidebar';

const StyledDiv = styled.div`
  border: 1px solid lightgray;
  padding: 15px;
`

const StyledButton = styled.button`
  border: none;
  background: #ABD3E4;
  padding: 10px;
  margin-left: 7px;

`

const Fullfill = styled.button`
  background: lightcoral;
  border: none;
  padding: 10px;
  margin-left: 7px;
`

const StyledFix = styled.button`
  margin-left: 7px;
  font-size: 14px;
`

const SortableItem = SortableElement(({ value }) => <li>{value}</li>);

const SortableList = SortableContainer(({ items }) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </ul>
  );
});

@inject('store') @observer
export default class SortableComponent extends React.Component {
  constructor(props) {
    super(props)
    this.store = props.store;
  }


  render() {
    const tasks = this.store.userStore.currentUser.tasks;
    const user = this.store.userStore.currentUser;
    console.log(user, 'USER');
    return (
      <div>
        <Header />
        <Sidebar />
        {tasks.map(task =>
          <StyledDiv>
            {task.bids.forEach(bid => bid.user = this.store.taskStore.users.find(user => user._id === bid.user))}
            <p>Task: {task.description}</p>
            <p>PHP {task.price}</p>
            <div>
              <p>Potential Employees:</p>
              {task.bids.map(bid =>
                <StyledFix onClick={() => console.log('hello!')}>
                   {   bid.user.name} - Rep: {bid.user.reputation}
                  { task.employeeId ?
                  <Link to={`/payment-gateway/${this.store.userStore.currentUser.accountNumber}/${bid.user.accountNumber}/${task.price}`}> Fullfill Order </Link> :
                  <Link to="/" onClick={() => this.store.taskStore.selectEmployee(task._id, bid.user)}> Hire Me! </Link>
                  }
                </StyledFix>
              )}
            </div>
          </StyledDiv>)}
      </div>
    );
  }
}

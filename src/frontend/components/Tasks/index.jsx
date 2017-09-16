import React from 'react';
import { inject, observer } from 'mobx-react';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';
import client from '../../client';
import Header from '../Dashboard/Header';
import Sidebar from '../Dashboard/Sidebar';

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
    return (
      <div>
        <Header />
        <Sidebar />
        {tasks.map(task =>
          <div>
            {task.bids.forEach(bid => bid.user = this.store.taskStore.users.find(user => user._id === bid.user))}
            <p>Task: {task.description}</p>
            <p>PHP {task.price}</p>
            <div>
              <p>Potential Employees:</p>
              {task.bids.map(bid =>
                <div onClick={() => this.store.taskStore.selectEmployee(task._id, bid.user)}>
                  {bid.user.name} - Rep: {bid.user.reputation}
                </div>
              )}
            </div>
          </div>)}
      </div>
    );
  }
}

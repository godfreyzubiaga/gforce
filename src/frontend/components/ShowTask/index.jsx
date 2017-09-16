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
    const items = this.store.userStore.currentUser.bids.map(bid => `${bid.user.name} - Rep: ${bid.user.reputation}`);
    return (
      <div>
        <Header />
        <Sidebar />
        <SortableList items={items} onSortEnd={this.onSortEnd} />
      </div>
    );
  }
}

import React from 'react';
import { inject, observer} from 'mobx-react';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import client from '../../client';


const SortableItem = SortableElement(({value}) => <li>{value}</li>);

const SortableList = SortableContainer(({items}) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </ul>
  );
});
@inject('store')@observer
export default class SortableComponent extends React.Component {
    constructor(props) {
        super(props)
        this.store = props.store;
        console.log(this.store.userStore.currentUser.bids.slice(), '123')
    }
  state = {
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
  };
  onSortEnd = ({oldIndex, newIndex}) => {
      {console.log(store.userStore.currentUser, ' si ikaw')}
    this.setState({
    //   items: arrayMove(store.userStore.currentUser.bids, oldIndex, newIndex),
    items : this.store.userStore.currentUser.bids
    });
  };
  render() {
    return <SortableList items={this.store.userStore.currentUser.bids} onSortEnd={this.onSortEnd} />;
  }
}

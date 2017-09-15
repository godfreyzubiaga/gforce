import { observable, action } from 'mobx';

class ViewStore {
  @observable sideBarOpen = true;

  constructor(rootStore) {
    this.store = rootStore;
  }

  @action.bound onSetSidebarOpen(bool) {
    this.sideBarOpen = bool;
  }
}

export default ViewStore;
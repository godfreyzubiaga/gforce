import { observable, action } from 'mobx';

class ViewStore {
  @observable sideBarOpen = true;
  @observable modalView = false;

  constructor(rootStore) {
    this.store = rootStore;
  }

  @action.bound onSetSidebarOpen(bool) {
    this.sideBarOpen = bool;
  }

  @action.bound setModalView(bool) {
    this.modalView = bool;
  }
}

export default ViewStore;
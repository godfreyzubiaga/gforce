import { observable, action } from 'mobx';

class ViewStore {
  @observable sideBarOpen = true;
  @observable taskModalView = true;

  constructor(rootStore) {
    this.store = rootStore;
  }

  @action.bound onSetSidebarOpen(bool) {
    this.sideBarOpen = bool;
  }

  @action.bound showTaskModal() {
    this.taskModalView = true;
  }
}

export default ViewStore;
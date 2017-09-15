import UserStore from './UserStore';
import ViewStore from './ViewStore';
import TaskStore from './TaskStore';

class RootStore {
  constructor(client) {
    this.userStore = new UserStore(this, client);
    this.viewStore = new ViewStore(this, client);
    this.taskStore = new TaskStore(this, client);
  }
}

export default RootStore;
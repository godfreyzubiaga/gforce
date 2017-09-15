import UserStore from './UserStore';
import ViewStore from './ViewStore';

class RootStore {
  constructor(client) {
    this.userStore = new UserStore(this, client);
    this.viewStore = new ViewStore(this, client);
  }
}

export default RootStore;
import { observable, action } from 'mobx';

class UserStore {
  @observable currentUser;
  @observable isAuthenticated = false;

  constructor(rootStore, client) {
    this.store = rootStore;
    this.client = client;
    this.setUser();

  }

  @action.bound async setUser() {
    try {
      const user = await this.client.get('user');
      this.updateUser(user);
      this.isAuthenticated = true;
    } catch (error) {
      console.log(error);
    }
  }

  @action updateUser(newUser) {
    this.currentUser = newUser;
    this.currentUser.bids.map(bid => bid.user = this.store.taskStore.users.find(user => user._id === bid.user)); //populates user in bids
  }

  @action omitUser() {
    this.currentUser = undefined;
    this.setAuthenticated(false);
  }

  @action.bound setAuthenticated(bool) {
    this.isAuthenticated = bool;
  }
}

export default UserStore;

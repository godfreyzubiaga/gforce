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
      console.log(user, 'adas134')
      this.isAuthenticated = true;
    } catch (error) {
      console.log(error);
    }
  }

  @action updateUser(newUser) {
    this.currentUser = newUser;
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
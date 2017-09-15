import { observable, action } from 'mobx';

class UserStore {
  @observable currentUser;
  
  constructor(rootStore, client) {
    this.store = rootStore;
    this.client = client;
  }

  @action.bound async setUser() {
    try {
      const user = await this.client.get('user');
      this.updateUser(user);
    } catch (error) {
      console.log(error);
    }
  }

  @action updateUser(newUser) {
    this.currentUser = newUser;
  }

  @action omitUser() {
    this.currentUser = undefined;
  }
}

export default UserStore;
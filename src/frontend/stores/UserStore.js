class UserStore {
  constructor(rootStore, client) {
    this.store = rootStore;
    this.client = client;
  }
}

export default UserStore;
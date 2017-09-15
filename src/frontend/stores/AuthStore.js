import { observable, action } from 'mobx';

class AuthStore {

  constructor(rootStore, client) {
    this.store = rootStore;
    this.client = client;
  }

  @observable values = {
    username: '',
    password: '',
  };

  @action.bound setValue(event) {
    this.values[event.target.id] = event.target.value;
  }

  @action async authenticate(credentials) {
    try {
			const result = await this.client.authenticate(credentials);
			console.log(result)
      const payload = await this.client.passport.verifyJWT(result.accessToken);
			const user = await this.client.service('users').get(payload.userId)
			console.log('user',user)
      await this.client.set('user', user);
      this.store.userStore.setUser();
    } catch (error) {
      console.log(error);
    }
  }

  @action.bound async handleLogin() {
    this.authenticate({
      type: 'local',
      strategy: 'local',
      username: this.values.username,
      password: this.values.password
    });
  }

  @action.bound async handleLogout() {
    try {
      await this.client.logout();
      this.client.set('user', undefined);
      this.store.userStore.omitUser();
    } catch (error) {
      console.log('LOGOUT_FAILED');
      console.log(error);
    }
    this.resetValues();
  }

  @action resetValues() {
    Object.keys(this.values).forEach(value => {
      this.values[value] = '';
    });
  }
}

export default AuthStore;
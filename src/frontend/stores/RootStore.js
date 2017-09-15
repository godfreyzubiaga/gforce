import UserStore from './UserStore';
import ViewStore from './ViewStore';
import TaskStore from './TaskStore';
import AuthStore from './AuthStore';
import LocationStore from './LocationStore';
import PaymentGatewayStore from './PaymentGatewayStore';

class RootStore {
  constructor(client) {
    this.userStore = new UserStore(this, client);
    this.viewStore = new ViewStore(this, client);
    this.taskStore = new TaskStore(this, client);
    this.authStore = new AuthStore(this, client);
    this.locationStore = new LocationStore(this, client);
    this.paymentGatewayStore = new PaymentGatewayStore(this, client);
  }
}

export default RootStore;

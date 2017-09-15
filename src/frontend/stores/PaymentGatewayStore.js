import { observable, action } from 'mobx';
import client from '../client';

class PaymentGatewayStore {
  constructor(rootStore, client) {
    this.store = rootStore;
    this.client = client;

    this.source = '100595513256'; // rave
    this.target = '100059817726'; // noren
    this.amount = '500';
  }

  @action.bound async confirm() {
    const response = await client.service('api/bank').patch('', {
      employer: this.source,
      employee: this.target,
      amount: this.amount,
    })
    console.log(response);
  }
}

export default PaymentGatewayStore;

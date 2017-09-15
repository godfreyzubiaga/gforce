import { observable, action } from 'mobx';
import client from '../client';

class PaymentGatewayStore {
  constructor(rootStore, client) {
    this.store = rootStore;
    this.client = client;
  }

  @action.bound async confirm(source, target, amount) {
    const response = await client.service('api/bank').patch('', {
      employer: source,
      employee: target,
      amount: amount,
    })
    return response;
    console.log(response);
  }
}

export default PaymentGatewayStore;

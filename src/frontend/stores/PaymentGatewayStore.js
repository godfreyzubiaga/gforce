import { observable, action } from 'mobx';
import client from '../client';

class PaymentGatewayStore {

  @observable balance = 0;

  constructor(rootStore, client) {
    this.store = rootStore;
    this.client = client;
    this.bankService = this.client.service('/api/bank');
    this.getBalance();
  }


  @action.bound
  async getBalance(acct) {
    const accountNo = acct;
    const account = await this.bankService.get(accountNo);
    this.balance = account[0].avaiable_balance;
    return account[0].avaiable_balance;
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

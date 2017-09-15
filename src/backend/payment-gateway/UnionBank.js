import 'regenerator-runtime/runtime';
import request from 'request-promise';

class UnionBank {
  constructor() {
    this.clientSecret = 'uP4hN0qJ0iE4fO6rI6mT6hK4iV3oP0rV6cS5iF0hT3iC5qA2fB';
    this.clientId = '13ce668a-afc7-4add-b0b3-8fe01cba4556';
  }

  async requestAccountDetails(accountNumber) {
    const options = {
      method: 'GET',
      url: `https://api-uat.unionbankph.com/hackathon/sb/accounts/${accountNumber}`,
      headers:
      { accept: 'application/json',
        'x-ibm-client-secret': this.clientSecret,
        'x-ibm-client-id': this.clientId },
      json: true,
    };

    return await request(options);
  }

  async createNewAccount(accountName) {
    const options = {
      method: 'POST',
      url: 'https://api-uat.unionbankph.com/hackathon/sb/test/accounts',
      body: {
        accountName: accountName,
      },
      headers:
      { accept: 'application/json',
        'Content-Type': 'application/json',
        'x-ibm-client-secret': this.clientSecret,
        'x-ibm-client-id': this.clientId },
      json: true,
    };

    return await request(options);
  }

  async transferFunds(source, target, amount) {
    const options = {
      method: 'POST',
      url: 'https://api-uat.unionbankph.com/hackathon/sb/transfers/initiate',
      body: {
        'channel_id': 'GForce',
        'transaction_id': new Date().getTime().toString(),
        'source_account': source,
        'source_currency': 'PHP',
        'target_account': target,
        'target_currency': 'PHP',
        'amount': amount },
      headers:
      { accept: 'application/json',
        'Content-Type': 'application/json',
        'x-ibm-client-secret': this.clientSecret,
        'x-ibm-client-id': this.clientId },
      json: true,
    };

    return await request(options);
  }
}

export default UnionBank;
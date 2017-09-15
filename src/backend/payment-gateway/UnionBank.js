import 'regenerator-runtime/runtime';
import request from 'request-promise';

class UnionBank {
  constructor() {
    this.clientSecret = 'uP4hN0qJ0iE4fO6rI6mT6hK4iV3oP0rV6cS5iF0hT3iC5qA2fB';
    this.clientId = '13ce668a-afc7-4add-b0b3-8fe01cba4556';
  }

  requestAccountDetails(accountNumber) {
    const options = {
      method: 'GET',
      url: `https://api-uat.unionbankph.com/hackathon/sb/accounts/${accountNumber}`,
      headers:
      { accept: 'application/json',
        'x-ibm-client-secret': this.clientSecret,
        'x-ibm-client-id': this.clientId }
    };

    return this.send(options);
  }

  createNewAccount() {
    const options = {
      method: 'POST',
      url: 'https://api-uat.unionbankph.com/hackathon/sb/test/accounts',
      headers:
      { accept: 'application/json',
        'content-type': 'application/json',
        'x-ibm-client-secret': this.clientSecret,
        'x-ibm-client-id': this.clientId }
    };

    return this.send(options);
  }

  async send(options) {
    const response = await request(options);
    const jsonify = JSON.parse(response);
    return jsonify;
  }
}

export default UnionBank;

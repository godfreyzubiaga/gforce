/* node-env mocha */

import { expect } from 'chai';
import UnionBank from '../src/backend/payment-gateway/UnionBank';

describe('UnionBank', () => {
  const bank = new UnionBank();

  describe('#requestAccountDetails', () => {
    // noren: 100059817726
    // rave: 100595513256
    const accountNumber = '100059817726';

    it('Retrieves the account details of an account', async () => {
      const response = await bank.requestAccountDetails(accountNumber);
      expect(response[0].account_no).to.equal(accountNumber);
    });
  });

  describe('#transferFunds', () => {
    const source = 100059817726; // noren
    const target = 100595513256; // rave

    it('Initiates fund transfer between two accounts', async () => {
      const response = await bank.transferFunds(source, target, 100);
      expect(response.status).to.equal('S');
      expect(response.error_message).to.equal('');
    });
  });
});

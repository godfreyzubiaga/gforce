/* node-env mocha */

import { expect } from 'chai';
import UnionBank from '../src/backend/payment-gateway/UnionBank';

describe('UnionBank', () => {
  describe('#requestAccountDetails', () => {
    // noren: 100059817726
    // rave: 100595513256
    const accountNumber = '100059817726';

    it('Retrieves the account details of an account', async () => {
      const bank = new UnionBank();
      const response = await bank.requestAccountDetails(accountNumber);
      expect(response[0].account_no).to.equal(accountNumber);
    });
  });
});

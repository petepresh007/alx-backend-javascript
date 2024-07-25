const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('returns a promise with the correct response if success is true', () => {
    getPaymentTokenFromAPI(true).then((res) => {
      try {
        expect(res).to.deep.equal({ data: 'Successful response from the API' });
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});

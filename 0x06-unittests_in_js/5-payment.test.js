const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  // first test
  it('check if the correct argument and passed and console gives proper output', () => {
    // called func
    sendPaymentRequestToApi(100, 20);
    // checks if console.log message is true
    expect(consoleSpy.calledOnceWith('The total is: 120')).to.be.true;
    // check if it is called once
    expect(consoleSpy.calledOnce).to.be.true;
  });

  // second tesr
  it('should log the correct message for totalAmount = 10 and totalShipping = 10', () => {
    // called func
    sendPaymentRequestToApi(10, 10);
    // checks if console.log message is true
    expect(consoleSpy.calledOnceWith('The total is: 20')).to.be.true;
    // check if it is called once
    expect(consoleSpy.calledOnce).to.be.true;
  });
});

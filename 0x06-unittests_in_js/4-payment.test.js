const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let calNuberStub;
  let consoleLogSpy;

  beforeEach(() => {
    // Create a spy for the calculateNumber function that always returns 10
    calNuberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    // creates a spy for console,log
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // restore original function
    calNuberStub.restore();
    // restore console.log
    consoleLogSpy.restore();
  });

  it('should call util.calc with the correct arguments', () => {
    // call func
    sendPaymentRequestToApi(100, 20);

    // check if the spy was called with the correct argument
    expect(calNuberStub.calledOnceWith('SUM', 100, 20)).to.be.true;
  });

  it('should log the correct message to the console', () => {
    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Check if console.log was called with the correct message
    expect(consoleLogSpy.calledOnceWith('The total is: 10')).to.be.true;
  });
});

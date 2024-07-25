const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  let calNuberSpy;

  beforeEach(() => {
    // Create a spy for the calculateNumber function
    calNuberSpy = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(() => {
    // restore original function
    calNuberSpy.restore();
  });

  it('should call util.calc with the correct arguments', () => {
    // call func
    sendPaymentRequestToApi(100, 20);

    // check if the spy was called with the correct argument
    expect(calNuberSpy.calledOnceWith('SUM', 100, 20)).to.be.true;
  });
});

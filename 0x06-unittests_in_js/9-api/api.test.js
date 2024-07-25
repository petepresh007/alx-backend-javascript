const request = require('request');
const { expect } = require('chai');

const url = 'http://localhost:7865';

describe('api test', () => {
  it('correct status code?', () => new Promise((done) => {
    request.get(`${url}/`, (_error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  }));

  it('correct result?', () => new Promise((done) => {
    request.get(`${url}/`, (_error, _response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  }));

  it('other?', () => new Promise((done) => {
    request.get(`${url}/`, (_error, response) => {
      expect(response.headers['content-type']).to.include('text/html');
      done();
    });
  }));
});

describe('cart related', () => {
  it('correct status code when id = num', () => new Promise((done) => {
    request.get(`${url}/cart/123`, (_error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  }));

  it('correct result when id is a number?', () => new Promise((done) => {
    request.get(`${url}/cart/123`, (_error, _response, body) => {
      expect(body).to.equal('Payment methods for cart 123');
      done();
    });
  }));

  it('correct status code when id is not a number 404', () => new Promise((done) => {
    request.get(`${url}/cart/xyz`, (_error, response) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  }));
});

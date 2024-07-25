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

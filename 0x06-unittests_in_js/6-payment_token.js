function getPaymentTokenFromAPI(success) {
  if (success) {
    return Promise.resolve({ data: 'Successful response from the API' });
  }
  return 0;
}

module.exports = getPaymentTokenFromAPI;

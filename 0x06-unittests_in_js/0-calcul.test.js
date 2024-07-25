const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('rounds provided number and returns their sum', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it('should a whole number and a number with decimal point', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it('handle numbers with decimal points', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });
  it('handle more decimals', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
  it('handle zeo values', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });
});

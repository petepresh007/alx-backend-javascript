const calculateNumber = require("./0-calcul");
const assert = require("assert")

describe('calculateNumber', function(){
    it('rounds provided number and returns their sum', function(){
        assert.strictEqual(calculateNumber(1, 3), 4);
    })
    it('should a whole number and a number with decimal point', function(){
        assert.strictEqual(calculateNumber(1, 3.7), 5);
    })
    it('handle numbers with decimal points', function(){
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    })
    it('handle more decimals', function(){
        assert.strictEqual(calculateNumber(1.5, 3.7), 6)
    })
    it('handle zeo values', function(){
        assert.strictEqual(calculateNumber(0, 0), 0);
        assert.strictEqual(calculateNumber(0.5, 0.5), 2);
    })
})
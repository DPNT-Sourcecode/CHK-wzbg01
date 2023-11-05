var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it
var assert = require('assert');
const checkout = require('../../../lib/solutions/CHK/checkout');

describe('CHK challenge: checkout', () => {



    it('single letters are valid', () => {
        assert.equal(checkout(["A"]),50)
    })

    it('calls something',() => {
        const testInput = `ABCDCBAABCABBAAA`
        checkout(testInput)
    })

    it(`["a"] returns -1`, () => {
        assert.equal(checkout(["a"]),-1)
    })

    it(`["-"] returns -1`,() => {
        assert.equal(checkout(["-"]),-1)
    })

    it(`["ABCa"] returns -1`,() => {
        assert.equal(checkout(["ABCa"]),-1)
    })

})
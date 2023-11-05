var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it
var assert = require('assert');
const checkout = require('../../../lib/solutions/CHK/checkout');

describe('CHK challenge: checkout', () => {
    //valid: ""
    //invalid: ABCa,-,a,AxA

    it('calls something',() => {
        // const testInput = `ABCDCBAABCABBAAA`
        const testInput = `AAABCD`
        checkout(testInput)
    })

    it(`["a"] returns -1`, () => {
        assert.equals(checkout(["a"]),-1)
    })

    it(`["-"] returns -1`,() => {
        assert.equals(checkout(["-"]),-1)
    })

    it(`["ABCa"] returns -1`,() => {
        assert.equals(checkout(["ABCa"]),-1)
    })

})


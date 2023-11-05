var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it
var assert = require('assert');
const checkout = require('../../../lib/solutions/CHK/checkout');

describe('CHK challenge: checkout', () => {
    //valid: ""
    //invalid: ABCa,-,a,AxA

    it('calls something',() => {
        const testInput = `ABCDCBAABCABBAAA`
        checkout(testInput)
    })

})
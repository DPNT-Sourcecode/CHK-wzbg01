var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it
var assert = require('assert');
const checkout = require('../../../lib/solutions/CHK/checkout');

describe('CHK challenge: checkout', () => {

    it('calls something',() => {
        const testInput = `3A2B1C1D`
        checkout(testInput)
    })

})

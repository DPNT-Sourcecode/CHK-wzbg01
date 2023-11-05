var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it
var assert = require('assert');
const checkout = require('../../../lib/solutions/CHK/checkout');

describe('CHK challenge: checkout', () => {

    it('single letters are valid', () => {
        assert.equal(checkout(["A"]),50)
        assert.equal(checkout(["B"]),30)
        assert.equal(checkout(["C"]),20)
        assert.equal(checkout(["D"]),15)
        assert.equal(checkout(["E"]),40)
    })

    it('basic happy path',() => {
        assert.equal(checkout(["ABCD"]),115)
        assert.equal(checkout(["AA"]),100)
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


    it(`Testing E scenarios`, () =>{
        assert.equal(checkout(["E"]),40)
        assert.equal(checkout(["BE"]),70)
        assert.equal(checkout(["EE"]),80)
        assert.equal(checkout(["BEE"]),80)
        assert.equal(checkout(["BBEE"]),95)
    })

    it(`New A Promo`,() => {
        assert.equal(checkout(["AAAAA"]),200)          //5
        assert.equal(checkout(["AAAAAA"]),250)         //6
        assert.equal(checkout(["AAAAAAA"]),300)        //7
        assert.equal(checkout(["AAAAAAAA"]),350)       //8 = 5+3
        assert.equal(checkout(["AAAAAAAAA"]),380)      //9 = 5+3+1
        assert.equal(checkout(["AAAAAAAAAA"]),400)      //10 = 2*5
    })

})
var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it
var assert = require('assert');
const checkout = require('../../../lib/solutions/CHK/checkout');

describe('CHK challenge: checkout', () => {

    // it('handles the alphabet',() =>{
    //     assert.equal(checkout(["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]),965)
    // })


    // it('single letters are valid', () => {
    //     assert.equal(checkout(["A"]),50)
    //     assert.equal(checkout(["B"]),30)
    //     assert.equal(checkout(["C"]),20)
    //     assert.equal(checkout(["D"]),15)
    //     assert.equal(checkout(["E"]),40)
    //     assert.equal(checkout(["F"]),10)
    // })

    // it('basic happy path',() => {
    //     assert.equal(checkout(["ABCD"]),115)
    //     assert.equal(checkout(["AA"]),100)
    // })

    // it(`invalid inputs`, () => {
    //     assert.equal(checkout(["a"]),-1)
    //     assert.equal(checkout(["-"]),-1)
    //     assert.equal(checkout(["ABCa"]),-1)
    // })

    // it(`Testing E scenarios`, () =>{
    //     assert.equal(checkout(["E"]),40)
    //     assert.equal(checkout(["BE"]),70)
    //     assert.equal(checkout(["EE"]),80)
    //     assert.equal(checkout(["BEE"]),80)
    //     assert.equal(checkout(["BBEE"]),110)
    // })

    // it(`New A Promo`,() => {
    //     assert.equal(checkout(["A"]),50)
    //     assert.equal(checkout(["AA"]),100)
    //     assert.equal(checkout(["AAA"]),130)
    //     assert.equal(checkout(["AAAA"]),180)
    //     assert.equal(checkout(["AAAAA"]),200)
    //     assert.equal(checkout(["AAAAAA"]),250)
    //     assert.equal(checkout(["AAAAAAA"]),300)
    //     assert.equal(checkout(["AAAAAAAA"]),330)
    //     assert.equal(checkout(["AAAAAAAAA"]),380)
    //     assert.equal(checkout(["AAAAAAAAAA"]),400) 
    // })

    // it('more complicated orders',() => {
    //     assert.equal(checkout(["ABCDEABCDE"]),280)
    //     assert.equal(checkout(["CCADDEEBBA"]),280)
    //     assert.equal(checkout(["AAAAAEEBAAABB"]),455)
    //     assert.equal(checkout(["ABCDECBAABCABBAAAEEAA"]),665)
    // })

    // it('item F cases',() => {
    //     assert.equal(checkout(["F"]),10)
    //     assert.equal(checkout(["FF"]),20)
    //     assert.equal(checkout(["FFF"]),20)
    //     assert.equal(checkout(["FFFF"]),30)
    //     assert.equal(checkout(["FFFFF"]),40)
    //     assert.equal(checkout(["FFFFFF"]),40)
    // })

    // it('U cases',() => {
    //     assert.equal(checkout(["UUU"]),120)

    // })

    // it('N cases',() => {
    //     assert.equal(checkout(["NNN"]),120)
    //     assert.equal(checkout(["NNNM"]),120)
    // })

    // it('odd case',() => {
    //     assert.equal(checkout(["PPPPQRUVPQRUVPQRUVSU"]),740)
    //     assert.equal(checkout(["QQQRRR"]),210)
    // })

    it('STXYZ',() => {
        checkout(["STXYZ"])
    })

})
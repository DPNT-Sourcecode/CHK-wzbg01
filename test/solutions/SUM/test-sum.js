var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it
var assert = require('assert');
const sum = require('../../../lib/solutions/SUM/sum');

describe('SUM challenge: adding two numbers', function() {
	it('should return 3, which is the sum of 1 and 2', function() {
	    assert.equal(sum(1, 2), 3);
	});

	//mocha syntax is something new. i used jest
	it('invalid x or y input', () =>{
		assert.throws(function() {sum(undefined,1), Error, "invalid x or y input"})
	})

	it('x is not positive', () => {
		let negativeX = -1
		let expectedErrorMessage = `x is not positive: ${negativeX}`
		assert.throws(function() {sum(negativeX,1), Error, `invalid x or y input: ${negativeX}`})
	})

	it('y is not positive', () => {

	})

	it('x is not an integer', () => {

	})

	it('y is an integer not between 0-100', () => {

	})



});

var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it
var assert = require('assert');
const sum = require('../../../lib/solutions/SUM/sum');

describe('SUM challenge: adding two numbers', function() {
	it('should return 3, which is the sum of 1 and 2', function() {
	    assert.equal(sum(0, 1), 1);
	});

	//mocha syntax is something new. i used jest
	it('x is not positive', () => {
		let negativeX = -1
		let expectedErrorMessage = `x is not positive: ${negativeX}`
		assert.throws(function() {sum(negativeX,1), Error, `invalid x or y input: ${negativeX}`})
	})

	it('y is not positive', () => {
		let negativeY = -1
		let expectedErrorMessage = `y is not positive: ${negativeY}`
		assert.throws(function() {sum(1,negativeY), Error, `invalid x or y input: ${negativeY}`})
	})

	it('x is not an integer', () => {
		assert.throws(function() {sum(1.1,2), Error, `x is not an integer between 0-100: 1.1`})
	})

	it('y is an integer not between 0-100', () => {
		assert.throws(function() {sum(1,101), Error, `y is not an integer between 0-100: 101`})
	})

});



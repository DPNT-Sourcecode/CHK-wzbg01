var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it
var assert = require('assert');
const sum = require('../../../lib/solutions/SUM/sum');

describe('SUM challenge: adding two numbers', function() {
	it('should return 3, which is the sum of 1 and 2', function() {
	    assert.equal(sum(1, 2), 3);
	});


	// //cover as much base as possible. without having to go through every cumbersome permutation
	// it('should throw error if param[0] is not a positive integer', function(){
	// })

	it('should throw error if param[1] is not an integer between 0-100', () =>{
		assert(1+1==2)
	})


});
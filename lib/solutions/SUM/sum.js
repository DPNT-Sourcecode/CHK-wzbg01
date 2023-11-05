'use strict';

module.exports = function (x, y) {    

    //fail-fast pattern
    if(!x || !y){
        throw new Error(`invalid x or y input`)
    }
    if(x<0){
        throw new Error(`x is not positive: ${x}`)
    }
    if(y<0){
        throw new Error(`y is not positive: ${y}`)
    }
    if(x>100 || !Number.isInteger(x)){
        throw new Error(`x is not an integer between 0-100: ${x}`)
    }
    if(y>100 || !Number.isInteger(y)){
        throw new Error(`y is not an integer between 0-100: ${y}`)
    }

    //when all conditions are met, return the sum
    // no need to check if solution returned is an integer, because the logical assumption is
    // the sum of two integers always returns an integer
    return x+y
};




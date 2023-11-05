'use strict';

//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {
    console.log(skus)
    let sumAnswer = 0
    //Assumption before first feedback: SKU's look like "4A3B1D"
    /**
    +------+-------+----------------+
    | Item | Price | Special offers |
    +------+-------+----------------+
    | A    | 50    | 3A for 130     |
    | B    | 30    | 2B for 45      |
    | C    | 20    |                |
    | D    | 15    |                |
    +------+-------+----------------+
    */

    console.log(/^([0-9]+[A-D]{1})+$/.test(skus))

    //1. Check if Valid SKU. Otherwise, return -1
    let isValidSku = /^([0-9]+[A-D]{1})+$/.test(skus)
    if(!isValidSku){
        return -1
    }

    //2. Split the valid SKU per quantity+item.
    let splitSku = skus.split(/^([0-9]+[A-D]{1})+$/)
    console.log(`split SKU's: ${splitSku}`)

    //3. For each item, calculate the sum (bear in mind promos) then sum total

    


};



'use strict';

//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {
    console.log(skus)
    
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

    //1. Check if Valid SKU. Otherwise, return -1
    const SKU_REGEX = /([0-9]+[A-D]{1})/

    let isValidSku = SKU_REGEX.test(skus)
    console.log(isValidSku)
    if(!isValidSku){
        return -1
    }

    //2. Split the valid SKU per quantity+item.
    let splitSku = skus.split(SKU_REGEX)
    console.log(splitSku)

    // //3. For each item, calculate the sum (bear in mind promos) then sum total
    // let sumAnswer = 0
    
    // for(const pair of splitSku){
    //     let item = pair[pair.length-1]
    //     console.log(item)
    //     let quantity = pair.substring(0,pair.length-1)
    //     console.log(quantity,item)
    
    
    // }
    





};



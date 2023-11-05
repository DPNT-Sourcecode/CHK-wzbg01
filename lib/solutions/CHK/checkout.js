'use strict';

//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {
    //Assumption before first input: SKU's look like "4A3B1D"
    //I believe I'm expected to fail the first results given the lack of information. which is cool
    //... or google what an SKU looks like?

    console.log(skus)

    console.log(/^([0-9]+[A-D]{1})+$/.test(skus))

    let isValidSku = /^([0-9]+[A-D]{1})+$/.test(skus)

    if(!isValidSku){
        return -1
    }




    //regex to interpet if string input is as expected [num][char]

    //referring to regex and testing formats using https://regex101.com/

    


};


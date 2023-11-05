'use strict';

//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {
    //Assumption before first feedback: SKU's look like "4A3B1D"
    console.log(skus)

    //edge case
    if(skus==""){return 0}

    //1. Check if Valid SKU. Otherwise, return -1
    const SKU_REGEX = /[A-D]|/

    let isValidSku = SKU_REGEX.test(skus)
    if(!isValidSku){
        return -1
    }

    //2. Count instances of each item
    let countA = 0
    let countB = 0
    let countC = 0
    let countD = 0
    for(let index = 0 ; index < skus.length ; index++){
        switch(skus[index]){
            case "A":
                countA++
                break
            case "B":
                countB++
                break
            case "C":
                countC++
                break
            case "D":
                countD++
                break
            default:
                break   //should never happen. regex covers it
        }
    }

    console.log(`count A: ${countA}\ncount B: ${countB}\ncount C: ${countC}\ncount D: ${countD}`)




    // //3. For each item, calculate the sum (bear in mind promos) then sum total
    let sumAnswer = 0
    
    for(const pair of processedArray){
        let item = pair[pair.length-1]
        let quantity = pair.substring(0,pair.length-1)
        console.log(quantity,item)


        switch(item){
            case "A":
                let quantityPromoA = Math.floor(quantity/3)
                let remainderPromoA = quantity%3
                sumAnswer += (quantityPromoA*130 + remainderPromoA*50)
                break
            case "B":
                let quantityPromoB = Math.floor(quantity/2)
                let remainderPromoB = quantity%2
                sumAnswer += (quantityPromoB*45 + remainderPromoB*50)
                break
            case "C":
                sumAnswer += quantity*20
                break
            case "D":
                sumAnswer += quantity*15
                break
            default:
                //should never happen. regex prevents this. reason for using switch case is linter 
                //usually says to use switch-case when more than 3 cases
                break
        }

        console.log(`cumulative sumAnswer = ${sumAnswer}`)
    }
    
    return sumAnswer
};
'use strict';

//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {

    //edge case
    if(skus==""){return 0}

    //1. Check if Valid SKU. Otherwise, return -1
    const SKU_REGEX = new RegExp('/[A-D]/')

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

    //3. For each item, calculate the sum (bearing in mind the promose, then sum the total)
    let sumAnswer = 0
    const items = ["A","B","C","D"]

    for(const item of items){
        switch(item){
            case "A":
                let quantityPromoA = Math.floor(countA/3)
                let remainderPromoA = countA%3
                sumAnswer += (quantityPromoA*130 + remainderPromoA*50)
                break
            case "B":
                let quantityPromoB = Math.floor(countB/2)
                let remainderPromoB = countB%2
                sumAnswer += (quantityPromoB*45 + remainderPromoB*30)
                break
            case "C":
                sumAnswer += countC*20
                break
            case "D":
                sumAnswer += countD*15
                break
            default:
                //should never happen. regex prevents this. reason for using switch case is linter 
                //usually says to use switch-case when more than 3 cases
                break
        }
    }
    
    return sumAnswer
};




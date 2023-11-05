'use strict';

//noinspection JSUnusedLocalSymbols
module.exports = function (input) {
    let skus = String(input)

    //edge case
    if(skus==""){return 0}

    //1. Check if Valid SKU. Otherwise, return -1
    const SKU_REGEX = new RegExp('^[ABCDE]+$')

    let isValidSku = SKU_REGEX.test(skus)
    if(!isValidSku){
        return -1
    }

    //2. Count instances of each item
    let countA = 0
    let countB = 0
    let countC = 0
    let countD = 0
    let countE = 0
    for(let index = 0 ; index < skus.length ; index++){
        switch(skus.charAt(index)){
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
            case "E":
                countE++
            default:
                break   //should never happen. regex covers it
        }
    }

    //3. For each item, calculate the sum (bearing in mind the promose, then sum the total)
    let sumAnswer = 0
    const items = ["A","B","C","D","E"]

    let bPrice = 0

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
                bPrice = (quantityPromoB*45 + remainderPromoB*30)
                sumAnswer += bPrice
                break
            case "C":
                sumAnswer += countC*20
                break
            case "D":
                sumAnswer += countD*15
                break
            case "E":
                sumAnswer += countE*40

                //promo for E
                let quantityValidFreeB = Math.floor(countE/2)
                if(countB == 0){
                    //do nothing
                } else if(countB <= quantityValidFreeB) {
                    //all of B is free
                    sumAnswer -= bPrice
                } else if(countB > quantityValidFreeB) {
                    console.log(`B's:${countB} | valid free B's: ${quantityValidFreeB}`)
                    
                }

                




                let validFreeBQuantityPromo = Math.floor(quantityValidFreeB/2)
                let validFreeBRemainderPromo = quantityValidFreeB%2

                let purchasedB = countB





            default:
                //should never happen. regex prevents this. reason for using switch case is linter 
                //usually says to use switch-case when more than 3 cases
                break
        }
    }
    
    console.log(`sumAnswer = ${sumAnswer}`)
    return sumAnswer
};
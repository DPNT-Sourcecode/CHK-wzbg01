'use strict';

//noinspection JSUnusedLocalSymbols
module.exports = function (input) {
    let skus = String(input)
    if(skus==""){return 0}
    const SKU_REGEX = new RegExp('^[ABCDEFGHIJKLMNOPQRSTUVWXYZ]+$')
    
    let isValidSku = SKU_REGEX.test(skus)
    if(!isValidSku){
        return -1
    }



    const itemArray = [
        ["A",0,50,0], //3A for 130, 5A for 200
        ["B",0,30,0], //2B for 45 
        ["C",0,20,0],
        ["D",0,15,0], 
        ["E",0,40,0], //2E get one B free  
        ["F",0,10,0], //2F get one F free 
        ["G",0,20,0],
        ["H",0,10,0], //5H for 45, 10H for 80
        ["I",0,35,0],
        ["J",0,60,0],
        ["K",0,70,0], //2K for 120
        ["L",0,90,0],
        ["M",0,15,0],
        ["N",0,40,0], //3N get one M free
        ["O",0,10,0],
        ["P",0,50,0], //5P for 200
        ["Q",0,30,0], //3Q for 80   
        ["R",0,50,0], //3R get one Q free
        ["S",0,20,0],                               //NEW
        ["T",0,20,0],                               //NEW
        ["U",0,40,0], //3U get one U free          
        ["V",0,50,0], //2V for 90, 3V for 130      
        ["W",0,20,0],
        ["X",0,17,0],
        ["Y",0,20,0],
        ["Z",0,21,0],

    ]

    //2. Count instances of each item
    for(let index = 0 ; index < skus.length ; index++){
        switch(skus.charAt(index)){
            case "A":
                itemArray[0][1]++
                break;
            case "B":
                itemArray[1][1]++
                break;
            case "C":
                itemArray[2][1]++
                break;
            case "D":
                itemArray[3][1]++
                break;
            case "E":
                itemArray[4][1]++
                break;
            case "F":
                itemArray[5][1]++
                break;
            case "G":
                itemArray[6][1]++
                break;
            case "H":
                itemArray[7][1]++
                break;
            case "I":
                itemArray[8][1]++
                break;
            case "J":
                itemArray[9][1]++
                break;
            case "K":
                itemArray[10][1]++
                break;
            case "L":
                itemArray[11][1]++
                break;
            case "M":
                itemArray[12][1]++
                break;
            case "N":
                itemArray[13][1]++
                break;
            case "O":
                itemArray[14][1]++
                break;
            case "P":
                itemArray[15][1]++
                break;
            case "Q":
                itemArray[16][1]++
                break;
            case "R":
                itemArray[17][1]++
                break;
            case "S":
                itemArray[18][1]++
                break;
            case "T":
                itemArray[19][1]++
                break;
            case "U":
                itemArray[20][1]++
                break;
            case "V":
                itemArray[21][1]++
                break;
            case "W":
                itemArray[22][1]++
                break;
            case "X":
                itemArray[23][1]++
                break;
            case "Y":
                itemArray[24][1]++
                break;
            case "Z":
                itemArray[25][1]++
                break;
            default:
                break
        }
    }

    //variables for promos
    let bPrice = 0
    let qPrice = 0

    //3. calculate the amount to be paid for each item
    for(let index = 0 ; index < itemArray.length ; index++){        
        let item = itemArray[index][0]
        let quantity = itemArray[index][1]
        let unitPrice = itemArray[index][2]


        switch(item){
 
            case "Z":
                //handles the sum for all other cases
                const sArray = Array(itemArray[18][1]).fill(itemArray[18][2])
                const tArray = Array(itemArray[19][1]).fill(itemArray[19][2])
                const xArray = Array(itemArray[23][1]).fill(itemArray[23][2])
                const yArray = Array(itemArray[24][1]).fill(itemArray[24][2])
                const zArray = Array(itemArray[25][1]).fill(itemArray[25][2])
                //concat smaller numbers first - quicker than using .sort()
                const STXYZarray = xArray.concat(sArray).concat(tArray).concat(yArray).concat(zArray)
                // console.log(STXYZarray)
                let promoArray = []
                for(let index = STXYZarray.length-1 ; index > 0 ; index-= 2){
                    // console.log(index,STXYZarray.length)
                    if(STXYZarray.length>2){
                        promoArray.push(45)
                        STXYZarray.pop()
                        STXYZarray.pop()
                        STXYZarray.pop()
                    }
                }
                let mixedArray = STXYZarray.concat(promoArray)
                // console.log(mixedArray)
                let sumPromoSTXYZ = 0
                mixedArray.forEach((element) => {sumPromoSTXYZ+=element})
                // console.log(sumPromoSTXYZ)
                itemArray[25][3] = sumPromoSTXYZ
                break

            //all normal scenarios
            case "C":
            case "D":
            case "G":
            case "I":
            case "J":
            case "L":
            case "M":
            case "O":
            case "W":
                itemArray[index][3] = quantity*unitPrice
                break;
            //special cases
            case "A":
                let quantityPromoA = Math.floor(quantity/5)
                let remainderPromoA = quantity%5
                let smallerQuantityPromoA = Math.floor(remainderPromoA/3)
                let smallerRemainederPromoA = remainderPromoA%3
                itemArray[index][3] = (quantityPromoA*200 + smallerQuantityPromoA*130 + smallerRemainederPromoA*unitPrice)
                break
            case "B":
                let quantityPromoB = Math.floor(quantity/2)
                let remainderPromoB = quantity%2
                bPrice = (quantityPromoB*45 + remainderPromoB*unitPrice)
                itemArray[index][3] = bPrice
                break
            case "E":
                itemArray[index][3] = quantity*unitPrice     
                //promo for E
                let countB = itemArray[1][1]
                let quantityValidFreeB = Math.floor(quantity/2)
                if(quantityValidFreeB == 0){
                } else if(countB <= quantityValidFreeB) {
                    itemArray[1][3] = 0
                } else if(countB > quantityValidFreeB) {
                    let newBCountToPay = countB-quantityValidFreeB
                    let divB = Math.floor(newBCountToPay/2)
                    let remB = newBCountToPay%2
                    let newBPrice = (divB*45 + remB*30)
                    itemArray[1][3] = itemArray[1][3] - bPrice + newBPrice
                }
                break
            case "F":
                if(quantity<3){
                    itemArray[index][3] = quantity*unitPrice
                } else if(quantity==3){
                    itemArray[index][3] = 20
                } else {
                    let numberOfAvailableFreeFs = Math.floor(quantity/3)
                    itemArray[index][3] = (quantity*unitPrice - numberOfAvailableFreeFs*unitPrice)
                }
                break
            case "H":
                let quantityPromoH = Math.floor(quantity/10)
                let remainderPromoH = quantity%10
                let smallerQuantityPromoH = Math.floor(remainderPromoH/5)
                let smallerRemainderPromoH = remainderPromoH%5
                itemArray[index][3] = (quantityPromoH*80 + smallerQuantityPromoH*45 + smallerRemainderPromoH*unitPrice)
                break        
            case "K":
                let quantityPromoK = Math.floor(quantity/2)
                let remainderPromoK = quantity%2
                itemArray[index][3] = (quantityPromoK*120 + remainderPromoK*unitPrice)
                break
            case "N":
                itemArray[index][3] = quantity*unitPrice

                //promo for N = 3N get one M free
                let countM = itemArray[12][1]
                let quantityValidFreeM = Math.floor(quantity/3)
                if(quantityValidFreeM==0){
                } else if(countM <= quantityValidFreeM){
                    itemArray[12][3] = 0
                } else if(countM > quantityValidFreeM) {
                    let newMCountToPay = countM-quantityValidFreeM
                    item[12][3] = newMCountToPay*unitPrice
                }
                break
            case "P":
                let quantityPromoP = Math.floor(quantity/5)
                let remainderPromoP = quantity%5
                itemArray[index][3] = (quantityPromoP*200 + remainderPromoP*unitPrice)
                break
            case "Q":
                let quantityPromoQ = Math.floor(quantity/3)
                let remainderPromoQ = quantity%3
                qPrice = (quantityPromoQ*80 + remainderPromoQ*unitPrice)
                itemArray[index][3] = qPrice
                break
            case "R":
                itemArray[index][3] = quantity*unitPrice     
                //promo for R => 3R get one Q free
                let countQ = itemArray[16][1]
                let quantityValidFreeQ = Math.floor(quantity/3)
                if(quantityValidFreeQ == 0){
                } else if (countQ <= quantityValidFreeQ){
                    itemArray[16][3] = 0
                } else if (countQ > quantityValidFreeQ) {
                    let newQCountToPay = countQ-quantityValidFreeQ
                    let divQ = Math.floor(newQCountToPay/3)
                    let remQ = newQCountToPay%3
                    let newQPrice = (divQ*80 + remQ*30)
                    itemArray[16][3] = itemArray[16][3] - qPrice + newQPrice
                }
                break
            case "U":
                if(quantity<4){
                    itemArray[index][3] = quantity*unitPrice
                } else if (quantity==4){
                    itemArray[index][3] = 120
                } else {
                    let numberOfAvailableFreeU = Math.floor(quantity/4)
                    itemArray[index][3] = (quantity*unitPrice - numberOfAvailableFreeU*unitPrice)
                }
                break
            case "V":
                let quantityPromoV = Math.floor(quantity/3)
                let remainderPromoV = quantity%3
                let smallerQuantityPromoV = Math.floor(remainderPromoV/2)
                let smallerRemainderPromoV = remainderPromoV%2
                itemArray[index][3] = (quantityPromoV*130 + smallerQuantityPromoV*90 + smallerRemainderPromoV*unitPrice)
                break


            default:
                //should never happen. regex prevents this. reason for using switch case is linter 
                //usually says to use switch-case when more than 3 cases
                break
        }
    }



    //calculate sum
    let sum = 0
    for(let index = 0 ; index < itemArray.length ; index++){
        sum+= itemArray[index][3]
    }
    return sum
};





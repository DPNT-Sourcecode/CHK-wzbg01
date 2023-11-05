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
        ["H",0,10,0], //5H for 45, 10H for 80  (like A)
        ["I",0,35,0],
        ["J",0,60,0],
        ["K",0,80,0], //2K for 150 (like B)
        ["L",0,90,0],
        ["M",0,15,0],
        ["N",0,40,0], //3N get one M free         <<warning>>
        ["O",0,10,0],
        ["P",0,50,0], //5P for 200 
        ["Q",0,30,0], //3Q for 80   
        ["R",0,50,0], //3R get one Q free  
        ["S",0,30,0],
        ["T",0,20,0],
        ["U",0,40,0], //3U get one U free 
        ["V",0,50,0], //2V for 90, 3V for 130 
        ["W",0,20,0],
        ["X",0,90,0],
        ["Y",0,10,0],
        ["Z",0,50,0],

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


    for(let index = 0 ; index < itemArray.length ; index++){
        
    }

    
    
    

    
    
    
    
    // let bPrice = 0
    // for(const item of items){
    //     switch(item){
    //         case "A":
    //             let quantityPromoA = Math.floor(countA/5)
    //             let remainderPromoA = countA%5
    //             let smallerQuantityPromoA = Math.floor(remainderPromoA/3)
    //             let smallerRemainederPromoA = remainderPromoA%3
    //             sumAnswer += (quantityPromoA*200 + smallerQuantityPromoA*130 + smallerRemainederPromoA*50)
    //             break
    //         case "B":
    //             let quantityPromoB = Math.floor(countB/2)
    //             let remainderPromoB = countB%2
    //             bPrice = (quantityPromoB*45 + remainderPromoB*30)
    //             sumAnswer += bPrice
    //             break
    //         case "C":
    //             sumAnswer += countC*20
    //             break
    //         case "D":
    //             sumAnswer += countD*15
    //             break
    //         case "E":
    //             sumAnswer += countE*40
    //             //promo for E
    //             let quantityValidFreeB = Math.floor(countE/2)
    //             if(quantityValidFreeB == 0){
    //             } else if(countB <= quantityValidFreeB) {
    //                 sumAnswer -= bPrice
    //             } else if(countB > quantityValidFreeB) {
    //                 let newBCountToPay = countB-quantityValidFreeB
    //                 let divB = Math.floor(newBCountToPay/2)
    //                 let remB = newBCountToPay%2
    //                 let newBPrice = (divB*45 + remB*30)
    //                 sumAnswer = sumAnswer - bPrice + newBPrice
    //             }
    //             break
    //         case "F":
    //             if(countF<3){

    //                 sumAnswer+= countF*10
    //             } else if(countF==3){
    //                 sumAnswer+= 20
    //             } else{
    //                 let numberOfAvailableFreeFs = Math.floor(countF/3)
    //                 sumAnswer += (countF*10 - numberOfAvailableFreeFs*10)
    //             }
    //             break
    //         default:
    //             //should never happen. regex prevents this. reason for using switch case is linter 
    //             //usually says to use switch-case when more than 3 cases
    //             break
    //     }
    // }
    


    
    return sumAnswer
};






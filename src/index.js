module.exports = function multiply(first, second) {
    let firstArr = getNumericArr(first).reverse();
    let secondArr = getNumericArr(second).reverse();


    let resultArr = [];
    toNumber(firstArr);
    toNumber(secondArr);

    let length = firstArr.length + secondArr.length + 1;
    for(let i = 0;i < length;i++)resultArr[i] = 0;

    for(let i = 0; i < firstArr.length; i++){
        for(let j = 0; j < secondArr.length;j++){
            resultArr[i+j] += firstArr[i] * secondArr[j];
        }
    }

    for(let i = 0; i < length-1; i++){
        resultArr[i+1] += Math.floor(resultArr[i] /10);
        resultArr[i] %= 10;
    }



    while(isNaN(resultArr[length]) || resultArr[length] == 0){
        length--;
    }
    let finishArr = "";
    for(let i = 0;i <= length;i++){
        finishArr += resultArr[length-i];
    }

    return finishArr;
}

function getNumericArr(number){
    let arr = String(number).split("");
    return arr;
}




function toNumber(arr){
    for(let i = 0;i < arr.length; i++){
        arr[i] = +arr[i];
    }
}
let a = 10;





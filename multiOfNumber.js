
// factorial**
// 3!=3*2*1
// 4!=4*3*2*1


function multiplicationOfNumber (number){
    let result =1;
    for( i=1; i<= number ; i++){
        result =result*i;
        // console.log(result,i);
    }
    return result;
}

const result =multiplicationOfNumber(4);
console.log(result);
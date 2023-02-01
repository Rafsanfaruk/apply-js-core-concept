// 1+2+3+4+5+6+7+8+9
// let sum = 0;
// for (let i = 0; i<=9 ; i++){
//     sum=sum+i;
//     console.log(i,sum);
    
// }
function sumOfNumbers(number){

    let sum = 0;

    for (let i = 1; i <=number ; i++){
        sum = sum+i;
        // console.log(i,sum);
        
    }
    return sum;
}

var sum=sumOfNumbers(8);
console.log(sum);
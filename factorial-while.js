function factorial (number){
    let num =1;
    let result =1;
    while(num <=number ){
        result =result*num;
        num++;
    }
    
    return result;
}
const number=6;
const facto= factorial(2);
console.log('factorial of:',facto)

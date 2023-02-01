function isEven(number){
    const remainder =number%2;
//    console.log(remainder);
    if( remainder === 0){
        return true;
        // console.log('Number is even');
    }
    else{
        return false;
        // console.log('Number is odd');
    }
}
// isEven(59);
// isEven(46890058);
 const myNumber =isEven(5789699);
 console.log(myNumber);
 const herNumber = isEven(5998752);
console.log(herNumber);
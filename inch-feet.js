function inchToFeet (inches){
 const feet =inches/12;
 return feet;
}

const dadaInches = 144;
const dadaFeet =inchToFeet(dadaInches);
console.log('dadaFeet',dadaFeet);

 const dadiInches= 164;
 const dadiFeet =inchToFeet(dadiInches);
 console.log('dadiFeet',dadiFeet.toFixed(2));


 
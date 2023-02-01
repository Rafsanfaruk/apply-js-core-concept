function mileToKilometer(miles){
    const km =miles*1.609;
    return km;
} 

const mainMile =2;
const mainKm =mileToKilometer(mainMile);
console.log('Output miles',mainKm);

function  KilogramsToPounds(kilo){
    const pound =kilo*2.2046;
    return pound;
}

const kg =5;
const totalKg=KilogramsToPounds(kg);
console.log('totalkg',totalKg);
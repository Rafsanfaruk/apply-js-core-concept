function isLeapYear(year){
    const remainder = year % 4;
    if(remainder === 0){
        return true;
        // console.log('Is leap year',year);
    }
    else{
        return false;
        // console.log('Is not leap year',year);
    }
}
// isLeapYear(2023);
// isLeapYear(2060);

const myYearIsLeapYear= isLeapYear(2023);
console.log('My year',myYearIsLeapYear);

const herYearIsLeapYear=isLeapYear(2060);
console.log('Her Year',herYearIsLeapYear);
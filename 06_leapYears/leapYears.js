const leapYears = function(year) {

    // If year is divisible by 4 return true
    // Unless it is divisible by 100 but not divisible by 400 return false
    return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? true : false;
};

console.log(leapYears(700))


// Do not edit below this line
module.exports = leapYears;

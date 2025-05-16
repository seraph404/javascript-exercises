const leapYears = function(year) {
    if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
        return true;
    } else {
        return false;
    }
};

// is divisible by 4
// is not divisible by 100 unless divisible by 400


// Do not edit below this line
module.exports = leapYears;

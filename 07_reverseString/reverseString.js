const reverseString = function(string) {
    let myArray = string.split('');
    myArray = myArray.reverse();
    myArray = myArray.join('');
    return myArray;
};

// Do not edit below this line
module.exports = reverseString;

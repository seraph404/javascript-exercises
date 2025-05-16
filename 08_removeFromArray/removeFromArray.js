const removeFromArray = function(array, ...valuesToRemove) {
  let newArray = [];
  array.forEach(element => {
    if (!valuesToRemove.includes(element)) {
        newArray.push(element);
    }
  });
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;

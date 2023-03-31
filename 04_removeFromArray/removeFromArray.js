const removeFromArray = function(arr1, ...num1) {
    let arrNums = num1

    console.log(arrNums)
    arr1 = arr1.filter((num) => {
        if(!(arrNums.includes(num))){
            return num
        }
    })
    return arr1
};

// Do not edit below this line
module.exports = removeFromArray;

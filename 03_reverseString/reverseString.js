const reverseString = function(str1) {
    let reverseStr = ""

    for(let i = str1.length - 1; i >= 0; i--){
        reverseStr += str1[i]
    }

    return reverseStr
};

console.log(reverseString('idol'))

// Do not edit below this line
module.exports = reverseString;

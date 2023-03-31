const repeatString = function(str1, count) {
    if(count == 0){
        return ''
    } else if(count < 1) {
        return `ERROR`
    } 

    let str1Concat = str1
    for(let i = 1; i <= count - 1; i++){
        str1Concat += str1
    }
    return str1Concat
};

// Do not edit below this line
module.exports = repeatString;

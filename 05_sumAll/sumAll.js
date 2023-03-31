const sumAll = function(x, y) {
    if((isNaN(x)) || (isNaN(y))){
        return 'ERROR'
    } else if ((typeof x === 'string') || (typeof y === 'string')){
        return `ERROR`
    } else if (x < 0 || y < 0) {
        return 'ERROR'
    }

    let sum = 0

    if(x < y){
        for(x; x <= y; x++){
            sum += x
        }
    } else if (y < x){
        for(y; y <= x; y++){
            sum += y
        }
    } else {
        sum += x
    }

    return sum
};

console.log(sumAll(4,4))

// Do not edit below this line
module.exports = sumAll;

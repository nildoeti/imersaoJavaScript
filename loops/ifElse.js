// if/else conditional


// first example
function positiveNumber(num) {
    let result;
    
    if (num < 0) {
        result = false;
    } else {
        result = true;
    }
    
    return result;
}
console.log(positiveNumber(-1)); // false
console.log(positiveNumber(1)); // true


// second example
function negativeNumber(num) {
    let result;

    const isNegative = num < 0;

    if (num < 0) {
        result = false;
    } else {
        result = true;
    }
}

// third example
function positiveNumber(num) {
    const isNegative = num < 0;

    if (isNegative) {
        return false;
    }

    return true;
}


// fourth example
function positiveNumber(num) {
    const isNegative = num < 0;
    const greatThanTen = num > 10;

    if (isNegative) {
        return 'this number is negative';
    } else if (!isNegative && greatThanTen) {
        return 'this number is positive and greater than 10';
    }

    return 'this number is positive';
}
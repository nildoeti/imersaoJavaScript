// PRÉ ES2015
function exponencial(array, num) {
    if (num === undefined) {
        num = 1
    }
    
    const result = []; // []

    for(let i; i < array.length; i++) {
    result.push(array[i] ** num);
    }

    return result;
}

exponencial([1, 2, 3, 4])
exponencial([1, 2, 3, 4], 4);


// PÓS ES2015
function exponencial(array, num = 1) {
    const result = [];

    for(let i = 0; i < array.length; i++) {
        result.push(array[i] ** num);
    }

    return result;
}

exponencial([1, 2, 3, 4]);
exponencial([1, 2, 3, 4], 5);


// OBJETO arguments
// é uma array com parâmetros passada quando a função é invocada

function findMax() {
    let max = -Infinity;

    for(let i = 0; i < arguments.length; i++) {
        if(arguments[i] > max) {
            max = arguments[i];
        }
    }

    return max;
}

console.log(findMax(1, 2, 3, 88));
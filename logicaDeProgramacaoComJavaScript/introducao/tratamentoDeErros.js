// console.log(naoExisto); // ReferenceError: naoExisto is not defined

// exemplo 1

// try {

//     console.log(naoExisto); 
// } catch(error) {
//     console.log('naoExisto não esta definida como uma variável');
//     console.log(error);
// }


// exemplo 2

// function sum(x, y) {
//     // função para teste se é um numeral, e se não for gerar erro...
//     if (typeof(x) !== 'number' || typeof(y) !== 'number') {
//         throw new RangeError('x e y, not are numbers.')
//     }

//     return x + y;
// }

// try {

//     console.log(sum(2, 4));
//     console.log(sum(2, '4'));    
// } catch(error) {
//     console.log(error);
// }




// exemplo 3
notNumber = (a, b) => {
    if (typeof(a) !== 'number' || typeof(b) !== 'number') {
        throw new Error('Not is a number.')
    }

    return a * b;
}

try {
    console.log(notNumber(2, '5'));
    console.log(notNumber(2, 54));
} catch (error) {
    console.log(error);
}
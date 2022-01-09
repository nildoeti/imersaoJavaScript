/*
	Array.prototype.reduce()
	O método reduce() executa uma função reducer (fornecida por você) para cada 
	elemento do array, resultando num único valor de retorno.
*/
const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;

const result1 = array1.reduce(reducer);
console.log(result1); // 10

const result2 = array1.reduce(reducer, 5);
console.log(result2); // 15


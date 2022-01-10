/*
	Function.prototype.apply()

	O método apply() chama uma função com um dado valor this e arguments 
	providos como uma array (ou um objeto parecido com um array).
*/



// número mim/max de um array
let number = [5, 6, 2, 3, 0, 1];

/* utilizando Math.min/Math.max apply */
let max = Math.max.apply(null, number); /* Isso está prestes a ser igual a Math.max(numbers[0], ...)
                                            ou Math.max(5, 6, ...) */
console.log(max);

let min = Math.min.apply(null, number);
console.log(min);
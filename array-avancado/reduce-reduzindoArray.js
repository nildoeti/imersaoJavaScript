/*
 * Reduce - usada para reduzir o tamanho de um, array
 * */

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]; // array de númros


// exemplo 5 - some todos os números (reduce)
const total = numeros.reduce((acumulador, valor, indice, array) => {
   acumulador += valor;
    return acumulador; // retorna o valor total dos valores do array
}, 0);

console.log(total);

// exemplo4
//const total = numeros.reduce( (acumulador, valor, indice, array) => {
    //console.log(array)
    //return array;
//}, 0);


// exemplo 3
// const total = numeros.reduce((acumulador, valor, indice, array) => {
//     console.log(indice);
//     return indice;
// }, 0);



// exemplo 2
// const total = numeros.map( (acumulador, valor, indice, array) => {
// 	console.log(valor);
// 	return valor;
// }, 0);


// exemplo 1
// const total = numeros.reduce( (acumulador, valor, indice, array) => {
// 	console.log(acumulador);
// 	return acumulador; // 
// }, 0);

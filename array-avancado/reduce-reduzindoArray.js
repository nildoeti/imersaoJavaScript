/*
 * Reduce - usada para reduzir o tamanho de um, array
 * */

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]; // array de números

// exemplo 9
const total = numeros.reduce((acumulador, valor) => {
    if (valor %2 === 0) {
        acumulador += valor;
        console.log(`${acumulador}`);
    }
    return acumulador;
}, 0);

console.log(total);




// retorne um array com o dobro dos valores (Map)
// const total = numeros.reduce((acumulador, valor) => {
//     acumulador.push(valor * 2);
//     return acumulador;
// }, []); 
// console.log(total);

/*
    Saida para variável total
    [
    10, 100, 160,  2,  4,  6,
    10,  16,  14, 22, 30, 44,
    54
    ]
*/


// retorne um arrey com os pares (Filter) - OBS: não fazer com reduce, é apenas exemplo, use filter
// const total = numeros.reduce((acumulador, valor, indice, array) => {
//     if (valor %2 === 0) acumulador.push(valor);
//     return acumulador;
// }, []);
// console.log(total); // [ 50, 80, 2, 8, 22 ]


// exemplo 5 - some todos os números (reduce)
// const total = numeros.reduce((acumulador, valor, indice, array) => {
//    acumulador += valor;
//     return acumulador; // retorna o valor total dos valores do array
// }, 0);

// console.log(total);

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

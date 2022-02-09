/*
    Fonte MDN: url(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/function)
*/

// Declarações de funções hoisting
hoisted(); // log foo

function hoisted() {
    console.log('foo');
};

// Note que function expressions não são hoisted:
// noHosted(); // TypeError: noHosted is not a function
//
// var noHosted = function() {
//     console.log('bar');
// };


/*
    Usando funções
    O seguinte código declara uma função que retorna a quantidade total das
    vendas, quando dados os números de unidades vendidas dos produtos a, b e c.
*/

function calc_sales(units_a, units_b, units_c){
    return units_a * 79 + units_b * 129 + units_c * 699;
}

const result = calc_sales(2, 4, 6);
console.log(result); // 4868

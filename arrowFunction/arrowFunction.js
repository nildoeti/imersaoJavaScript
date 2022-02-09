/*
    Arrow functions
    Uma expressão arrow function possui uma sintaxe mais curta quando comparada
    a uma expressão de função (function expression) e não tem seu próprio this,
    arguments, super ou new.target. Estas expressões de funções são melhor
    aplicadas para funções que não sejam métodos, e elas não podem ser usadas
    como construtoras (constructors).
    Fonte MDN: url(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
*/


// Funções mais curtas
var elements = [
    'Hidrogen',
    'Helium',
    'Lithium',
    'Beryllum'
];

const result = elements.map(function(element) {
    return element;
    // // esta setença retorna [ 'Hidrogen', 'Helium', 'Lithium', 'Beryllum' ]
});
console.log(result);

/*
    Expressão de função (function expression)
    A palavra-chave function pode ser usada para definir uma função dentro de
    uma expressão.
    Fonte MDN: url(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/function)
*/

// O exemplo a seguir define uma função sem nome e a atribui a x. A função
// retorna o quadrado de seu argumento:

var x = function(y) {
    return y * y;
};
console.log(x(4)); // 16

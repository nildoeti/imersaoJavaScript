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

/*
    Expressão de função nomeada
    Se você quer se referir à função atual dentro do corpo da função, você terá
    que criar uma expressão de função nomeada. Este nome será local apenas para
    o corpo (escopo) da função. Isto ainda evita o uso da propriedade
    não-padronizada arguments.callee.
*/
var math = {
    'factorial': function factorial(n) {
        if (n <= 1)
            return 1;
        return n * factorial(n - 1);
    }
};

console.log(math.factorial(4)); // 24

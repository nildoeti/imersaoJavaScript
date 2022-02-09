/*
    Fonte MDN: url(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/function)
*/

// Declarações de funções hoisting
hoisted(); // log foo

function hoisted() {
    console.log('foo');
};

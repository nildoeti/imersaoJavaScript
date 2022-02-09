/*
    Fonte MDN: url(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/function)
*/

// Declarações de funções hoisting
hoisted(); // log foo

function hoisted() {
    console.log('foo');
};

// Note que function expressions não são hoisted:
noHosted(); // TypeError: noHosted is not a function

var noHosted = function() {
    console.log('bar');
};

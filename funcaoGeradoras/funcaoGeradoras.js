/*
    function*
    A declaração function* (palavra chave function seguida de um asterisco)
    define uma função geradora (generator function), que retorna um objeto
    Generator.

    Fonte MDN url(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/function*)
*/

// exemplo de função geradora
function* fnGeradora(i) {
    yield i;
    yield i + 10;
    yield i = 20;
}

let fnGen = fnGeradora(10);

console.log(fnGen.next().value);
console.log(fnGen.next().value);
console.log(fnGen.next().value);

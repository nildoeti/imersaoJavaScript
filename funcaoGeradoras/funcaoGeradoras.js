/*
    function*
    A declaração function* (palavra chave function seguida de um asterisco)
    define uma função geradora (generator function), que retorna um objeto
    Generator.

    Fonte MDN url(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/function*)
*/

// exemplo 1 de função geradora
function* fnGeradora(i) {
    yield i;
    yield i + 10;
    yield i + 30;
    yield i + 60;
}

let fnGen = fnGeradora(5);

console.log(fnGen.next().value); // 5
console.log(fnGen.next().value); // 15
console.log(fnGen.next().value); // 35
console.log(fnGen.next().done); // retorna true, pois a função geradora produziu seu ultimo valor


// exemplo 2 simples
function* idMaker () {
    let index = 0;
    while(true) 
        yield index++;
}

let fnGen2 = idMaker();

console.log(fnGen2.next().value); // 0
console.log(fnGen2.next().value); // 1
console.log(fnGen2.next().value); // 2
console.log(fnGen2.next().value); // 3

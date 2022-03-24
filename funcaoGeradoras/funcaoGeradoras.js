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

// exemplo 3 com yield
function* outroGerador(i) {
    yield i + 1;
    yield i + 2;
    yield i + 3;
}

function* geradora(i) {
    yield i;
    yield i + outroGerador(i);
    yield i + 10;
}


let gen = geradora(10);

console.log(gen.next().values); // 10
console.log(gen.next().values); // 11
console.log(gen.next().values); // 12
console.log(gen.next().values); // 13
console.log(gen.next().values); // 20


// Passando argumentos em geradores
function* logGerator(i) {
    console.log(0);
    console.log(1, yield);
    console.log(2, yield);
    console.log(3, yield);
}

let logGe = logGerator();

// a primeira chamada next é executada desde o início da função
// até a primeira declaração yield
logGe.next(); // 0
logGe.next('pretzel'); // 1 pretzel
logGe.next('california'); // 2 california
logGe.next('mayonnaise'); // 3 mayonnaise

// Declaração de retono em um gerador
function* yieldAndReturn() {
    yield 'Y';
    yield 'R';
    yield 'unreachable';
}

let genYield = yieldAndReturn();

console.log(genYield.next()); // { value: 'Y', done: false }
console.log(genYield.next()); // { value: 'R', done: false }
console.log(genYield.next()); // { value: 'unreachable', done: false }

// Gerador definido em uma expressão
const foo = function* () {
    yield 10;
    yield 20;
};

const bar = foo();

console.log(bar.next()); // { value: 10, done: false }
console.log(bar.next()); // { value: 20, done: false }


// acessando os valores de uma função geradora com o laço for
function* numeros() {
    yield 0;
    yield 1;
    yield 2;
}

const fnNum = numeros();
for (let valor of fnNum) {
    console.log(valor); // 0 1 2
}

// delegando valores de uma função geradora para outra função geradora
function* geradora1() {
    yield 100;
    yield 101;
    yield 102;
}

function* geradora2() {
    yield* geradora1();
    yield 103;
    yield 104;
    yield 105;
}

const g3 = geradora2();
for (let valor of g3) {
    console.log(valor); // 100 101 102 103 104 105
}

// função geradora que retorna funções
function* geradora3() {

    yield function () {
        console.log('vindo da função geradora 3');
    }

    // ...
    // pode trabalhar várias funções
    // ...

    yield function () {
        console.log('vindo da função geradora 3');
    }

}

const g4 = geradora3();
const func1 = g4.next().value;
const func2 = g4.next().value;

func1(); // vindo da função geradora 3
func2(); // vindo da função geradora 3

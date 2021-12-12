/*
    #do...while
    A declaração do...while cria um laço que executa uma declaração até que o
    teste da condição for falsa (false). A condição é avaliada depois que o
    bloco de código é executado, resultando que uma declaração seja executada
    pelo menos uma vez.

    Sintaxe

    do
       statement
    while (condition);

    Maiores informações: MDN : URL(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)
*/


    let resultado = ' ';
    let inicio = 0;
    do {
        inicio += 1;
        resultado += inicio + ' ';
    } while (inicio < 5);

    console.log(resultado);
/*
    #while
    A declaração while cria um laço que executa uma rotina especifica enquanto
    a condição de teste for avaliada como verdadeira. A condição é avaliada
    antes da execução da rotina.

    Sintaxe
    while (condição) {
        rotina
    }

    Maiores informações: MDN : URL(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/while)
*/

//
// // exemplo 6
// function roleta(min, max) {
//     const numeros = Math.random() * (max - min) * 3.1415;
//     return Math.floor(numeros);
// }
//
// let min = 1;
// let max = 5;
// let numerosAleatorios = roleta(min, max);
//
// while (numerosAleatorios !== 10) {
//     numerosAleatorios = roleta(min, max);
//     console.log(numerosAleatorios);
// }


// exemplo 5
// function numerosAleatorios(min, max) {
//     let numeros = Math.random() * (max - min) * 3.1415;
//     return Math.floor(numeros);
// }
//
// let numAleatorios = numerosAleatorios(1, 400);
// console.log(numAleatorios);


// exemplo 4
// function numerosAleatorios(min, max) {
//     const numeros = Math.random() * (max - min) * 3.1415;
//     console.log(numeros);
// }
//
// const resultados = numerosAleatorios(1, 5);
// console.log(resultados);


// function random(min, max) {
//     const r = Math.random() * (max - min) * min;
//     return r;
// }
//
// let rand = random(1, 50);
// console.log(rand);



// let contador = 0;
// const cor = 'azul';
//
// // exemplo 3
// while (contador <= 10) {
//     console.log(contador * 2);
//     contador++;
// }


// exemplo 2
// while (contador <= cor.length) {
//     console.log(cor[contador]);
//     contador++;
// }



// exemplo 1
// while (contador <= 10) {
//     console.log(contador);
//     contador++;
// }

console.log('Segue a vida...');

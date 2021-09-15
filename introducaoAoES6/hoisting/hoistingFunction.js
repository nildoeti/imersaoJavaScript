/*
Hoisting é o comportamento padrão do JavaScript de mover todas as declarações
para o topo do escopo atual (para o topo do script atual ou da função atual).
*/

// function minhaFuncao() {
//   log('Hoisting de função');
//
//   function log(value) {
//     console.log(value);
//   }
// }
//
// minhaFuncao();

// function nomeGato(nome) {
//   console.log('O nome do gato é: ' + nome);
// }
//
// nomeGato('Tigger');

// var nomeGato = 'Tigger';
// function minhaFuncao(nome) {
//   console.log('O nome do gato é ' + nome);
// }
//
// minhaFuncao(nomeGato);


// nomeGato('Tigger');
// function nomeGato(nome) {
//   console.log('O nome do gato é ' + nome);
// }


// /*
//   O JavaScript apenas eleva (hoists) as declarações, não as inicializações. Se
//   uma variável for declarada e inicializada após usá-la, o valor será undefined.
//   Por exemplo:
// */
//
// var num;
// console.log(num);
// num = 9;

// /*
//   Se você declarar a variável depois que ela for usada, mas inicializá-la
//   antecipadamente, ela retornará o valor:
// */
//
// num = 8;
// console.log(num);
// var num; // variável definida após declaração

// exemplo 1: não eleva Hoist
// var x = 1;
// console.log(x + ' ' + y);
// var y = 2;
// // isso não funciona pois JavaScript so eleva as declarações


// // exemplo 2: hoists
// var num1 = 3; // declara e inicializa num1
// num2 = 4; // inicializa num2 sem declarar
// console.log(num1 + ' ' + num2);
// var num2; // declara num2 para Hoisting

// exemplo 3: hoists
a = 'biscoito'; // inicializa variável sem declarar
b = 'chocolate'; // inicializa variável sem declara
console.log(a + ' ' + b);
var a, b; // declara as variáveis para Hoisting

/**
 * O objeto JavaScript Number é um objeto encapsulado que permite você trabalhar 
 * com valores numéricos. Um objeto Number é criado utilizando o construtor 
 * Number().
 * 
 */

let numeroUm = 5;
let numeroDois = 2;

let soma = numeroUm + numeroDois;
let subtracao = numeroUm + numeroDois;
let multiplicacao = numeroUm * numeroDois;
let divisao = numeroUm / numeroDois;
let restoDivisao = numeroUm % numeroDois;
let potencia = numeroUm ** numeroDois;
let potencia2 = Math.pow(numeroDois, numeroUm);


console.log(soma); // 7
console.log(subtracao); // 7
console.log(multiplicacao); // 10
console.log(divisao); // 2.5
console.log(restoDivisao); // 1
console.log(potencia); // 25
console.log(potencia2); // 32

// converter tipos number para tipos strings
let idade = 19;
console.log(typeof(idade)); //  number
console.log(typeof(toString(idade))); // string

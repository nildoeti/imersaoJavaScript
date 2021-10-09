/*
    OPERADORES DE COMPARAÇÃO
    > maior que
    >= maior que ou igual
    < menor que
    <= menor que ou igual
    == igualdade de valor
    === igualdade estrita de valor e tipo
    != diferente de valor
    !== diferente estrito de valor e tipo
*/

// Primeiro exemplo com uso de números inteiros
console.log(10 > 5); // true
console.log(10 >= 5); // true
console.log(10 < 5); // false
console.log(10 <= 5); // false
console.log(10 == 5); // false
console.log(10 === 5); // false
console.log(10 != 5); // true
console.log(10 !== 5); // true

// Segundo exemplo com uso de varáveis do tipo numéricas
let maior = 10;
let menor = 5;

console.log(maior > menor); // true
console.log(maior >= menor); // true
console.log(maior < menor); // false
console.log(maior <= menor); // false
console.log(maior == menor); // false
console.log(maior === menor); // false
console.log(maior != menor); // true
console.log(maior !== menor); // true

/*
    Terceiro exemplo de variáveis do tipo strings.

    IMPORTANTE
    Em casos do uso de operadors de comparação, o JavaScript usa a posição
    de cada caracteres para fazer a comparação.

    Para efeito de comparação, podemo usar as vogais como exemplo.
    'a' é menor que 'e', que é menor que 'i', que é menor que 'o', que é menor
    que 'u'.

    Nos casos das consoantes também é valido a mesma ordem conforme exemplo.
    'b' é menor que 'c', que é menor que 'd', que é menor que 'f'....

    E assim também é valido a mesma declaração para valores do tipo numerál.
    1 é menor que 2, que é menor que 3, que é menor que 4 .....

    Sendo assim, a posição e não o comprimento de uma cadeira de caracteres,
    que influência na forma como os operadores de comparação retorna um valor
    verdadeiro ou falso.
*/

let vogalA = 'a'; // comprimento da string = 5
let vogalE = 'e'; // comprimento da string = 9

console.log(vogalA > vogalE); // falso
console.log(vogalA >= vogalE); // falso
console.log(vogalA < vogalE); // true
console.log(vogalA <= vogalE); // true
console.log(vogalA == vogalE); // false
console.log(vogalA === vogalE); // false
console.log(vogalA != vogalE); // true
console.log(vogalA !== vogalE); // true

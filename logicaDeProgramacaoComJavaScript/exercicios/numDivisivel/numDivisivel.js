/*
    Escreva uma função que receba um número e retorne o seguinte:

    Número divisível por 3? Retorna Fizz.
    Número divisível por 5? Retorna Buzz.
    Número divisível por 3 e 5? FizzBuzz.
    Número não é divisível por 3 e 5? Retornar o próprio número.

    Checar se o número é realmente um número.
    Use a função com números de 0 - 100.
*/

function fizzBuzz(numero) {
    if (typeof(numero) !== 'number') return 'Não é um número.'
    if (numero %3 === 0 && numero %5 === 0) return 'FizzBuzz';
    if (numero %3 === 0) return 'Fizz';
    if (numero %5 === 0) return 'Buzz';
    return numero;
}

console.log('a', fizzBuzz('a'));
for (let i = 0; i <= 100;i++) {
    console.log(i, fizzBuzz(i));
}

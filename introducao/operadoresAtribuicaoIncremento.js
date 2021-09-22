/**
    Operadores aritiméticos em JavaScript
    + Adição e concatenação
    - Subtração
    * Multiplicação
    ** Potênciação
    / Divisão
    % resto da divisão

    PRECEDÊNCIA
    () - parêmteses
    ** - potênciação
    * - multiplicação
    / - divisão
    % - resto da divisão
    + adição
    + subtração


*/
const x = 10;
const y = 2;

// Adição e concatenação
console.log('Adição: 10 + 2 = ', x + y);

// Subtração
console.log('Subtração: 10 - 2 = ', x - y);

// Multiplicação
console.log('Multiplicação: 10 x 2 = ', x * y);

// Potênciação
console.log('Potênciação: 10² = ', 10 ** 2);

// Divisão
console.log('Divisão: 10 / 2 = ', x / y);

// Resto
console.log('Resto: 10 / 2 = ', x % y);

// Alterando precendência entre operadores matemáticos com ()
console.log('(10 + 2) x 2 = ', (x + y) * y);
console.log('(10 x 2) + 2 = ', (x * y) + y);

// INCREMENTO
let velocidade1 = 0; // variável inicializada com valor 1
// incrementa velocidade1 em 1 e retorna o antigo valor
velocidade1++;
console.log(velocidade1); // 0

let velocidade2 = 0; // variável inicializada com valor 1
// incrementa velocidade em 2 m 1, e retorna o novo valor
++velocidade2;
console.log(velocidade2); // 1


// DECREMENTO
let contador1 = 0;
// decrementa velocidade em 1 e retorna o antigo valor
contador1--;
console.log(contador1)

// decrementa velocidade em 1 e retorna o novo valor
let contador2 = 0;
--contador2;
console.log(contador2)

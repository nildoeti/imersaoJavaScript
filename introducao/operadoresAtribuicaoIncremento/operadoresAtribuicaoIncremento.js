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
let velocidade = 0; // variável inicializada com valor 1

velocidade++; // incrementa velocidade1 em 1 e retorna o antigo valor
console.log('velocidade++: ', velocidade); // 0

++velocidade; // incrementa velocidade em 2 m 1, e retorna o novo valor
console.log('++velocidade: ', velocidade); // 2

// DECREMENTO

velocidade--; // pós decrementa velocidade em 1 e retorna o antigo valor
console.log('velocidade--: ', velocidade); // 1

--velocidade; // pré decrementa velocidade em 1, e retorna o novo valor
console.log('--decremento: ', velocidade); // 0


// INCREMENTO com mais de um valor
// const passo = 2; // para cada dois passos
// let distancia = 0
//
// distancia = distancia + passo;
// console.log('\nPara cada dois passos que ando, minha distância é: ', distancia);
// distancia = distancia + passo;
// console.log('Para cada dois passos que ando, minha distância é: ', distancia);
// distancia = distancia + passo;
// console.log('Para cada dois passos que ando, minha distância é: ', distancia);

// Outra forma de fazer o mesmo exemplo acima
// let contador = 0;
// contador+= 2;
// contador+= 2;
// contador+= 2;
// console.log('\n', contador);

// Outra forma de fazer o mesmo exemplo acima só que o operador de multiplicação
// let contador = 1;
// contador *= 2;
// contador *= 2;
// contador *= 2;
// contador *= 2;
// console.log('\n', contador);

// O mesmo do exemplo acima só que com o operador de potênciação
let contador = 2;
contador**= 3;
console.log('\n2³ = ', contador);

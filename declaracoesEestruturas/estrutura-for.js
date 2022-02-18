/*
    LAÇO FOR
    A declaração for, cria um loop, em que testa uma condição e executa um
    determinado enquanto a condição satisfazer uma determinada condição
    pré estabelecido pelo programador.
*/

// exemplo prático 1
// let msg = '';
// for (let i = 0; i < 10; i++) {
//     msg += i + ', ';
// }
// console.log(msg);
// console.log(typeof(msg));


// Desafio
// Criar uma solução para que a vírgula ao final do ultímo digito, não apareça

// exemplo 1 do desafio
// let msg = '';
//
// for (let i = 0; i < 10; i++) {
//     if (i == 9) {
//         msg += i;
//     };
//     msg += i + ', ';
// };

// resultado não esperado
// console.log(msg); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 99,

// Desafio
// Continuação para o desafio acima
let msg = '';

for (let i = 0; i < 10; i++) {
    if (i == 9) {
        msg += i;
        break;
    };
    msg += i + ', ';
}

console.log(msg); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

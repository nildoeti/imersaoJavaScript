/*
    break
    Sumário

    O comando break encerra o loop atual, switch, ou o loop que foi informado
    no label e transfere o controle da execução do programa para o comando
    seguinte.
    Síntaxe

    break [label];

    fonte: MDN : URL(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/break)
*/

const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// exemplo 3
for (let i in arrayNumeros) {
    let numero = arrayNumeros[i];

    if (numero === 3) {
        console.log('Parou...');
        break;

    }
    console.log(numero);
}

// exemplo 2
// for (var i = 0; i < arrayNumeros.length; i++) {
//     let numero =  arrayNumeros[i];
//
//     if (numero === 3) {
//         console.log('3 achado.\nParando de contar...');
//         break;
//     }
//
//     console.log(numero);
// }


// exemplo 1

// for (numero of arrayNumeros) {
//     if (numero === 7) {
//         break;
//     }
//
//     console.log(numero);
// }



/*
    #continue

    A palavra chave continue termina a atual iteração do laço em que ele se
    encontra ou de um laço rotulado, e continua a execução deste laço com a
    próxima iteração.

    Syntax
    continue [rótulo];

    fonte: MDN : URL(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/continue)
*/


// exemplo 4
// for (numero of arrayNumeros) {
//     if (numero === 2) {
//         console.log('Pulei o numero 2');
//         continue;
//     }
//
//     if (numero === 4) {
//         console.log('pulei o número 4');
//         continue;
//     }
//
//     console.log(numero);
// }

// exemplo 3
// for (numero of arrayNumeros) {
//     if (numero === 2) {
//         console.log('Pulei o número 2');
//         continue;
//     }
//     console.log(numero);
// }


// exemplo 2
// for (numero of arrayNumeros) {
//     if (numero === 2 || numero === 4) {
//         continue;
//     }
//
//     console.log(numero);
// }

// exemplo 1
// for (let numero of arrayNumeros) {
//     if (numero === 2) {
//         continue;  // se 2 estiver em arrayNumeros, pula este número e continue
//     }
//
//     console.log(numero);
// }

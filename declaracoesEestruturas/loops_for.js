// exemplo de uma estrutura for
// let msg = '';

// for (let i = 0; i < 10; i += 1) {
//     msg += i + ', ';
// }

// console.log(msg); 9,



// estrutura for aprimorada
// let msg = '';

// for (let i = 0; i < 10; i++) {
//    if (i == 9) {
//        msg += i;
//    };
//    msg += i + ', ';
// }

// console.log(msg); // 99


// gerado novo aprimoramento para a estrutura for 
// let msg = '';

// for (let i = 0; i < 10; i++) {
//     if (i == 9) {
//         msg += i;
//         break;
//     };

//     msg += i + ', ';
// }

// console.log(msg);


// extrair os números pares menores que 20 com o exemplo do laço for
let msg = '';

for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) { // verifica quais números tem resto zero
        if (i == 20) { // verifica 
            msg += i;
            break;
        };
        msg += i + ', ';
    };
};

console.log(msg);

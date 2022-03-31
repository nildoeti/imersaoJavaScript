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
let msg = '';

for (let i = 0; i < 10; i++) {
    if (i == 9) {
        msg += i;
        break;
    };

    msg += i + ', ';
}

console.log(msg);
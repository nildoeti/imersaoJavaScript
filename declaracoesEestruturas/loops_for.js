// exemplo de uma estrutura for
// let msg = '';

// for (let i = 0; i < 10; i += 1) {
//     msg += i + ', ';
// }

// console.log(msg);



// estrutura for aprimorada
let msg = '';

for (let i = 0; i < 10; i++) {
   if (i === 9) {
       msg += i;
   };
   msg += i + ', ';
}

console.log(msg);
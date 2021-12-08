const coresdaBandeiraDoBrasil = [
    'verde',
    'amarelo',
    'azul',
    'branco'
]

// uso de for of com function 4
coresdaBandeiraDoBrasil.forEach((item, i, array) => {
    console.log(`${item}, índice: ${i},
        Cores: ${array}`);
});

// uso de for of com function 3
// coresdaBandeiraDoBrasil.forEach(function(item, i, array) {
//     console.log(item, i, array);
// });



// uso de for of com function 2
// coresdaBandeiraDoBrasil.forEach(function(valor, indice) {
//     console.log(`${valor} índice: ${indice}`);
// });


// uso de for of com function 1
// coresdaBandeiraDoBrasil.forEach(function(el) {
//     console.log(el);
// });


// exibindo os valores da array
// for (let valores of coresdaBandeiraDoBrasil) {
//     console.log(valores);
// }

// exibindo o tamanho de cada valor dentro da array
// for (let total of coresdaBandeiraDoBrasil) {
//     console.log(`${total} => ${total.length} caracteres.`);
// }

// const cor = 'verde água';
//
// // exemplo 3 com for of
// for (let letras of cor) {
//     console.log(letras);
// }

// exemplo 2
// for (let letras in cor) {
//     console.log(cor[letras]);
// }


// exemplo 1
// for (let letras = 0; letras < cor.length; letras++) {
//     console.log(cor[letras]);
// }

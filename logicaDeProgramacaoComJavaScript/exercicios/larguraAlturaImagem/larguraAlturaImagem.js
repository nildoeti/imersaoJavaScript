/*
    Escreva uma função chamada ePaisagem que receba dois argumentos,
    largura e altura de uma imagem (number).
    Retorne true se a imagem estiver no modo paisagem.
*/

// exemplo 3
const ePaisagem = (largura, altura) => largura > altura;
console.log(ePaisagem(100, 200));

// exemplo 2
// function ePaisagem(largura, altura) {
//     return largura > altura;
// }
//
// console.log(ePaisagem(600, 200));

// exemplo 1
// function ePaisagem(largura, altura) {
//     return largura > altura? true:false;
// }
//
// console.log(ePaisagem(800, 400));

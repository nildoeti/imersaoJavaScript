/*
    funções recursivas, são funções que chamam a si próprio
    Uma função recursiva é uma função que chama a si mesma até encontrar uma
    instrução de parar. Essa técnica é chamada de recursão.


    Fonte: URL(https://ricardo-reis.medium.com/fun%C3%A7%C3%B5es-recursivas-no-javascript-13a1fc099c9f)
    fONTE URL(https://www.javascripttutorial.net/javascript-recursive-function/)
*/
// exemplo 1
// function recurse() {
//     // ..
//     recurse(); // invocando a si próprio no seu rdvopo
//     // ..
// }

// exemplo 2
// function recurse() {
//     if (condition) {
//
//     } else {
//         recurse();
//     }
// }

function countDown(fromNumber) {
    console.log(fromNumber);

    let nextNumber = fromNumber -1;
    if (nextNumber > 0) {
        // chamando a função
        countDown(nextNumber);
    }

}

countDown(3);

function recursiva(max) {
    console.log(max);

    if(max > 0) return;
    max++;
    recursiva(3)
}

recursiva(3);

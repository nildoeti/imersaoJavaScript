/*
    funções recursivas, são funções que chamam a si próprio

    Fonte: URL(https://ricardo-reis.medium.com/fun%C3%A7%C3%B5es-recursivas-no-javascript-13a1fc099c9f)
    fONTE URL(https://www.javascripttutorial.net/javascript-recursive-function/)
*/


function recursiva(max) {
    console.log(max);
    if (max > 10) return;
    max++;
    recursiva(max);
}

recursiva(9);

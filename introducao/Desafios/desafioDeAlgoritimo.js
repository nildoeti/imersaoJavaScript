/*
    RESOLVER o seguinte problema.
    let varA = 'A';
    let varB = 'B';
    let varC = 'C';

    Em que:
    varA receberá o valor de varB
    varB receberá o valor de varC
    varC receberá o valor de varA
*/

// antes
let varA = 'A';
let varB = 'B';
let varC = 'C';

console.log(`Antes: ${varA} ${varB} ${varC}`);

// depois: exemplo 1
// const   temp = varA;
// varA = varB;
// varB = varC;
// varC = temp;
//
// console.log('Depois: ', varA, varB, varC);

// depois: exemplo 2
[varA, varB, varC] = [varB, varC, varA];
console.log('Depois:', varA, varB, varC);

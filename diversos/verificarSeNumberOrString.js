// verifica se uma determinada variável recebe number ou string
function myFunc(a, b){
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
}

const f1 = myFunc('2', 4);

console.log(f1);

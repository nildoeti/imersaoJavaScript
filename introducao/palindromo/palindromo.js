// solução 1

function verificaPolindromo(string) {
    if(!string) return;
    console.log(string === string.split('').reverse().join());
}

verificaPolindromo('maria'); // se existir string aqui, retornar false

// solução 2
function verificaPolindromo2(string) {
    if (!string) return;
    if (!string.length) return;

    for (var i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            console.log(false);
        }
    }
    return console.log(true);
}

verificaPolindromo2('teste');

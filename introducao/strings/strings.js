/**
    Strings
    são úteis para guardar dados que podem ser representados em forma de texto.

    MÉTODOS importantes
    .concatenação
    .propriedade length
    .interabilidade
    .formatação
    .index de letras
*/

const corFavorita = 'azul';
const nuvem = 'branco';

console.log(`A cor do céu é ${corFavorita}`);

// verificando o tamanho de uma string
console.log(`O tamanho da palavra ${corFavorita} é de
    ${corFavorita.length} caracteres`);

// concatenação de variáveis do tipo string
console.log('A cor do céu é' + ' ' + corFavorita + ' ' + nuvem);

// separando cada letra da strinf xom um virgula
console.log(`${corFavorita.split('')}`);

// buscando uma cadeia de caracteres dentro de uma variável do tipo string
console.log(`Na variável corFavorita tem a "azul"?
    ${corFavorita.includes('azul')}`);

// verifica se tem uma detrminada ocorrencia dentro do valor de uma variável
console.log(`Na minha variáve. corFavorita tem a letra "C"? 
    ${corFavorita.startsWith('c')}`); // false

    console.log();
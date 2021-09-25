/*
    O método replace() retorna uma nova string com algumas ou todas as
    correspondências de um padrão substituídas por um determinado caractere
    (ou caracteres). O padrão pode ser uma string ou uma RegExp, e a
    substituição pode ser uma string ou uma função a ser chamada para cada
    correspondência. Se o padrão for uma string, apenas a primeira ocorrência
    será substituída.

    Fonte: URL(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
*/

const metodoReplace = 'O método replace(), retorna uma nova variável...';
const copiaMetodoReplace = metodoReplace.replace('variável', 'string');

console.log('Antes: ', metodoReplace);
console.log(copiaMetodoReplace);

// uso de expressão regular com o método replace
const expressao = 'O padrão pode ser uma variável';
let = novaExpressao = expressao.replace(/variável/i, 'string');

console.log('\nAntes: ', expressao);
console.log('Depois: ', novaExpressao);

// uso de expressão globa com as flagues global 'g' e 'i'
const segunda = /segunda/gi;
let ocorrencia = '...apenas a segunda ocorrência...';
let novaOcorrencia = ocorrencia.replace(segunda, 'primera');

console.log('\nAntes: ', ocorrencia);
console.log('Depois: ', novaOcorrencia);

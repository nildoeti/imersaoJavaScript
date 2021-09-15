// tipo string
// number
// boolean
// null
// undefined
// symbol
// object
// function
// array


// tipo string

// retorna o tamanho de uma string
const textSize = 'Texto'.length;
console.log('Tamanho do texto: ${textSize}');

// retorno um array quebrando uma string por um delimitador
const splittedText = 'Texto'.split('x');
console.log('\nArray com as posições separadas pelo delimitador: ', splittedText);

// busca por um valor e substitui por outro
const replaceText= 'Texto'.replace('Text', 'txet');
console.log('\nSubstituição de valores: ', replaceText);

// retorna a fatia de um valor
const lastChar = 'Texto'.slice(-1);
console.log('\nUltima letra de uma string ', lastChar);

const myNumber = 12.900
const myString = '2000'

// transforma números para strings
console.log('Antes: ', myNumber, ' é do tipo: ', typeof(myNumber));
const numeroParaString = myNumber.toString();
console.log('Depois: ', numeroParaString, ' é do tipo: ', typeof(numeroParaString));

// Retorna números com determinado números de casas decimais
console.log('\n---\n');
const fixaDuasCasasDecimais = myNumber.toFixed(2)
console.log('Valor normal: ', myNumber);
console.log('Valor fixo com duas casas decimais: ', fixaDuasCasasDecimais)

// transforma uma strinf em float
console.log('Antes: ', myString, ' é do tipo: ', typeof(myString))
console.log('Depois: ', myString, ' é do tipo: ', typeof(parseFloat(myString)));

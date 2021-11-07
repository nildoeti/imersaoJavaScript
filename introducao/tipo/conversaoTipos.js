// primeira opção de conversão de tipos
const numeroInteiroTipoString = parseInt('5'); // converte string para inteiro
const numeroFloatTipoString = parseFloat('5.1'); //converte strinf para float

console.log(typeof(numeroInteiroTipoString)); // Number
console.log(typeof(numeroFloatTipoString)); // Number

// segunda forma de conversão de tipos
const numero = Number('5');
console.log(typeof(numero));

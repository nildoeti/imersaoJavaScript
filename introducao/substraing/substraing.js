/*
O método substring() retorna a parte da string entre os índices inicial e final,
ou até o final da string.

Fonte: URL(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/substring)
*/


let umaString = 'Mozilla';

// Verificando o tamanho da string
console.log(umaString.length);

// Mostra "Moz"
console.log(umaString.substring(0, 3));
console.log(umaString.substring(3, 0));


// Mostra 'lla'
console.log(umaString.substring(4, 7));
console.log(umaString.substring(7, 4));

// Mostra 'Mozill'
console.log(umaString.substring(0, 6));
console.log(umaString.substring(6, 0));

// Mostra Mozilla
console.log(umaString.substring(0, 7));
console.log(umaString.substring(7, 0));
console.log(umaString.substring(0, 10));

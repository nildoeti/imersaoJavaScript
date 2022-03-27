var fs = require('fs');
console.log('Primeiro comando');
fs.readFile('./Files/arquivo.txt', callback);
function callback(err, conteudo) {
	if(err) return console.error(err);
	console.log(String(conteudo));
}

console.log('Segundo comando');
console.log('Terceiro comando');

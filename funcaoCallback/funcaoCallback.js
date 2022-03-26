/*
	Função Callback

	Uma função callback é uma função passada a outra função como argumento, que
	é então invocado dentro da função externa para completar algum tipo de
	rotina ou ação.

	Fonte MDN url(https://developer.mozilla.org/pt-BR/docs/Glossary/Callback_function)
	Fonte WIKIPEDIA url(https://pt.wikipedia.org/wiki/Callback)
	Fonte FREECODECAMP url(https://www.freecodecamp.org/news/javascript-callback-functions-what-are-callbacks-in-js-and-how-to-use-them/)
*/


// exemplo 1
function print(callback) {
	callback();	// A função print( ) recebe outra função como parâmetro e a chama dentro dela. 
				//  isso se chama retorno do chamado (callback)
}

function tarefaUm() {
	// body...
	console.log('Esta mensagem aparecerá depois de 1 milisegundos');
}

function tarefaDois() {
	console.log('Esta mensagem aparecerá depois de 2 milisegundos');
}

setTimeout(tarefaUm, 2000); 
setTimeout(tarefaDois, 1000)


// exemplo 2
function message() {
	console.log('Esta mensagem aparecerá depois de 5 milisegundos');
}

setTimeout(message); // Esta mensagem aparecerá depois de 3 milisegundos

// exemplo 3 com uso de função anônima
setTimeout(function() {
	console.log('Esta mensagem aparecerá depois de 3 milisegundos');
}, 3000);


// exemplo 4 com Arrow functions
setTimeout( () => {
	console.log('Esta mensagem aparecerá depois de 4 milisegundos');
}, 500);


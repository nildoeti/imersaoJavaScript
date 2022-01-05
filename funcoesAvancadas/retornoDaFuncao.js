/*
	return
	A declaração return finaliza a execução de uma função e especifica os 
	valores que devem ser retonados para onde a função foi chamada.
	Fonte: MDN url(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/return)
*/

// function minhaFuncao(a, b) {
// 	return a + b; // retorno da função aqui
// }
// // chamada da função aqui com dados sendo armazenados em uma variável
// let result = minhaFuncao(2, 4); 
// console.log(result);

// exemplo 2
//function soma2(a, b) {
	//// exemolo de função inutil
	//console.log(a + b); 
//}

//~ soma2(4, 7); 

// exemplo 3
//document.addEventListener('click', function(){
	//// exemplo de função que não rtorna ND, mas faz alguma coisa
	//document.bady.style.backgroundColor('red');
//});

// exemplo 4
function criaPessoa(nome, sobreNome) {
	// função que retorna um objeto
	return {nome, sobreNome};
}
const p1 = criaPessoa('Fulano', 'de Tal');
console.log(p1);

// exemplo 5
const criaPessoa2 = {
	nome: 'Fulano',
	sobreNome: 'de Tal'
}

console.log(criaPessoa2);
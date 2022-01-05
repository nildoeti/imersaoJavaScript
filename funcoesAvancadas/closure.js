/*
	Fonte da pesquisa: MDN url(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Closures)
	
	Closures
	Um closure (fechamento) é uma função que se "lembra" do ambiente — ou 
	escopo léxico — em que ela foi criada.
*/

function init() {
	// Escopo léxico
	var name = 'Mozilla';
	function displayName() {
		console.log(name);
		/*
			displayName() é uma função aninhada (um closure) — ela é definida 
			dentro da função init(), e está disponivel apenas dentro do corpo 
			daquela função. Diferente de init(), displayName() não tem variáveis 
			locais próprias, e ao invés disso reusa a variável name declarada 
			na função pai.
		*/
	}
	displayName();
}
console.log(init());



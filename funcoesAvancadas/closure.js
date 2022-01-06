/*
	Fonte da pesquisa: MDN url(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Closures)
	
	Closures
	Um closure (fechamento) é uma função que se "lembra" do ambiente — ou 
	escopo léxico — em que ela foi criada.
*/

// exemplo para escopo léxico
// function init() {
// 	// Escopo léxico
// 	var name = 'Mozilla';
// 	function displayName() {
// 		console.log(name);
		
// 			displayName() é uma função aninhada (um closure) — ela é definida 
// 			dentro da função init(), e está disponivel apenas dentro do corpo 
// 			daquela função. Diferente de init(), displayName() não tem variáveis 
// 			locais próprias, e ao invés disso reusa a variável name declarada 
// 			na função pai.
		
// 	}
// 	displayName();
// }
// console.log(init());


// exemplo para Closure
// function makeFun() {
// 	var name = 'Mozilla';
// 	function displayName() {
// 		console.log(name);
// 	}
// 	return displayName;
// }
	
// 		variável myFun tourna-se uma função e por consequẽncia de sua natureza,
// 		também se torna uma closure.
// 		Uma closure (fechamento) trata-se de um tipo especial de objeto que combina 
// 		duas coisas: a função e o ambiente onde a função foi criada.
// 		myFunc é a closure que incorpora tanto a função displayName quanto a 
// 		palavra Mozilla que existia quando a closure foi criada.
	
// var myFun = makeFun(); 
// console.log(myFun);


// exemplo função makeAdder
// function makeAdder(x) {
// 	return (y) => {
// 		return x + y
// 	};
// }

// var addr5 = makeAdder(5);
// var addr10 = makeAdder(10);

// console.log(addr5(2));
// console.log(addr10(2));

// exemplo com arrow function
const makeAdder = (x) => {
	return (y) => {
		return x + y
		/*
			Neste exemplo definimos a função makeAdder(x) que toma um único 
			argumento x e retorna uma nova função. A função retornada toma 
			então um único argumento, y, e retorna então a soma de x e de y.
		*/
	};
}

/*
	Ambas as funções add5 e add10 são closures. Compartilham o mesmo corpo de 
	definição de função mas armazenam diferentes ambientes. No ambiente da add5, 
	por exemplo, x equivale a 5, enquanto na add10 o valor de x é 10.
*/
const addr5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(addr5(2));
console.log(add10(2));

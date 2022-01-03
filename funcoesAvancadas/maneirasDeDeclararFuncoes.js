// declaração de função (function hoisting)
function falaOi() {
	console.log('Oi');
}
falaOi();

// first class objects (objetos de primeira classe)
// function expression
const nome = function () { // uma constante que recebe uma function
	console.log('Maria');
}
// chamando a constante coomo uma function
nome(); // Maria


// a parti da constante nome, podemos usar em outra função e chama-la
function executaFunction (funcao) {
	console.log('\nVou executar sua função abaixo.');
	funcao();
}
executaFunction(nome); // Maria

// Arrow function
const arrowFunction = () => {
	console.log('I am an Arrow function');
}

arrowFunction()

// objetos dentro de uma function
const myObject = {
	falar: function () {
		console.log('Estou falando...');
	}
}
myObject.falar();

// objetos dentro de uma function 2
const myObject2 = {
	fala() {
		console.log('Falando alguma coisa.');
	}
}
myObject2.fala();

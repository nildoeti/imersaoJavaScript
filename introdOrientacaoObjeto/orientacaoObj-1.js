// function Pessoa(nome) {
// 	this.nome = nome;
// }

// const p1 = new Pessoa('Fulano');

// console.log(p1);


// function Pessoa(nome) {
// 	// body...
// 	this,nome = nome;

// 	return {
// 		nome: 'Teste' 
// 	}; 
// }

// const p2 = new Pessoa('Beltrano');

// console.log(p2);

// function Animal(quantidadePatas) {
// 	this.quantidadePatas = quantidadePatas;
// }

// function Cachorro(morde) {
// 	Animal.call(this, 4);

// 	this.morde = morde;
// 	this.latir = function() {
// 		console.log('Au! Au!');
// 	}
// }


// const pug = new Cachorro('false');
// // console.log(pug);

// const pitbull = new Cachorro(true);
// console.log(pitbull);


function Animal() {}

Animal.prototype.quantidadePatas = 0;
Animal.prototype.movimentar = function() {}

function Cachorro(morde) {
	this.quantidadePatas = 4;
	this.morde = morde;
}

Cachorro.prototype = Object.create(Animal);
Cachorro.prototypeçlatir = function() {
	console.log('Au! au!');
}

const pulg = new Cachorro(false);
const pitibull = new Cachorro(true);

console.log(pulg);
console.log(pitibull);

/*
	Definindo classes

	As Classes são, de fato, "funções especiais", e, assim como você pode
	definir "function expressions" e "function declarations", a sintaxe de uma
	classe possui dois componentes: "class expressions" e  "class declarations".

	Fonte MDN: url(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes)
*/

// Declarando classes
// class Retangulo {
// 	constructor(altura, largura) {
// 		this.altura = altura;
// 		this.largura = largura;
// 	}
// }

/*
	Expressões de Classes
	Uma Expressão de Classe (class expression) é outra forma para definir
	classes. Expressões de Classes podem possuir nomes ou não (anônimas). O
	nome dado para uma expressão de classe é local ao corpo da classe.
*/
// sem nome
// let Retangulo = class {
// 	constructor(altura, largura) {
// 		this.altura = altura;
// 		this.largura = largura;
// 	}
// };

// // com nome
// let Retangulo2 = class Retangulo2 {
// 	constructor(altura, largura) {
// 		this.altura = altura;
// 		this.largura = largura;
// 	}
// };

// Métodos Protótipos
class Retangulo {
	constructor(altura, largura) {
		this.altura = altura; this.largura = largura;
	}
	// getter
	get area() {
		return this.calculaArea()
	}
	calculaArea() {
		return this.altura * this.largura;
	}
}

const quadrado = new Retangulo(10, 10);
console.log(quadrado.area);

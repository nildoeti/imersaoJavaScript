/*
	constructor
	O construtor é um método especial para criar e inicializar um objeto criado
	a partir de uma classe.
	Sintaxe

	constructor([argumentos]) { ... }

	Descrição

	Apenas um método especial com o nome constructor pode existir em uma classe.
	O erro SyntaxError será mostrado se a classe contiver mais de um método
	constructor.

	Um construtor pode usar a palavra reservada super para se referir ao
	construtor
	da classe pai (superior).

	Um construtor padrão será usado se você não especificá-lo.

	Fonte MDN url(
	https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes/constructor)

*/

// Usando o método constructor
class Quadrado extends Poligono {
	super(comprimento, comprimento)
	// super chama o construtor da classe pai que vai atribuir comprimento para
    // os atributos comprimento e altura herdados pela nossa classe filha Quadrado

    this.nome = 'Quadrado';
    // Nas classes filhas, super() deve ser chamado antes de usar o this. Sem ele
    // vai ocorrer um erro de referência. O this agora se refere a classe filha Quadrado
}

// os atributos a seguir são herdados da classe pai Poligono: altura, comprimento e area.
get area () {
	return this.altura * this.comprimento;
}

set area(valor) {
	this.area = valor;
}

/*
	Construtores padrão (constructors)

	Um construtor padrão será usado pela classe caso nenhum seja especificado.
	Para as classes de base o construtor padrão é:
*/

constructor () {} // constructor criado por padro

// Para as classes filhas o construtor padrão é:
constructor (...args) {
	super(...args);
}
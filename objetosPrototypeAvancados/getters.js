/*
	Getter -> obeter valor
	Setter -> para setar (configurar) o valor
	simula que um método de uma função é uma propriedade
	proteger uma propriedade de receber algo que não queremos, como string no lugar de números

	
*/

function Produto (nome, preco, estoque) {
	this.nome = nome;
	this.preco = preco;
	
	Object.defineProperty(this, 'estoque', {
		enumerable: true, // mostra a chave
		configurable: true, // configurável
		get: function (valor) {
			return estoque = valor;
		}
	});
}

const p1 = new Produto('Camiseta', 70, 4);

console.log(p1); // Produto { nome: 'Camiseta', preco: 70, estoque: [Getter] }
console.log(p1.estoque);

p1.estoque = 'qqq'

console.log(p1.estoque);
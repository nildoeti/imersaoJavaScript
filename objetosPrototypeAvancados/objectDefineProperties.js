// Object.defineProperties -> trabalhando com varias chaves

function Produto(nome, preco, estoque) {
	// body...
	this.nome = nome;
	this.preco = preco;

	Object.defineProperties(this, {
		
		nome: {
			enumerable: true,
			value: nome,
			writable: true,
			configurable: true
		},

		preco: {
			enumerable: true,
			value: preco,
			writable: true,
			configurable: true
		},

		estoque: {
			enumerable: true,
			value: estoque,
			writable: true,
			configurable: true
		}
	});
}

const p1 = new Produto('Camiseta', 80, 12);

console.log(p1); // Produto { nome: 'Camiseta', preco: 80, estoque: 12 }
console.log(Object.keys(p1)); // [ 'nome', 'preco, estoque' ]

// acesso as chaves com laço for
for (let chave in p1) {
	console.log(chave); // nome, preco, estoque
}

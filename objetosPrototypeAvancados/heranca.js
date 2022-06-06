/*
	Abstração de um produto
	Produto -> preco, desconto
	Camiseta -> cor, caneca - > material
*/
function Produto (nome, preco) {
	// body... 
	this.nome = nome;
	this.preco = preco;
} 


// metodos para a função construtora Produto
Produto.prototype.aumento = function (quantia) { // método aumento adicionbado na função contrutora
	// body...
	this.preco += quantia;
};

Produto.prototype.desconto = function (quantia) {
	// body...
	this.preco -= quantia;
};


// função construtora para Camiseta
function Camiseta (nome, preco, cor) {
	// lincar as propriedade da função produto na função Camiseta...
	Produto.call(this, nome, preco);
	this.cor = cor;
}

// criando um objeto vazio e adicioando o objeto Produto
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

// sobreescrevendo o aumento
Camiseta.prototype.aumento = function (percentual) {
	// body...
	this.preco = this.preco + (this.preco * (percentual / 100));
};

// mais um produto
function Caneca(nome, preco, material) {
	// body...
	Produto.call(this, nome, preco, estoque)
	this.material = material;

	Object.defineProperty(this, estoque,  {
		enumerable: true,
		configurable: false,
		get: function () {
			// body...
			return estoque;
		},
		set: function (valor) {
			// body...
			if ( typeof valor !== 'number') return;
			estoque = valor;
		}
	});
}

Caneca.prototype = Object.create(Produto.prototype );
Caneca.prototype.constructor = Caneca;


const produto = new Produto('Gen', 111)
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const caneca = new Caneca('Chá', 12.7, 'Porcelanato', 5)
// aumentar o preco em 10
camiseta.aumento(10); 
console.log(caneca);
console.log(camiseta);
console.log(produto);


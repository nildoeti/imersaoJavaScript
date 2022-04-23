function Produto (nome, preco) {
    this.nome = nome;
    this.preco = preco;
}


Produto.prototype.aumento = function (quantia) { // método
    this.preco += quantia;
}

function Camiseta (nome, preco, cor) {
    Produto.call (this, nome, preco);
    this.cor = cor;
}

// Camiseta.prototype é um novo obj vázio, que tem como protótipo Produto.prototype
Camiseta.prototype = Object.create(Produto.prototype); 
//  Adicionando Camiseta.prototype na cadeia de protótipos de Produto
Camiseta.prototype.constructor = Camiseta(); 

// Tudo o que não existir em Camiseta nem em Camiseta.prototype será delegado 
// para Produto.prototype (e assim por diante até chegar no topo da cadeia de protótipos)

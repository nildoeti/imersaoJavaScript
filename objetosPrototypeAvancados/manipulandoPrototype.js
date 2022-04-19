// // Manipulando prototype
const objA = {
    chaveA: 'A'
}

const objB = {
    chaveB: 'B'
}

// criando novo objeto
const objC = new Object();
objC.chaveC = 'C';



Object.setPrototypeOf(objB, objA); // objB herda o proto de objA
Object.setPrototypeOf(objC, objB) // objC herda o proto de objB

/*
    Saida para os exemplos acima, pelo console do navegador

    objC
    Object { chaveC: "C" }
    ​
    chaveC: "C"
    ​
    <prototype>: Object { chaveB: "B" }
    ​​
    chaveB: "B"
    ​​
    <prototype>: Object { chaveA: "A" }
    ​​​
    chaveA: "A"
    ​​​
    <prototype>: Object { … }
*/



// exemplo para protorype com uso de funções
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco
}

// método para desconto 
// adicionar métodos sempre fora da função construtora
Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

// método para aumento 
// adicionar métodos sempre fora da função construtora
Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};


// criando o produto p1
const p1 = new Produto('Camiseta', 50);
// p1.desconto(100); // adicioando o desconto
p1.aumento(100);
console.log(p1); // Produto { nome: 'Camiseta', preco: 80 }



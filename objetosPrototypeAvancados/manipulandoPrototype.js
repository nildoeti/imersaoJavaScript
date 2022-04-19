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


// reaproveitando os métodos desconto/aumento do objeto produto
// novo produt p2
const p2 = {
    nome: 'caneca',
    preco: 15
};

// aproveitando os métodos aunmento;desconto para p2 com uso de setPrototypeOf
Object.setPrototypeOf(p2, Produto.prototype); //p2, rece os métodos da função construtora Produto

p2.aumento(10); // adiconado aumento de 10% ao produto
console.log(p2); // Produto { nome: 'caneca', preco: 16.5 }


/*
    Saida do cobnsole pelo navegador, para confirmação que o proto foi alterado

    Object { nome: "Camiseta", preco: 100 }
    ​
    nome: "Camiseta"
    ​
    preco: 100
    ​
    <prototype>: Object { desconto: desconto(percentual), aumento: aumento(percentual)
    , … }
    ​​
    aumento: function aumento(percentual)​​
    constructor: function Produto(nome, preco)​​
    desconto: function desconto(percentual)​​
    <prototype>: Object { … }

    Object { nome: "caneca", preco: 16.5 }
    ​
    nome: "caneca"
    ​
    preco: 16.5
    ​
    <prototype>: Object { desconto: desconto(percentual), aumento: aumento(percentual)
    , … }
    ​​
    aumento: function aumento(percentual)​​
    constructor: function Produto(nome, preco)​​
    desconto: function desconto(percentual)​​
    <prototype>: Object { … }
*/

// usando os métodos da função construtora Produto para p3
const p3 = Object.create(Produto.prototype);
p3.preco = 113;
p3.aumento(10);
console.log(p3); // Produto { preco: 124.3 }


const p4 = Object.create(Produto.prototype, { // adicionado o prototype para objeto p4
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99
    },

    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 10
    }
});

p4.aumento(10);
console.log(p4); // Produto { preco: 46.2, tamanho2: 10 }

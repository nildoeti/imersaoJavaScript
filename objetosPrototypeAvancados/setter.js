// setter -> protege uma propriedade

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // exibe a chave
        configurable: true, // configurável

        get: function(){
            return estoque;
        },

        set: function(valor) {
            console.log(valor);
        }
    });
}

const p1 = new Produto('Camiseta', 40, 3);

console.log(p1); // Produto { nome: 'Camiseta', preco: 40, estoque: [Getter] }
// console.log(p1.estoque); // 3

p1.estoque = 'Qualquer valor';
console.log(p1.estoque); // Qualquer valor, 3
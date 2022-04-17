// setter -> protege uma propriedade

// function Produto(nome, preco, estoque) {
//     this.nome = nome;
//     this.preco = preco;

//     Object.defineProperty(this, 'estoque', {
//         enumerable: true, // exibe a chave
//         configurable: true, // configurável

//         get: function(){
//             return estoquePrivado;
//         },

//         // exemplo 2
//         set: function(valor) {
//             if (typeof valor !== 'number') {
//                 throw new TypeError('Mensagem');
//             }
//             estoquePrivado = valor;
//         }

//         // exemplo 1
//         // set: function(valor) {
//         //     if (typeof valor != 'number') {
//         //         console.log('Bad value');
//         //         return;
//         //     }
//         //     estoquePrivado = valor;
//         // }
//     });
// }

// const p1 = new Produto('Camiseta', 40, 3);

// console.log(p1); // Produto { nome: 'Camiseta', preco: 40, estoque: [Getter] }
// // console.log(p1.estoque); // 3

// p1.estoque = 500;
// console.log(p1.estoque); // Qualquer valor, 3


// exemplo 3
// function criaProduto(nome) {
//     return {
//         get nome() {
//             return nome
//         },
//         set nome(valor) {
//             return valor;
//         }
//     };
// }

// const p2 = criaProduto('Camiseta');
// console.log(p2); // { nome: [Getter/Setter] }
// console.log(p2.nome); // Camiseta

// interceptar valores para a propriedade de um objeto
function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            valor = valor.replace('coisa', ''); // interceptação
            nome = valor;
        }
    };
}

const p2 = criaProduto('Camiseta');
console.log(p2.nome);

p2.nome = 'Qualquer coisa'
console.log(p2.nome);
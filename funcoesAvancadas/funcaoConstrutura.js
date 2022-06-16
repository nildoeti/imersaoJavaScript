// // produto 1
// let produto1 = {
//     nome: 'Blusa',
//     preco: 100,
//     calculaDesconto: function() {
//         return this.preco * 0.1;
//     }
// };

// // produto 2
// let produto2 = {
//     nome: 'Calça',
//     preco: 300,
//     calculaDesconto: function() {
//         return this.preco * 0.2;
//     }
// };

// o mesmo código acima do método calculaDesconto, para os dois produtos
// function criaProduto(paramNome, paramPreco) {
//     return {
//         nome: paramNome,
//         preco: paramPreco,
//         calculaDesconto: function() {

//             return this.preco * 0.1;
//         }
//     };
// }

// // criamos dois produtos com uso da mesma função
// var p1 = criaProduto('Camisa', 99);
// var p2 = criaProduto('Calça', 139);

// console.log(p1, p2);


// sintáxe defina no javascript para estruturas de objetos
// function Produto(paramNome, paramPreco) { // função construtora
//     this.nome = paramNome,
//     this.preco = paramPreco,
//     this.calculaDesconto = function() {
//         // calcula 10% de desconto
//         return this.preco * 0.1;
//     };
// }

// var p1 = new Produto('Camisa', 99);
// var p2 = new Produto('Calça', 290);

// console.log(p1.calculaDesconto());
// console.log(p2.calculaDesconto());


// outra maneira de criar um construtor (e a classe) com EcmaScript 2015
class Produto {
    constructor (paramNome, paramPreco) {
        this.nome = paramNome;
        this.preco = paramPreco;
    } calculaDesconto () {
        // calcula 10% de desconto
        return this.preco * 0.1;
    }
}

// temos uma class, e não mais uma function
// definimos os atributos dentro de constructor
// o método calculaDesconto fica a parte, sem o this

var p1 = new Produto('Camisa', 99,89);
console.log(p1.calculaDesconto());

var p2 = new Produto('Meia', 12,70);
console.log(p2.calculaDesconto());
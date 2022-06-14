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
//             return this.preco * 0.3;
//         }
//     };
// }


// let produto1 = criaProduto('Camisa', 120);
// let produto2 = criaProduto('Calca', 290);

// let p1 = produto1.calculaDesconto();
// let p2 = produto2.calculaDesconto();

// console.log(p1, p2);

// function Produto(paramNome, paramPreco) {
//     this.nome = paramNome;
//     this.preco = paramPreco;
//     this.calculaDesconto = function(){
//         return this.preco * 0.1;
//     };
// }

// var p1 = new Produto('Blusa', 70);
// var p2 = new Produto('Calça', 89);

// p1.calculaDesconto();
// p2.calculaDesconto();

// console.log(p1, p2);

class Produto {
    constructor(paramNome, paramPreco) {
        this.nome = paramNome;
        this.preco = paramPreco;
    } calculaDesconto() {
        return this.preco * 0.1;
    }
}

var p1 = new Produto('Camisa', 78);
var p2 = new Produto('Calça', 99);

p1.calculaDesconto();
p2.calculaDesconto();

console.log(p1, p2);

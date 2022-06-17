// objetos simples em JavaScript


// produto 1
// var produto1 = { // objeto produto1
//     nome: 'Blusa',
//     preco: 120,
//     calculaDesconto: function () { // método do objeto produto1
//         return this.preco * 0.1;
//     }
// };
//
// var produto2 = { // objeto produto2
//     nome: 'Calça',
//     preco: 189,
//     calculaDesconto: function () { // método do objeto produto2
//         return this.preco * 0.1;
//     }
// };
//
// var p1 = produto1.calculaDesconto();
// var p2 = produto2.calculaDesconto();
//
// console.log(p1);
// console.log(p2);

// ATRIBUTOS nome, preco e o MÉTODO calculaDesconto se repetem nos dois objetos
// adicionar estes ATRIBUTOS e MÉTODO em uma função facilita não repetir o mesmo código
// function criaProduto(paramNome, paramPreco) {
//     return {
//         nome: paramNome,
//         preco: paramPreco,
//         calculaDesconto: function () {
//             return this.preco * 0.1;
//         }
//     };
// }
//
// // criar produtos e chamar a função criaProduto
// var produto1 = criaProduto('Meia', 17.9);
// var produto2 = criaProduto('Colete de Lã', 489.8);
//
// console.log(produto1); // saida de todos os dados
// console.log(produto2); // saida de todos os dados
// console.log(produto1.calculaDesconto()); // 1.79
// console.log(produto2.calculaDesconto()); // 48.980000000000004
//

// estrutura de sintáxe comum em JavaScript para definir um objeto

// function criaProduto(paramNome, paramPreco) {
//     this.nome = paramNome;
//     this.preco = paramPreco;
//     this.calculaDesconto = function () {
//         // calcula desconto de 10%
//         return this.preco * 0.1;
//     };
// }
//
//
// var produto1 = new criaProduto('Camisa', 170);
// var produto2 = new criaProduto('Calça', 89.9);
// console.log(produto1); // saida completa dos dados
// console.log(produto2); // saida completa dos dados
// console.log(produto1.calculaDesconto()); // 17
// console.log(produto2.calculaDesconto()); // 8.99

/*
    A sintaxe anterior é a maneira correta de definir a estrutura para seus
    objetos e é chamada de construtor. Essa estrutura comum dos objetos muitas
    vezes é chamada de classe.

    Observer que no exemplo acima:
        não precisamos retornar nada
        as propriedades são definidas com this
        é usado = ao invés de : para atribuir
        as linhas são separadas por ;
        ao criar os produtos usamos o new
*/


// outra maneira de criar um construtor na versão do EcmaScript2015
class Produto {
    constructor(paramNome, paramPreco) {
        this.nome = paramNome;
        this.preco = paramPreco;
    } calculaDesconto() {
        // calcula 10% de desconto
        return this.preco * 0.1;
    }
}

var produto1 = new Produto('Calça', 89);
var produto2 = new Produto('Blusa', 180);

console.log(produto1.calculaDesconto()); // 8.9
console.log(produto2.calculaDesconto()); // 18

// REPARE: class no lugar de function e atributos dentro de constructor

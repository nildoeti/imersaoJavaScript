// factor function - funções de fabrica 
// function criaPessoa(nome, sobrenome) {
//     return {
//         nome,
//         sobrenome,

//         get nomeCompleto() { // método
//             return `${this.nome} ${this.sobrenome}`; // template de strings
//         }
//     };
// }
// const p1 = criaPessoa('Fulano', 'de Tal');
// console.log(p1.nomeCompleto);
 


//  constructor function
function Pessoa (nome, sobrenome) { // parâmetros da função construtura
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Fulano', 'de Tal');
const p2 = new Pessoa('Beltrano', 'de Tal');

console.log(p1);
// console.log(typeof(p1));
console.log(p2);
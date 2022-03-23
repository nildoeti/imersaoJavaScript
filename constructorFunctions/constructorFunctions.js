/*
    function contructor => object
    factory function =>  object

    Fonte: MDN url(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)
*/

// exemplo 1
function Pessoa(nome, sobrenome) {
    // Privados
    const ID = 123;
    const metodoInterno = function () {

    }

    // Públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    // método
    this.metodo = function () {
        console.log(this.nome + ': sou um método');
    };
}

// acessando os parâmetros da função construtora individualmente
// const p1 = new Pessoa('Ciclano', ' de Tal');
// console.log(p1.nome); // Ciclano
// console.log(p1.sobrenome); // de /Tal


const p2 = new Pessoa('Fulano', 'de Tal');
console.log(p2);

const p3 = new Pessoa('Beltrano', 'de Tal');
console.log(p3);

p2.metodo(); // Fulano: sou um método
p3.metodo(); // Beltrano: sou um método

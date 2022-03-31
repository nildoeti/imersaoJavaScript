// exemplo de objeto literal
// const pessoa = {
//     nome: 'Fulano',
//     sobrenome: 'de Tal',
//     idade: 10000
// }
// // acessando a chave modo 1
// console.log(pessoa.nome); // notação de ponto
// // acessando a chave modo 2
// console.log(pessoa['nome']); // notação de colchetes
// const chave = 'idade';
// console.log(pessoa[chave]); // notação de colchetes com variaveis


// exemplo 2 de objeto com uso do constructor
const pessoa1 = new Object();

pessoa1.nome = 'Fulano';
pessoa1.sobrenome = 'de Tal'
pessoa1.idade = 30;


// métodos dos objetos
pessoa1.falarNome = function() { // método falanome
    return (`${this.nome} esta falando.`); // template de estring
};

pessoa1.getDataNascimento = function() { // metodo getDataNascimento
    const dataAtual = new Date();
    return dataAtual.getFullYear - this.idade;
};


// exibindo todas os valores para pessoa1 com laço for
for (let valor in pessoa1) {
    console.log(pessoa1[valor]);
}

// exibindo todas as chaves para pessoa1 com laço for
// for (let chave in pessoa1) {
//     console.log(chave);
// }


// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);

// deletando uma chave do objeto

// delete pessoa1.sobrenome;
// console.log(pessoa1);



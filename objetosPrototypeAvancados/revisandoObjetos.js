// exemplo de objeto
const pessoa = {
    nome: 'Fulano',
    sobrenome: 'de Tal',
    idade: 10000
}

// acessando a chave modo 1
console.log(pessoa.nome);

// acessando a chave modo 2
console.log(pessoa['nome']);

const chave = 'idade';
console.log(pessoa[chave]);

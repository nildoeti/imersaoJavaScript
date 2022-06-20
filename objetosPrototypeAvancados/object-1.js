// exemplo 1 de objeto literal
const pessoa = {
    nome: 'Fulano de',
    sobreNome: 'Tal'
}

// primeira forma de acessar as propriedades do objeto
console.log(pessoa.nome);
console.log(pessoa.sobreNome);
// segunda forma de acessar as propriedades do objeto
console.log(pessoa['nome']);
console.log(pessoa['sobreNome']);
// modo dinâmico de acessar a propriedade nome
const chaveNome = 'nome';
const chaveSobreNome = 'sobrenome';
console.log(pessoa[chaveNome]);
console.log(pessoa[chaveSobreNome]);



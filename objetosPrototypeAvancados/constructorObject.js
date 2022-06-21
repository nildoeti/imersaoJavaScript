// construtor de objetos
const pessoa1 = new Object();
pessoa1.nome = 'Fulano de';
pessoa1.sobrenome = 'Tal';
pessoa1.idade = 44;
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

// objeto literal
const pessoa2 = {
    nome: 'Beltrano',
    sobrenome: 'de Tal',
    idade: '100'
}

console.log(`${pessoa2.nome} ${pessoa2.sobrenome} tem ${pessoa2.idade} de idade.`);

// acessando propriedades por meia de métodos 
pessoa1.falarNome = function() {
    return (`${this.nome} ${this.sobrenome}  esta falando.`);
};
pessoa1.falarNome();


pessoa1.anoNascimento = function() {
    // pegar idade e subtrair do ano atual
    const anoAtual = new Date();
    return anoAtual.getFullYear() - this.idade;
};

console.log(`Ano de nascimento é ${pessoa1.anoNascimento()}`);

// acessando as chaves de um objeto
for (let chave in pessoa1) {
    console.log(chave);
}
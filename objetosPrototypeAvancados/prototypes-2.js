// função Pessoa é um molde para a contrução de outras funções
function Pessoa(nome, sobrenome) {
    // definindo propriedades e métodos
    this.nome = nome;
    this.sobrenome = sobrenome;

    // sob análise
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

// instâncias da função construtura Pessoa 
const pessoa1 = new Pessoa('Fulano', 'de Tal'); //<- Pessoa - Função construtora
const pessoa2 = new Pessoa('Beltrano', 'de Tal'); // <- Pessoa - Função construtora


console.log(pessoa1)
console.log(pessoa2)


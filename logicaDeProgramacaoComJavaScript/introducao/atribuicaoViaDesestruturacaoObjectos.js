// atribuição via desestruturação em objetos
// uso do operador ...(rest), ...(spread)

const pessoa = {
    nome: 'Fulano',
    sobreNome: 'de Tal',
    idade: 30,
    profissao: 'DEV',
    endereco: {
        rua: 'Rua Brasil',
        numero: 245,
        // num: 245, // quando não houver um valor padrão para a propriedade
        // de um objeto, basta atribuir um ...
        bairro: 'Centro',
        cidade: 'São Paulo',
        estado: 'SP'
    }
};
// exemplo 9 - rest
const {nome, ...resto} = pessoa;
console.log(resto);

// exemplo 8
// const {endereco: {rua, num: n = 1000}} = ... pessoa; // um valor para ser o substituto
// console.log(rua, n);

// exemplo 7
// const {endereco: {rua}, endereco} = pessoa;
// console.log(rua, endereco);

// exemplo 6
// const {endereco: {estado}} = pessoa;
// console.log(estado);

// exemplo 5
// const {endereco: {bairro, cidade, estado}} = pessoa;
// console.log(`${bairro}, ${cidade} - ${estado}`);

// exemplo 4
// const {endereco: {rua, numero}} = pessoa;
// console.log(`${rua}, ${numero}.`);

// exemplo 3
// const {endereco} = pessoa;
// console.log(endereco);

// atribuição via desestruturação em objetos
// const {nome} = pessoa;
// console.log(nome); // desestruturação de uma variáveis
//
// const {sobreNome, idade} = pessoa;
// console.log(sobreNome, idade); // desestruturação de duas variáveis
//
// const {anoNascimento  = '1356'} = pessoa;
// console.log(anoNascimento); // propriedade e valor não definido no objeto pessoa
//
// const {profissao, } = pessoa;
// console.log(profissao);

// exemplo 2
// const {endereco: {rua: r = 'TESTE',  numero}, endereco} = pessoa;
// console.log(r, numero, endereco);

// exemplo 1
// const {endereco} = pessoa;
// console.log(endereco);




// // atribuição normal
// const primeiroNome = pessoa.nome;
// console.log(primeiroNome); // Fulano
// console.log(pessoa.nome); exibe todos os valores do objeto pessoa

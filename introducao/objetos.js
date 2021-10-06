// aqui temos uma array
const array = [1, 2, 3, 4]; // uso de colchetes para criar uma array
array[0] = 'teste'; // adiciona 'teste' no início da lista
// array = 'teste'; // errado pois estamos tentando atribuir um novo para uma constante
// se array for declarado como let, seria válido;
console.log(array); // [ 'teste', 2, 3, 4 ]


// aqui temos um objeto
const pessoa1 = { // uso de chaves para criar um objeto em JavaScript
    nome: 'pedro', //  atributo nome, seguido de seu valor 'pedro'
    sobreNome: 'pereira', // atributo sobrenome seguido de seu valor 'pereira'
    idade: 16 // atributo idade, seguido de seu valor 16
};

console.log(pessoa1.nome); // acessando o valor para o atributo nome do objeto pessoa
console.log(pessoa1.sobreNome); // acessando o valor para o atributo sobreNome do objeto pessoa
console.log(pessoa1.idade); // acessando o valor para o atributo idade do objeto pessoa

// criar um objeto com uso de uma função mais conhecido como fabrica de objetos
const criaPessoa = function(nome, sobreNome, idade) { // parâmetros da função
    return {
        nome,
        sobreNome,
        idade
    };
};

const pessoa2 = criaPessoa('pedro', 'pereira', 21); // valores para os parâmetros da função
const pessoa3 = criaPessoa('maria', 'silva', 41); // valores para os parâmetros da função
const pessoa4 = criaPessoa('ana', 'antunes', 66); // valores para os parâmetros da função
const pessoa5 = criaPessoa('mario', 'cardoso', 77); // valores para os parâmetros da função
const pessoa6 = criaPessoa('joão', 'crisostimo', 2); // valores para os parâmetros da função

console.log(pessoa2.nome); // exibe o valor do argumento nome do objeto
console.log(pessoa2); // exibe todos os argumentos e seus valores de uma única vez
console.log(pessoa3); // exibe todos os argumentos e seus valores de uma única vez
console.log(pessoa4); // exibe todos os argumentos e seus valores de uma única vez
console.log(pessoa5); // exibe todos os argumentos e seus valores de uma única vez
console.log(pessoa6); // exibe todos os argumentos e seus valores de uma única vez

//  Mais um exemplo de como criar um objeto em JavaScript
const maisUmaPessoa = {
    nome: 'fulano',
    sobreNome: 'de tal',
    idade: 4,

    fala() { // função sem parâmetros
        console.log(`A idade atual de ${this.nome} ${this.sobreNome} é ${this.idade}`);
    },

    incrementaIdate() { // função sem parâmetro
        this.idade++;
    }
};

maisUmaPessoa.fala(); // chama a função maisUmaPessoa com o parâmetro da função fala()
maisUmaPessoa.incrementaIdate();
maisUmaPessoa.fala();
maisUmaPessoa.incrementaIdate();
maisUmaPessoa.fala();

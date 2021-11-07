// Recordando o que é uma array de objetos
const array = [1, 2, 3, 4, 5]; // uso de colchetes para criar uma array
console.log(`Lista de objetos atual: ${array}`);
console.log(`Ultimo objeto da lista: ${array.push()}`); // retorna o ultimo objeto da lista
console.log(`Primeiro objeto da lista: ${array.shift()}`);

array[0] = 'teste'; // adiciona 'teste' no início da lista
// array = 'teste'; // errado pois estamos tentando atribuir um novo para uma constante
// se array for declarado como let, seria válido;
console.log(`Lista alterada: ${array}\n`); // [ 'teste', 2, 3, 4 ]

// aqui temos um objeto
const pessoa1 = { // uso de chaves para criar um objeto em JavaScript
    nome: 'pedro', //  atributo nome, seguido de seu valor 'pedro'
    sobreNome: 'pereira', // atributo sobrenome seguido de seu valor 'pereira'
    idade: 16 // atributo idade, seguidxo de seu valor 16
};

console.log(`Nome: ${pessoa1.nome}`); // acessando o valor para o atributo nome do objeto pessoa
console.log(`Segundo Nome: ${pessoa1.sobreNome}`); // acessando o valor para o atributo sobreNome do objeto pessoa
console.log(`Idade: ${pessoa1.idade}\n`); // acessando o valor para o atributo idade do objeto pessoa

// criar um objeto com uso de uma função mais conhecido como fabrica de objetos
const criaPessoa1 = function(nome, segundoNome, idade) { // objeto pessoa represenado por variáveis como parâmetros
    return {
        nome: nome, // parâmetro para nome
        segundoNome: segundoNome, // parâmetro para segundo nome
        idade: idade // parâmetro para idade
    };
};// aqui temos uma array
const array = [1, 2, 3, 4]; // uso de colchetes para criar uma array
const array = [1, 2, 3, 4, 5]; // uso de colchetes para criar uma array
console.log(`Lista de objetos atual: ${array}`);
console.log(`Ultimo objeto da lista: ${array.push()}`); // retorna o ultimo objeto da lista
console.log(`Primeiro objeto da lista: ${array.shift()}`);

array[0] = 'teste'; // adiciona 'teste' no início da lista
// array = 'teste'; // errado pois estamos tentando atribuir um novo para uma constante
// se array for declarado como let, seria válido;
console.log(array); // [ 'teste', 2, 3, 4 ]

console.log(`Lista alterada: ${array}\n`); // [ 'teste', 2, 3, 4 ]

// aqui temos um objeto
const pessoa1 = { // uso de chaves para criar um objeto em JavaScript
    nome: 'pedro', //  atributo nome, seguido de seu valor 'pedro'
    sobreNome: 'pereira', // atributo sobrenome seguido de seu valor 'pereira'
    idade: 16 // atributo idade, seguido de seu valor 16
    idade: 16 // atributo idade, seguidxo de seu valor 16
};

console.log(pessoa1.nome); // acessando o valor para o atributo nome do objeto pessoa
console.log(pessoa1.sobreNome); // acessando o valor para o atributo sobreNome do objeto pessoa
console.log(pessoa1.idade); // acessando o valor para o atributo idade do objeto pessoa
console.log(`Nome: ${pessoa1.nome}`); // acessando o valor para o atributo nome do objeto pessoa
console.log(`Segundo Nome: ${pessoa1.sobreNome}`); // acessando o valor para o atributo sobreNome do objeto pessoa
console.log(`Idade: ${pessoa1.idade}\n`); // acessando o valor para o atributo idade do objeto pessoa

// criar um objeto com uso de uma função mais conhecido como fabrica de objetos
const criaPessoa = function(nome, sobreNome, idade) { // parâmetros da função
    const criaPessoa1 = function(nome, segundoNome, idade) { // objeto pessoa represenado por variáveis como parâmetros
        return {
            nome,
            sobreNome,
            idade
        nome: nome, // parâmetro para nome
            segundoNome: segundoNome, // parâmetro para segundo nome
            idade: idade // parâmetro para idade
        };
    };

    const pessoa2 = criaPessoa('pedro', 'pereira', 21); // valores para os parâmetros da função
    const pessoa3 = criaPessoa('maria', 'silva', 41); // valores para os parâmetros da função
    const pessoa4 = criaPessoa('ana', 'antunes', 66); // valores para os parâmetros da função
    const pessoa5 = criaPessoa('mario', 'cardoso', 77); // valores para os parâmetros da função
    const pessoa6 = criaPessoa('joão', 'crisostimo', 2); // valores para os parâmetros da função
    const dados1 = criaPessoa1('pedro', 'pereira', 23); // envio de dados para os parâmetro do objeto criaPessoa
    console.log('Dados completo para o object criaPessoa: ', dados1);
    console.log(`Valor para a propriedade nome: ${dados1.nome}`);
    console.log(`Valor para a propriedade segundo nome: ${dados1.segundoNome}`);
    console.log(`Valor para a propriedade idade: ${dados1.idade}\n`);


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
        const criaPessoa2 = {
            nome: 'Fulano',
            segundoNome: 'de Tal',
            idade: 55,

            descrevaPessoa() {
                let nomeAtual = this.nome;
                let segundoNomeAtual = this.segundoNome;
                let idadeAtual = this.idade;

                console.log(`Primeiro nome: ${nomeAtual}`);
                console.log(`Segundo nome: ${segundoNomeAtual}`);
                console.log(`Idade: ${idadeAtual}\n`);

                fala() { // função sem parâmetros
                    console.log(`A idade atual de ${this.nome} ${this.sobreNome} é ${this.idade}`);
                    console.log(`A idade atual de ${this.nome} ${this.segundoNome} é ${this.idade} anos.`);
                },

                incrementaIdate() { // função sem parâmetro
                    this.idade++;
                    incrementaIdade() {
                        this.idade++; // incrementa idade em 1
                    }
                };

                maisUmaPessoa.fala(); // chama a função maisUmaPessoa com o parâmetro da função fala()
                maisUmaPessoa.incrementaIdate();
                maisUmaPessoa.fala();
                maisUmaPessoa.incrementaIdate();
                maisUmaPessoa.fala();
                criaPessoa2.descrevaPessoa(); // chamada da função
                criaPessoa2.incrementaIdade(); // 55
                criaPessoa2.descrevaPessoa();
                criaPessoa2.incrementaIdade(); // 56
                criaPessoa2.descrevaPessoa();
                criaPessoa2.incrementaIdade(); // 57

                const dados1 = criaPessoa1('pedro', 'pereira', 23); // envio de dados para os parâmetro do objeto criaPessoa
                console.log('Dados completo para o object criaPessoa: ', dados1);
                console.log(`Valor para a propriedade nome: ${dados1.nome}`);
                console.log(`Valor para a propriedade segundo nome: ${dados1.segundoNome}`);
                console.log(`Valor para a propriedade idade: ${dados1.idade}\n`);



                //  Mais um exemplo de como criar um objeto em JavaScript
                const criaPessoa2 = {
                    nome: 'Fulano',
                    segundoNome: 'de Tal',
                    idade: 55,

                    descrevaPessoa() {
                        let nomeAtual = this.nome;
                        let segundoNomeAtual = this.segundoNome;
                        let idadeAtual = this.idade;

                        console.log(`Primeiro nome: ${nomeAtual}`);
                        console.log(`Segundo nome: ${segundoNomeAtual}`);
                        console.log(`Idade: ${idadeAtual}\n`);

                        console.log(`A idade atual de ${this.nome} ${this.segundoNome} é ${this.idade} anos.`);
                    },

                    incrementaIdade() {
                        this.idade++; // incrementa idade em 1
                    }
                };

                criaPessoa2.descrevaPessoa(); // chamada da função
                criaPessoa2.incrementaIdade(); // 55
                criaPessoa2.descrevaPessoa();
                criaPessoa2.incrementaIdade(); // 56
                criaPessoa2.descrevaPessoa();
                criaPessoa2.incrementaIdade(); // 57

// exemplo 1
const pessoa = {} // objeto pesssoa vazio

// populando nosso objeto pessoa
pessoa.nome = 'Fulano';
pessoa.sobrenome = 'de Tal';
pessoa.idade = 30;
pessoa.aprovado = true;

// conferindo o tipo da variável pessoa
console.log(typeof(pessoa)); // object

// exibindo os dados do objeto pessoa no console
console.log(pessoa); // { nome: 'Fulano', sobrenome: 'de Tal', idade: 30, aprovado: true }


// exemplo 2
const coresBandeiraBrasil = {
    cor1: 'verde',
    cor2: 'amarelo',
    cor3: 'azul',
    cor4: 'branco'
}

// exibindo todas as propriedades do objeto coresBandeiraBrasil
console.log(coresBandeiraBrasil); // { cor1: 'verde', cor2: 'amarelo', cor3: 'azul', cor4: 'branco' }

// exibindo uma propriedade em especidifico do objeto
console.log(coresBandeiraBrasil.cor1); // verde
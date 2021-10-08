/*
    TIPOS DE DADOS PRIMITIVOS
    São valores imutaveis do tipo:
    strings, number, boolean, undefined, null, (bigint, symbol)
*/

// exemplo 1
let idade = 19;
console.log(typeof (idade)); // tipo Number, que é um tipo de dado primitivo
idade = 5; // mudou o valor? Não, apenas trocamos o valor, mas o dado atual é 19
console.log(idade); // 5
/*
    ENTENDENDO
    Pense na variável idade como uma caixa que cabe varios dados, mas apenas
    valores do mesmo tipo.
    Por isso falamos que o tipo Number que é um dado primitivo, é imutável. O
    tipo não se altera ao longo de sua execução, porém o seu valor sim.

    Se tentarmos alterar um dos indíces da variáve idae como: idade[0] = 5;,
    teriamos um erro, e isso comprova que variáveis primitivas são imutáveis.

    PORTANTO
    Variável primitiva é como uma caixa que recebe varios valores difentes.
    Os valores podem ser alterados, mas a variável em sim não.
*/

let string1 = 'A';
let string2 = string1; // cópia de string1
console.log(string1, string2);

string1 = 'C';
console.log(string1, string2); // somente o valor da variável string1, foi alterado


/*
    TIPOS DE DADOS MUTÁVEL
    Referência (mutável - array, object, function) - passados por referência
*/

let array1 = [1, 2, 3];
let array2 = array1;
let array3 = array2;

console.log(array1, array2); // dados de array1 passado por referência para array2

array1.push(4);
console.log(array1, array2); // diferente de uma variável primitiva, uma variável
// muda seus valores pois são variáveis mutável.
array2.pop(); // retira o últmo valor de array2
console.log(array1, array2); // altera-se a array2, altera-se a array1, pois se
// pois se trata de uma variável mutável
array1.push(6);
console.log(array1, array2, array3); // todas as arrays(1, 2, 3) recebem o mesmo valor


// exemplo 2
const pessoa = {
    primeiroNome: 'Fulano',
    segundoNome: 'de Tal'
};

console.log(pessoa); // { primeiroNome: 'Fulano', segundoNome: 'de Tal' }
pessoa.primeiroNome = 'Beltrano';
console.log(pessoa); // { primeiroNome: 'Beltrano', segundoNome: 'de Tal' }

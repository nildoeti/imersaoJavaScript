/*
    Constantes em JavaScript descreve uma palavra chave que armazena um determinado
    tipo de dados que não pode ser alterado ao logo de sua execução.
    Após declarar uma constante como no exemplo abaixo, esta mesma constante,
    não pode ser mais declarada, pois o mesmo é inválido.
*/

const idade = 34; // constante idade inicializada com valor 34
// não sendo possivel reatribuir um novo valor para a constante idade
// idade = 20; // Erro: Assignment to constant variable

/*
    Variáveis e constantes são palavras que declaramos para que seja usada
    pelo sistema para armazenar determinados tipos de dados.
    Sendo que as palavras chaves declaradas em geral tem que descrever de
    forma preferêncial, os dados que os carrega.
    Sendo assim, se eu declaro uma variável ou uma constante com a palavra chave
    idade, sei exatamente que um valor numérico esta representando o valor para
    a idade de algo ou uma pessoa.
    Estes dados podem ser do tipo númericos, textos, lógicos, nulos entre outros,
    como descrito a seguir.

    Alguns tipos de valores imutáveis {
    numbers,
    strings,
    boolean,
    undefined,
    null,
    symbol,
    bigint
    }

    Alguns tipos de valores mutáveis {
    arrays,
    objects, com exceção de null.
    }

    Dados to tipo mutáveis, são estruturas de dados complexas que define não
    somente o tipo de dados de uma varável como têm influência direta em
    outras variáveis e constantes ao longo da excução do programa.

    Ao se declarar uma constante que armazenará dados de uma variável, esta
    cosntante ainda terá seus dados imutável. A variável terá seus valores
    alterados ao logno da execução do programa, mas a constate tera seu valor
    sempre inalterado, como no exemplo abaixo.
*/

// não pode
let numero1 = 8;
const numero2 = numero1;
// numero2 = 9; // não sendo possível alterar o valor da constante numero2
console.log(numero1); // 8
console.log(numero2); // 8

// pode
const array = [1, 2, 4, 5];
console.log(`Antes: ${array}`);
array.pop();
array[0] = 1000;
console.log(`Depois: ${array}`);

// não pode
// array = 'um texto'; // Assignment to constant variable.

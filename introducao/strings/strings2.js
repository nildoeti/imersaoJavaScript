/*
    STRINGS são para armazenar dados presentados em forma de textos.
*/

// destacar partes de uma frase com aspas duplas
const fraseFilosofica = 'O mundo não vale aquilo em que acreditamos.  "Friedrich Nietzsche"';
console.log(fraseFilosofica);

// destacar partes de uma frase com aspas simples
const fraseReflexao = "Imagine uma nova história para sua vida e acredite nela.  'Paulo Coelho'";
console.log(fraseReflexao);

// destacar partes de uma frase com barra de escape com uso de aspas duplas
const fraseDeVida = 'Tão bom morrer de amor! E continuar vivendo... "\Mario Quintana\"';
console.log(fraseDeVida);

// destacar partes de uma frase com barra de escape com uso de aspas simples
const fraseMotivacional = "A persistência é o caminho do êxito.  '\Charles Chaplin\'";
console.log(fraseMotivacional);

// destacar partes de uma frase com duas barras de escape
const frasePositiva = 'Tudo vale a pena quando a alma não é pequena.  \\Fernando Pessoa\\'
console.log(frasePositiva);

/*
    Acessar POSIÇÃO de um elemento em uma variável tipo STRING
    IMPORTANTE
    Ao se informar uma posição de indíce que não existe, JavaScript
    sempre iriá retornar nada, uma expressão VAZIA.
*/
// acessando o indíce(posição), de um elemento na frase
console.log(frasePositiva[0]); // T

// acessando o indíce(posição), de um elemento na frase que não existe
console.log(fraseDeVida[65]); // undefined

// acessando o indíce(posição), negativo de um elemento na frase
console.log(frasePositiva[-1]); // undefined, não existe indíce negativo

// acessando o indíce(posição), de um elemento com o método charAt
console.log(fraseDeVida.charAt(1)); // ã


/*
    Concatenação de strings em JavaScript
*/
// Concatenação de textos com o método concat()
console.log(fraseReflexao.concat('\nLida reflexão de Paulo Coelho.'));

// Concatenação de textos com o operador +
console.log(fraseFilosofica + '\nMuito interessante o que o "Friedrich Nietzsche" escreveu');

// Concatenação de textos com crases
console.log(`${fraseReflexao}`);

/*
    Pesquisando um ÍNDICE em uma frase com o método indexOf no JavaScript
*/
// saber em qual índice começa uma determinada palavra em uma frase
console.log(fraseMotivacional.indexOf('do')); // índice 27 para a palavra do

// quando um objeto não esta na frase JavaScript SEMPRE retorna -1
console.log(fraseDeVida.indexOf('não')); // -1,

// pesquisando um objeto a partir de um determinado índice
console.log(fraseDeVida.indexOf('Mario', 7)); // 48

// pesquisando um objeto que não existe a partir de um determinado índice
console.log(fraseDeVida.indexOf('teste', 2)); // -1

// pesquisando uma objeto com uso do método lastIndexOf(), pesquisa de trás para frente
console.log(fraseDeVida.lastIndexOf('o', 4  )); // 2

// pesquisando um objeto com uso do método lastIndexOf(), pesquisa de trás para
// frente quando o objeto não existe
console.log(fraseDeVida.lastIndexOf('frase', 77)); // -1

/*
    Expressão REGULAR
*/
// expressão REGULAR com uso do método match()
console.log(fraseDeVida.match(/[a-z]/g));   // flague g, pesquisa todas as ocorrẽncias

// expressão REGULAR com uso do método search()
console.log(fraseDeVida.search(/[a-z]/g));  // flague g, pesquisa todas as ocorrẽncias

// pesquisando um objeto com uso do método search
console.log(frasePositiva.search(/[a]/)); // letra 'a' achado no indíce 6

// expressão REGULAR com uso da função replace()
console.log(fraseMotivacional.replace('êxito', 'sucesso')); // substitui 'exito' por 'sucesso'

// expressão REGULAR com uso do método replace mas com expressão regular
console.log(fraseReflexao.replace(/nela/, 'nele')); // substitui 'nela' por 'nele'

// expressão REGULAR com uso do método replace() para substituir um valor na expressão
console.log(fraseFilosofica.replace(/a/, '#')); // substitui apenas a primera ocorrẽncia
console.log(fraseFilosofica.replace(/a/g, '#')); // substitui todas as ocorrẽncias de 'a', por '#'

/*
    Saber o tamanho de uma STRING em JavaScript
*/
// uso do método length para saber tamanho de uma STRING
console.log(fraseDeVida.length); // 63

/*
    Fatiamento de uma STRING
*/
console.log('Uma história fantástica'.slice(0, 4)); // Uma
console.log('Uma história fantástica'.slice(4, 12)); // história
console.log('uma história fantástica'.slice(-10)); // fantástica
console.log('uma história fantástica'.slice(13)); // fantástica
console.log('uma história fantástica'.slice(13, -1)); // fantástica

// fatiamento com o método substring
console.log('uma história fantástica'.substring(13)); // fantástica
console.log('uma história fantástica'.substring(13, -1)); // uma história

// fatiamento com o método slice()
console.log('uma história fantástica'.split('')); // fatiamento padrão com virgula, letra por letra
console.log('uma história fantástica'.split(' ')); // fatiamento padrão com virgula, palavra por palavra
console.log('uma história fantástica'.split('a')); // omitindo o todos os caracteres 'a' da frase
console.log('uma história fantástica'.split(' ', 2)); // fatiamento somente com ás duas primeras palavras da frase

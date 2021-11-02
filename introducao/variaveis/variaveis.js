 /**
  * var x = 4; // valor inicial para a variável
  * var x = 2; // redeclarado um segundo valor para a variável
  *
  * let y = 1; // valor inicial para a variável y
  * let y = 2; // erro: let não permite redeclarar a mesma variável
  *
  *
  * IMPORTANTE sobre scopos de variáveis
  * Quando você declara uma váriavel fora de qualquer função, ela é chamada de
  * variável global, porque está disponível para qualquer outro código no
  * documento atual. Quando você declara uma variável dentro de uma função, é
  * chamada de variável local,  pois ela está disponível somente dentro dessa
  * função.
  *
  *
  * HOISTING
  * Simplesmente permite se declarar um valor para uma variável antes mesmo
  * de criar
  *
  * REDECLARAÇÃO
  * redeclar variáveis somente com VAR, não sendo possivel com LET
  *
  * REATRIBUIÇÃO
  * reatribuir um novo valor em variáveis com VAR é possivel o que não pode
  * com LET
  *
  * camelCASE são variáveis seguidas de dois ou mais nomes com suas iniciais
  * em letras maiuculas: minhaVariavel, notaFiscal, anoNascimento, etc
  *
  *
  *
  */

 var a = 1; // scopo global
 var b = 2; // scopo global

 if (a === 1) {
     var a = 11; // o scopo é global pois esta sendo declarado com var mesmo
     // que dentro de uma função

     let b = 22; // o scopo é local de if pois esta sendo declarado com let

     console.log(`${a}, pertence ao escopo global`); // 11
     console.log(`${b}, pertence ao escopo local do bloco IF`); // 22
 }

 console.log(`${a}, pertence ao escopo global, pois esta fora do bloco de IF`);
 console.log(`${b}, pertence ao escopo global, pos esta fora do bloco de IF`);


 // HOISTING
 numeroUm = 4; // aqui é uma atribuição de valor, não uma declaração
 console.log(numeroUm);

 var numeroUm;
 console.log(numeroUm);

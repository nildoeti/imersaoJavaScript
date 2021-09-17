/**
 * A palavra chave let, foi introduzida na ECMAScript ES6, em 2015.
 * O que muda?
 * Variáveis declaradas com let, não pode ser redeclarada, como descrito no
 * exemplo abaixo.
 */

// declaradas duas Variáveis com uso da palavra chave let
let cor;
let ano;

// atribuição de valores para as duas variáveis
cor = 'azul';
ano = 2021;

// exibindo o conteúdo das variáveis cor e ano no console
console.log(cor);
console.log(ano);


// Excopo de bloco
// {
//   let media;
//   media = 9.0;
// }
// variável média não foi definida para fora do bloco de construção acima
// console.log(media); // portanto irá ocasaionar erro


/**
* Dclaração de variáveis com a palavra chave var, pode ser acessadas fora do
* bloco de código no JavaScript.
*/

{
  var linguagemProgramacao;
  linguagemProgramacao = 'JavaScript';
}

// Exibe conteúdo para a variável linguagemProgramacao, fora do bloco de código
console.log(linguagemProgramacao);

/**
* IMPORTANTE:
* Com a palavra chave var, pode ser declarada o mesmo nome de variável mais de
* uma vez, e com a palavra chave let, não.
*/


// Variável numeroPedido declarada duas vezes com dois valores disntitos
// e acessadas fora do escopo de bloco do código
{
  var numeroPedido = 2000;
  var numeroPedido = 2100;
  console.log(ano);
}

console.log(numeroPedido);

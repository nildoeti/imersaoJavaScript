/**
* Variáveis do tipo const, são variáveis que não se altera seu valor declarado.
* Quando usar uma variável do tipo constante?
* Ao declarar uma Array
* Ao declarar um Object
* Ao declarar uma Function
* Ao declarar uma RegExp
*/

// Declara variável cores, do tipo const
const cores = ['azul', 'amarelo', 'marron'];

// Um objeto do tipo const
const pessoa = {
  nome: 'Pedro Bial',
  idade: 63,
  dataNascimento: 1958,
  profissao: 'Jornalista'
};

/**
* Assim como a palavra reservada let, a palavra reservada const, é semelhante
* ao acesso de seus valors dentro e fora do escopo de bloco
*/

{
  const alimentoFavorito;
}
// Não se pode declarar ou acessar o valor de uma variável do tipo const, fora
// do escopo de seu bloco
alimentoFavorito = ['salada', 'arroz branco', 'feijão preto']; // opção iválida

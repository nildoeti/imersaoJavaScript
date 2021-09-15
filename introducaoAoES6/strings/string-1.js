// retorna o tamanho de uma string
const tamanhoDaString = 'Texto'.length;
console.log('Quantidade de letras: ', tamanhoDaString);

// retorna uma array quebrando a string por um delimitador
const delimitador = 'Quebrando uma string'
console.log('Antes: ', delimitador);
delimitador1 = delimitador.split('u')
console.log('Depois: ', delimitador1);

// Busca por um valor e substitue por outro
const substitueValor = 'Meu carro amigo';
console.log('Antes: ', substitueValor);
const substitueValor1 = substitueValor.replace('carro', 'caro')
console.log('Depois: ', substitueValor1);

// retorna a fatia de um valor
const fatiaDeUmValor = 'Fatia de um valor'
console.log('Antes: ', fatiaDeUmValor);
const fatiaDeUmValor1 = fatiaDeUmValor.slice(-1)
console.log('Depos: ', fatiaDeUmValor1);
const fatiaDeUmValor2 = fatiaDeUmValor.slice(0, 5) // intervalos do fatiamento
console.log('Novo fatiamento: ', fatiaDeUmValor2);

// retorna N caracters a partir de uma posição
const posicaoCaracteres = 'Caracteres a partir de uma posição.'
console.log('Antes: ', posicaoCaracteres);
const posicaoCaracteres1 = posicaoCaracteres.substr(0, 10);
console.log('Depois: ', posicaoCaracteres1);
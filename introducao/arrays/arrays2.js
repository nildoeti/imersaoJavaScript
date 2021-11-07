/*
    Descrição
    Arrays são objetos semelhantes a listas que vêm com uma série de métodos
    embutidos para realizar operações de travessia e mutação.
*/

// Exemplo de uma array de strings
let frutas = ['maça', 'laranja', 'morango', 'banana'];

// Exemplo de uma array de números
const numeros = [2, 7, 99, 300, 56, -56];

// Exemplo de uma array com multiplos objetos, porém não sendo uma boa prática na programação
const arrayMultiplo = [3, -88, 'poema', [6, 900], ['brasil', 'verde']];


// acesso ao indice de uma array
console.log(`Listando os objetos de uma array: ${frutas}`);

// acesso um determinado indice na lista
console.log(`Exibindo o primeiro item da lista de frutas: ${frutas[0]}`);
console.log(`Exibindo o segundo item da lista de números: ${numeros[1]}`);

// editar , alterar, atualizar um objeto na lista
const listaFrutas = frutas;
console.log(`Lista atual de frutas: ${listaFrutas}`); // exibindo a lista atual de frutas
// editar o pŕimeiro objeto da listaFrutas
listaFrutas[0] = 'caqui';
console.log(`Novo objeto na lista de frutas:  ${listaFrutas}`);

// listando o tamanho de objetos em uma lista
const listaNumeros = numeros;
console.log(`Quantidades de objetos na lista de números: ${listaNumeros.length}`);

// adiciona novo objeto no início da lista
listaNumeros.unshift(-77);
console.log(`adiciona -77 no incicio da lista: ${listaNumeros}`);

// adiciona novo objeto no fim da lista
listaNumeros.push(90.89);
console.log(`Numeral 99.89 adicionado no final da lista: ${listaNumeros}`);

// remove o ultimo objeto da lista
console.log(`Lista atual: ${listaNumeros}`);
listaNumeros.pop(); // remove o ultimo objeto da lista de números
console.log(`Removido 90.80 do final da lista ${listaNumeros}`);

// remove o ultimo objeto da lista e armazena em uma nova variável
const ultimoObjeto = numeros.pop();
console.log(`${ultimoObjeto} é o ultimo objeta da lista que foi removido.`);


// remove o primeiro objeto da lista
const objetoRemovido = numeros.shift();
console.log(`${objetoRemovido} é o primeiro objeto da lista que foi removido. `);

// deletando um objeto da lista de números com o método delete()
let novaListaDeNumeros = numeros;
console.log(`\nAntes: ${novaListaDeNumeros}`);
delete novaListaDeNumeros[3]; // deleta segundo objeto da lista
console.log(novaListaDeNumeros);

var colaboradora = {
    idade: 28,
    nome: 'alice',
    atribuicao: 'egenheira de dados'
};

console.log(delete colaboradora.idade); // true
console.log(colaboradora.idade); // true

// fatiando a lista com o método slice
console.log(`\nLista atual: ${numeros}`);
let listaFatiada1 = numeros.slice(0, 2);
console.log(`Após fatiamento: ${listaFatiada1}`);

let listaFatiada2 = numeros.slice(0, -1); // determindo o fatiamento pelo indice negativo
console.log(listaFatiada2);

// uma array é do tipo objeto
console.log(typeof (frutas)); // object

// certificando-se de que frutas é uma instância de Array
console.log(frutas instanceof (Array)); // true

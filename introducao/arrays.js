// listas de divertos tiipos de objetos, porém não sendo uma boa prática na programação
let listaDiversa = ['maria', 123, true, false, ['maça', 'banana'], null];

// lista de nomes
//índice        0       1       2          3
let nomes = ['pedro', 'ana', 'maria', 'rubens'];
console.log(`Lista atual: ${nomes}`); // exibe todos os objetos da lista
console.log(nomes[0]); // acessa o primeiro objeto da lista
console.log(nomes[1]); // acessa o segundo objeto da lista

// editar , alterar, atualizar um objeto na lista
nomes[0] = 'marta'; // edita o primeiro objeto da lista
console.log(`Lista alterada: ${nomes}`);

// adiciona novo objeto na listas
nomes[3] = 'luiz';
console.log(`Objeto adicioando no final da lista: ${nomes}`);

// saber o tamanho de um array
console.log(`Tamanho atual da array de nomes: ${nomes.length}`);

nomes.push('fabio'); // adicioana um objeto na lista
console.log(`Novo objeto adicioando na lista: ${nomes}`);

nomes.unshift('beto'); // adiciona novo objeto no incio da lista
console.log(nomes);

nomes.pop(); // remove o ultimo objeto da lista
console.log(nomes);

// remove o ultimo objeto da lista e armazena em uma nova variável
let objetoRemovido = nomes.pop();
console.log(`Objeto removido da lista: ${objetoRemovido}`);

// remove o primeiro objeto da lista
let primeiroObjetoRemovido = nomes.shift();
console.log(`Primeiro objeto da lista removido: ${primeiroObjetoRemovido}`);

// deleta um objeto na lista e mantêm o indíce vazio
delete nomes[1]; // remove o segundo objeto da lista
console.log(nomes);
console.log(nomes[1]); // confirmando o indice 1 da lista mantido e vazio

// fatiando a lista com o método slice
listaFatiada1 = nomes.slice(0, 3); // determindo o intervalo do fatiamento
console.log(listaFatiada1);

// verificando o tamanho da listas
console.log(nomes.length);
listaFatiada2 = nomes.slice(0, -1); // determindo o fatiamento pelo indice negativo
console.log(listaFatiada2);

console.log(typeof(nomes)); // uma array é do tipo objeto
// perguntando se nomes e listaFatiada2,  é uma instância de array
console.log(nomes instanceof(Array));
console.log(listaFatiada2 instanceof(Array));

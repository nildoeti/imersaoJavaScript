/**
 * No JavaScript, Array é um objeto global usado na construção de 
 * 'arrays', que são objetos de alto nível semelhantes a listas.
 * 
 * OBSERVAÇÃO
 * Use [] para a criação de arrays
 * 
 * 
 * RESUMO
 * push() - adiciona um objeto no final da lista
 * unshift() - adiciona um objeto no inicio da lista
 * 
 * pop() - remove o ultimo objeto da lista
 * shift() - remove o primeiro objeto da lista
 * 
 * includes() - verifica se um determinado objeto esta na lista
 * every() testa se todos os objetos do array passam pelo teste criado pela função fornecida.
 * 
 */


// método de construção de array com []
let listaUm = []; // uma array vazia
console.log(listaUm) // saida da lista vazia

listaUm.push(1); // objeto 1, adicioando ao final da listaUm
console.log(listaUm); // 1

listaUm.push(2); // objeto 2, adicioando ao final da listaUm
console.log(listaUm); // 1, 2

listaUm.pop(); // remove o ultimo objeto da listaUm
console.log(listaUm); // 1

listaUm.push(3); // objeto 3 adicioando ao final da listaUm
console.log(listaUm); // 1, 3

listaUm.push(5); // objeto 5 adicioando ao final da listaUm
console.log(listaUm); 1, 3, 5

listaUm.shift(); // remove o primeiro objeto da lista
console.log(listaUm); // 3, 5

listaUm.unshift(4); // objeto 4 adicionado no inicio da lista
console.log(listaUm);

// verifica se o objeto 10, esta na listaUm
console.log(listaUm.includes(10));

// verifica se todos os objetdas da listaUm é igual a 5
console.log(listaUm.every(objeto => objeto === 5));
/**
 * A linguagem JavaScript é projetada com base em um simples paradigma orientado 
 * a objeto. Um objeto é uma coleção de propriedades, e uma propriedade é uma 
 * associação entre um nome (ou chave) e um valor. Um valor de propriedade pode 
 * ser uma função, que é então considerada um método do objeto. Além dos objetos 
 * que são pré-definidos no browser, você pode definir seus próprios objetos.
 * 
 * ESTRUTURA
 * 
 * let nomeObjeto = {
 *      propriedade1: "valor 1",
 *      propriedade2: "valor 2"
 * }
 * 
 */


// exemplo 1
let meuCarro = new Object(); // declara um objeto de novo meuCarro
meuCarro.fabricacao = 'ford';
meuCarro.modelo = 'mustang';
meuCarro.ano = 1969;

console.log(typeof(meuCarro)); // verificando o tipo da variável meuCarro
console.log(meuCarro);

// exemplo 2
let pessoa1 = []; // um objeto vazio
console.log(typeof(pessoa1));
console.log(pessoa1); 

// adicionando propriedade e valor no objeto pessoa1
pessoa1['nome'] = 'Fulano';
pessoa1['sobreNome'] = 'de Tal';
pessoa1['idade'] = 22;
pessoa1['endereço'] = 'Rua 1';
console.log(pessoa1); // listando propriedades e valores do objeto pessoa1


// exemplo 3
let meuObjeto = new Object();

meuObjeto.tipo = 'Sintaxe de ponto';
meuObjeto['data de criação'] = 'String com espaço'; // key do objeto como
                                                    // strings com espaços
meuObjeto[''] = 'Mesmo uma string vazia';

console.log(meuObjeto);
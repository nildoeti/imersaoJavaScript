/*
    getter
    A sintaxe de get associa uma propriedade de um objeto a uma função que será
    chamada quando tal propriedade é acessada.

    Fonte: MDN - url (
        https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/get#removendo_um_getter_usando_o_operador_delete
        )
    
*/



// Definindo um getter em novos objetos em inicializadores de objetos
// O exemplo abaixo irá criar a pseudo-propriedade latest para o objeto obj, 
// que irá retornar o último item do array em log.
// let log = 'teste';
// var obj = {
//     get lastest () { // lasted -> pseudo propriedade para o objeto obj
//         if (log.length == 0) return undefined // testa se o tamanho de log é igual a 0
//                                                 // e retorna undefined
//             return log[log.length - 1] // se o tamanho de log, não for igual a 0,
//                                         //  retornar o tamaho de log - 1
//     }
// }

// console.log(obj.lastest); // NOTA: A tentativa de atribuir um valor a lastest não irá alterá-la


// Para adicionar um getter a um objeto existente a qualquer momento,
// use Object.defineProperty().
// let o = {a:0} // um objeto com propriedade a, e valor 0
// Object.defineProperty(o, 'b', { // Object.defineProperty, é usado para adicionar
//                                 // get em um objeto
//     get: function() { // get chama uma função anônima
//         return this.a + 1; // e que retorna o valor da propriedade a, soma a 1
//     }
// });

// console.log(o.b); // nosso objeto o, é chamado a interagir com a propriedade a
//                     // nova propriedade b, que é um método para nosso objeto


// Exemplo simples para delete
// const Colaborador = {
//     nome: 'Fulano',
//     sobreNome: 'de Tal'
// }

// console.log(Colaborador.nome); // Fulano

// // deletando uma propriedade do objeto
// delete Colaborador.nome;
// console.log(Colaborador.nome); // undefined

// novo exemplo simples para delete de uma propriedade de um objeto
// let Colaborador = {
//     nome: 'Fulano',
//     sobreNome: 'de Tal',
//     cargo: 'Desenvolvedor'
// }

// // retornado true com delete para propriedade de objetos
// console.log(Colaborador); // { nome: 'Fulano', sobreNome: 'de Tal', cargo: 'Desenvolvedor' }
// console.log(delete Colaborador.nome); // true
// console.log(delete Colaborador.sobreNome); // true
// console.log(delete Colaborador.salario); // true


// Propriedades não configuráveis
// Quando uma propriedade é marcada como não configurável, delete não terá
// nenhum efeito e retornará false. No modo estrito, isso gerará um TypeError.

let Colaborador = {} // objeto vazio

Object.defineProperty(Colaborador, 'nome', {
    configurable: false
});
console.log(Colaborador); // {}
console.log(delete Colaborador.nome); // false

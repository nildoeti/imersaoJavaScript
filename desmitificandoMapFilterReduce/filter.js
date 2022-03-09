/*
        Array.prototype.filter()

        O método filter() cria um novo array com todos os elementos que passaram
        no teste implementado pela função fornecida.

        Sintaxe:
        var newArray = arr.filters(callback[thisArg])

        Fonte: MDN (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

*/

// exemplo 1
const pets = [ // um array com uma lista de objetos 
    {
        name: 'rex',
        type: 'dog',
        age: 10

    },
    {
        name: 'bolinha',
        type: 'cat',
        age: 2
    },
    {
        name: 'gup',
        type: 'fish',
        age: 1
    }
];


// verificando se nosso array de objetos está ok
console.log(pets);
/*
    Saida para o exemplo acima
    [
        { name: 'rex', type: 'dog', age: 10 },
        { name: 'bolinha', type: 'cat', age: 2 },
        { name: 'gup', type: 'fish', age: 1 }
    ]
 */

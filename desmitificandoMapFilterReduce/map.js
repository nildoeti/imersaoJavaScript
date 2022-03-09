/*
    Map
    O objeto Map contém pares de chave-valor e lembra a ordem original da
    inserção das chaves. Qualquer valor (objetos e valores primitivos) podem
    ser usados como chave ou valor.


    Sintaxe
    var newArray = arr.map(calback[, thisArg])
    Fonte MDN: url(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map)

*/


const pets = [ // um array com uma lista de objetos 
{
    name: 'rex',
    type: 'dog',
    age: 10,
    weight: 0.22
},
{
    name: 'bolinha',
    type: 'cat',
    age: 2,
    weight: 1
},
{
    name: 'gup',
    type: 'fish',
    age: 1,
    weight: 0.01
},
{
    type: 'horse',
    name: 'pé de pano',
    age: 1,
    weight: 0.01
}
];

// confirmando se tudo esta ok
console.log(pets);

/*
    Saida para pets
    [
      { name: 'rex', type: 'dog', age: 10, weight: 0.22 },
      { name: 'bolinha', type: 'cat', age: 2, weight: 1 },
      { name: 'gup', type: 'fish', age: 1, weight: 0.01 },
      { type: 'horse', name: 'pé de pano', age: 1, weight: 0.01 }
    ]

*/


// exemplo de uso do map para filtrar somente os nomes dos pets
let namePets = pets.map( (pet) => { return pet.name});
console.log(namePets); // [ 'rex', 'bolinha', 'gup', 'pé de pano' ]


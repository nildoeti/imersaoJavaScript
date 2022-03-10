/*
	Array.prototype.reduce()

	O método reduce() executa uma função reducer (fornecida por você) para cada
	elemento do array, resultando num único valor de retorno

	Sintaxe
	var newArray = arr.map(callback[, valorInicial])

	Fonte MDN: url(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce).
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

// exemplo e uso para reduce com um array de objetos para pets
let totalWeight = pets.reduce( (total, pet) => {
    console.log('Total: ', total, pet.name);

    return total + pet.weight;
}, 0); // valor inicial igual a zero
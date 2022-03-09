/*
	Map.prototype.forEach()

	O método forEach() executa a função que foi provida uma vez para cada par
	de chave-valor no objeto Map, na order em que foram inseridos.

	Fonte: MDN: url(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach)
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


// exemplo de aplicação para forEach
let petName = [];

pets.forEach( (pet) => {petName.push(pet.name)});
console.log(petName); // [ 'rex', 'bolinha', 'gup', 'pé de pano' ]


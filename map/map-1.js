/*
	var newArray = arr.map(callback[, thisArg])
*/


const pets = [
	{type: 'dog', name: 'bolinha', age: 15, weight: 30},
	{type: 'gat', name:'mingal', age: 6, weight: 2},
	{type: 'dog', name: 'rex', age: 4, weight: 5},
	{type: 'gat', name: 'marron', age: 2, weight: 1},
	{type: 'fish', name: 'gulp', age: 1, weight: 0.01},
	{type: 'horse', name: 'pé de pano', age: 1, weight: 0.01}
]


const typePets = pets.map((types) => {return types.type})
console.log('Tipo de animais: \n', typePets, '\n');

const namePets = pets.map((names) => {return names.name})
console.log('Nome dos animais:\n ', namePets);

const agePets = pets.map((ages) => {return ages.age})
console.log('idade dos pets:\n', agePets, '\n');

const weightpet = pets.map((weights) => {return weights.weight})
console.log('Altura dos animais:\n', weightpet);

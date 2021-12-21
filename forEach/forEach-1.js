const pets = [
	{type: 'dog', name: 'bolinha', age: 15, weight: 30},
	{type: 'gat', name:'mingal', age: 6, weight: 2},
	{type: 'dog', name: 'rex', age: 4, weight: 5},
	{type: 'gat', name: 'marron', age: 2, weight: 1},
	{type: 'fish', name: 'gulp', age: 1, weight: 0.01},
	{type: 'horse', name: 'pé de pano', age: 1, weight: 0.01}
]


console.log(pets);

const forEachPetNames = []

pets.forEach((pet) => {forEachPetNames.push(pet.name)});
console.log('Nome dos animais da lista\n', forEachPetNames);
console.log();
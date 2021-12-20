const pets = [
	{name: 'rex', type: 'dog', age: 10},
	{name: 'miau', type: 'cat', age: 2},
	{name: 'gulp', type: 'fish', age: 1}
]


// exemplo 1
// const newPets = pets.filter((pet) => {return pet.age < 5});
// console.log('Pets com idade menor que 5:', newPets);


// exemplo 2
const menorIdade = (idade) => {return idade < 5}
const idadeAnimais = pets.filter(({age}) => menorIdade(age))
console.log(idadeAnimais);

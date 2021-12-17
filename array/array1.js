const user = [
	'Guilherme',
	'Pedro',
	'Jennifer'
];

const gender = {
	MAN: Symbol('M'),
	WOMAN: Symbol('W')
}

const persons = [
	
	{
		name: 'Guilherme',
		age: 26,
		gender: gender.MAN
	},

	{
		name: 'Pedro',
		age: 43,
		gender: gender.MAN
	},

	{
		name: 'Jennifer',
		age: 18,
		gender: gender.WOMAN
	}
]

// retorna a quantidade de itens de um array
console.log('Items:', persons.length);

// verifica se é array
console.log('The variable person, is an array? ', Array.isArray(persons));

// interact with array items
persons.forEach((person, index, arr) => {
	console.log(`Nome: ${person.name} index: ${index}, arr: ${arr}`);
});

// filter array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('\nNew list whit man only: ', mens);

// return a new
const personWithCourse = persons.map(person => {
	person.course = 'Introduction to JavaScript';
	return person;
});


console.log('Person with addtion course: ', personWithCourse);

// transform an array into another type
const totalAge = persons.reduce((age, person) => {
	age += person.age;
	return age;
}, 0);

console.log('Sum of people´s age: ', totalAge);

// joining operations
const totalEvenAges = persons
	.filter(person => person.age % 2 === 0)
	.reduce((age, person) => {
		age += person.age;
		return age;
	}, 0);

	console.log('The sum total of ages that have even age: ', totalEvenAges);
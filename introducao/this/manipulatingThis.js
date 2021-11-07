// example 1
const person = {
	name: 'John'
};


const animal = {
	name: 'cat'
};

function getSomething() {
	console.log(this.name);
}

getSomething.call(person); // John
getSomething.call(animal); // cat


// example 2
const myObject = {
	num1: 2,
	num2: 4,
};

function soma(a, b) {
	console.log(this.num1 + this.num2 + a + b);
}

soma.call(myObject, 1, 2); // 9


// example 3

const personTwo = {
	name: 'Emma',
};

const animalTwo = {
	name: 'dog',
};

function getSomething() {
	console.log(this.name);
}
 
getSomething.apply(personTwo); // Emma

getSomething.apply(animalTwo); // dog 


// example 4
const returNames = function () {
	return this.name;
}

let emma = returNames.bind({name: 'Emma'});
let resultaNames = emma();
console.log(resultaNames);
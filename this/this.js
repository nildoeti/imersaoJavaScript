// THIS, is a context reference


// example 1
const person = {
	firstName: 'John',
	lastName: 'Doe',
	id: 1,
	idade: 1,
	fullName: function() {
		return this.firstName + ' ' + this.lastName;
	},
	getId: function() {
		return this.id;
	}
};

let resultOne = person.fullName();
console.log(resultOne);

let resultTwo = person.getId();
console.log(resultTwo);


// exempla 2, out of function
console.log(this); // {}

// example 3, within the function
(
	function() {
		console.log(this);
	}
)();
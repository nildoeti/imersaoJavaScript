
// Set.prototype.has()
// set(), return a bollean value in a set object

// example one
const mySetOne = new Set([1, 2, 3, 4, 5]);

console.log(mySetOne.has(1)); // expected output: true
console.log(mySetOne.has(2)); // expected output: true
console.log(mySetOne.has(6)); // expected output: false


// example two
const mySetTwo = new Set();
mySetTwo.add(('foo'));

console.log(mySetTwo.has('foo')); // expected output: true
console.log(mySetTwo.has('bar')); // expected output: false


// example Three
let mySetThree = new Set(); // Set(0) {}
let myObject = {name: 'Joe'}; // { name: 'Joe' }


mySetThree.add(myObject); // expected output: Set(1) { { name: 'Joe' } }
console.log(mySetThree);

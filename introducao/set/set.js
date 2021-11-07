 // object set

 let mySet = new Set();

 console.log(mySet.add(1)); // Set(1) { 1 }
 console.log(mySet.add(5)); // Set(2) { 1, 5 }
 console.log(mySet.add(5)); // 5 has already been added, so mySet[1, 5]
 console.log(mySet.add('my text')); // Set(3) { 1, 5, 'my text' }

let myVar = {a: 1, b: 2}

console.log(mySet.add(myVar)); // Set(4) { 1, 5, 'my text', { a: 1, b: 2 } }

// Set(5) { 1, 5, 'my text', { a: 1, b: 2 }, { a: 10, b: 20 } }
console.log(mySet.add({a: 10, b: 20})); 

console.log(mySet.has(1)); // true


// set are structures that store unique values 
console.log('\n...\n')
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 2, 4, 0, 5, 2, 4, 0, 5];
console.log(myArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const mySetTwo = new Set(myArray); // 
console.log(mySetTwo); // Set(10) { 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 }

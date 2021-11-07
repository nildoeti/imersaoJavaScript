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

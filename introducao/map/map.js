// MAP


// declaration
const myMap = new Map()
console.log(myMap); // Map(0) {}


// DEFINITIONS
let resultOne = myMap.set('apple', 'fruit');
console.log(resultOne); // Map(1) { 'apple' => 'fruit' }
console.log(myMap.get('apple')); // fruit

// 
console.log('\n...\n')

const map1 = new Map();
map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1); // Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }
console.log(map1.get('a')); // 1
console.log(map1.size); // 3
console.log(map1.delete('b')); // true
console.log(map1); // Map(2) { 'a' => 1, 'c' => 3 }
console.log(map1.size); // 2

// Setting properties on object also works on Map objects 
const map2 = new Map();

map2['text1'] = 'text1';
map2['text2'] = 'text2';

console.log(map2); // Map(0) { text1: 'text1', text2: 'text2' }

console.log(map2.has('text1'));	// false
console.log(map2.has('text3')); // false
console.log(map2.delete('text1')); // false
console.log(map2); // Map(0) { text1: 'text1', text2: 'text2' }
console.log(map2.length); // undefined

const copyMap2 = map2;
console.log(copyMap2.length); // undefined

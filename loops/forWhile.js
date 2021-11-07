// FOR: looping withing interactive elements (arrays, strings)


// example 1
function multiplyByTwo(arr) {
	let multiplied = [];

	for (let i = 0; i < arr.length; i++) {
		multiplied.push(arr[i] * 2);
	}

	return multiplied;
}

const myNumbers = [2, 20, 6, 88, -6, 79, -876];

console.log(multiplyByTwo(myNumbers));


// example 2
function forInExample(obj) {
	for (prop in obj) {
		console.log(prop);
	}
}

const myObject = {
	name: 'John',
	age: 90,
	city: 'Salvador'
}

forInExample(myObject)


// example 3
function forInExampleTwo(obj) {
	for (prop in obj) {
		console.log(obj[prop]);
	}
}

const myObjectTwo = {
	name: 'John',
	age: 900,
	city: 'Salvador'
}


forInExampleTwo(myObjectTwo);



// exa,ple 4  FOR of

function logLatters(words) {
	for (latter of words) {
		console.log(latter);
	}
}

const word = 'fruit';
logLatters(word);



// exa,ple 5  FOR of

function logNumbers (nums) {
	for (num of nums) {
		console.log(num)
	}
}

const nums = [32, 89, 00, 22, 0];
logLatters(nums);
 


// WHILE  

function exampleWhile() {
	let num = 0;

	while (num <= 5) {
		console.log(num);
		num++;
	}
}

exampleWhile();


// DO WHILE

function exampleDoWhile() {
	let num = 0;

	do {
		console.log(num);
		num++;
	} while(num <= 5)
}

exampleWhile();

function exampleDoWhileTwo() {
	let num = 6;

	do {
		console.log(num);
		num++;
	} while(num <= 5)
}

exampleDoWhileTwo();


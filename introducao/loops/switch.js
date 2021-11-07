// switch

function getAnimal(id) {
	switch(id) {
		case 1:
			return 'dog';
		case 2:
			return 'cat';
		case 3:
			return 'bird';
		case 4:
			return 'fish';
	}
}

let resultOne = getAnimal(1);
console.log(resultOne);

let resultTwo = getAnimal(2);
console.log(resultTwo);


let resultThree = getAnimal("");
console.log(resultThree); // undefined

let resultFour = getAnimal("1");
console.log(resultFour); // undefined

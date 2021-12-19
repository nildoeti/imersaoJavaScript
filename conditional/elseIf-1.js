const array = [2, 3, 4, 5, 6, 8, 10, 15];

// console.log('else if:');
// array.forEach(item => {
// 	if (item % 2 === 0) {
// 		console.log(`${item} é divisil por 2`);
// 	} else if (item % 3 === 0) {
// 		console.log(`${item} é divisil por 3`);
// 	} else if (item % 4 === 0) {
// 		console.log(`${item} é divisil por 4`);
// 	} else if (item % 5 === 0) {
// 		console.log(`${item} é divisil por 5`);
// 	}
// });

// console.log('\nif');

array.forEach(item => {
	if (item %2 === 0) {
		console.log(`${item} é divisível por 2`);
	} if (item % 3 === 0) {
		console.log(`${item} é divisível por 3`);
	} if (item % 5 === 0) {
		console.log(`${item} é divisível por 5`);
	}
});
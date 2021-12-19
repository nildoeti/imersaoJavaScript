// break
console.log('Exemplo de uso do break');

let index = 0;

while (true) {
	index++;

	if (index > 2) {
		break;
	}

	console.log(index);
}



// continue
console.log('Exemplo de uso do continue');
const myArray = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < myArray.length; i++) {
	let element = myArray[i];

	if (element % 2 === 0) {
		continue; // omite a saida para números com resto 0 se divisível por 2
	}
	console.log(element); // 1, 3, 5
}

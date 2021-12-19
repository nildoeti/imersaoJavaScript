let array = [3, 5, 7];
array.foo = 'olá';

for (let i in array) { // executa a posição de cada valor na array
						// foo, não faz parte da array, mas é exibido seu valor
	console.log(i); // 0, 1, 2, foo
}


for (let x of array) { // executa os valores da array
	console.log(x); // 3, 5, 7
}

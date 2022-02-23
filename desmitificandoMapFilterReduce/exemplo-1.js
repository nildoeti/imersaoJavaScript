// revendo laço for

var arr = [2, 3, 4, 5, 6, 7, 8]; // array populado
var models = []; // array não populado

for (var i = 0; i < arr.length; i++) {
	if (arr.indexOf(arr[i]) === i) {
	/*
		O método indexOf() retorna o primeiro índice em que o elemento pode ser
		encontrado no array, retorna -1 caso o mesmo não esteja presente.
		Fonte MDN:
		url(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
	*/
		models.push(arr[i]);
	}
}
console.log(models);
console.log(arr.indexOf(2)); // 0
console.log(arr.indexOf(3)) ; // 1

// com filter
var novoArr = arr.filter(function(elemento, i, arr){
	// O método filter() cria um novo array com todos os elementos que passaram
	// no teste implementado pela função fornecida.
	return arr.indexOf(elemento) === i;
});

console.log(novoArr);


// Exemplo: Filtrando todos os valores pequenos
// Fonte MDN: url(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/Filter)
function isBigEnough(value) {
	return value > 20;
}

var filtered = [12, 23, 45, 0, 7, 55].filter(isBigEnough); //
console.log(filtered); // [ 23, 45, 55 ]



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


// Exemplo: Filtrando entradas inválidas para JSON
// O exemplo a seguir usa filter() para criar um JSON filtrado com todos seus
// elementos diferentes de zero, e id numérico.
var arr2 = [
	{id: 15},
	{id: -1},
	{id: 0},
	{id: 3},
	{id: 12.2},
	{},
	{id: null},
	{id: NaN},
	{id: 'undefined'}
];

var invalidEntries = 0;

function filterById (obj) {
	if ('id' in obj && typeof(obj.id) === 'number' && !isNaN(obj.id)) {
		return true;
	} else {
		invalidEntries++;
		return false;
	}
}

var arrById = arr2.filter(filterById);

// Number of Invalid Entries =  [ { id: 15 }, { id: -1 }, { id: 0 }, { id: 3 }, { id: 12.2 } ]
console.log('Number of Invalid Entries = ', arrById); 


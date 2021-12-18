// in - something in somethingitems

// arrays
let arvore = new Array('pau-brasil', 'loureiro', 'cedro', 'carvalho', 'sicómoro');
console.log(0 in arvore); // return true
console.log(1 in arvore); // return true
console.log(2 in arvore); // return true
console.log(3 in arvore); // return true
console.log(4 in arvore); // return true
console.log(5 in arvore); // return false

console.log('loureiro' in arvore); // false, pois não foi especificado o índice
console.log('length' in arvore); // true pois length é uma propriedade de Array


// objects predefinidos
console.log('PI' in Math); // true
console.log('max' in Math); // true
console.log('eu' in Math); // false


// objects personalizados
let meuCarro = {marca: 'Jack', modelo: 'J3 Turin', ano: 2014}
console.log('marca' in meuCarro); // true
console.log('ano' in meuCarro); // true


// instaceof
var date = new Date();
if (date instanceof Date) {
	return date.toLocaleTimeString('pt-BR');
}

console.log(date)

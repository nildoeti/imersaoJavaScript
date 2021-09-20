// String, Number, Undefined, Const, Null, Boolean, Symbol

const idade = 99; // Número inteiro tipo de dados primitivos
const pais = 'Brasil'; // String é um tipo de dados primitivo
const altura = 1.78; // Números reais é um tipo de dados primitivos

 // variáveis que não tem seu valor atribuido são do tipo UNDEFINE
 // não pode ser do tipo const
let curso; // undefined -> pois não aponta para local nenhum da memória
// variável com valor definido como do tipo null
const faculdade = null; // NULO -> pois não aponta para local nenhum da memória

// Valores boleanos são todos do tipo lógicos
const dia = true; // tipo boleano true
const noite = false; // // tipo boleano false

// saber o tipo de uma variável com a função typeof()
console.log(typeof(dia)) // boolean
console.log(typeof(pais)) // string
console.log(typeof(faculdade)) // object

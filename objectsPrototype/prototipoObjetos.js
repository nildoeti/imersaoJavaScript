/*
    Protótipos de objetos
    Protótipos são o mecanismo pelo qual objetos JavaScript herdam recursos uns
    dos outros. Neste artigo, explicamos como as cadeias de protótipos
    funcionam e observamos como a propriedade prototype pode ser usada para
    adicionar métodos aos construtores existentes.


    Fonte MDN url(https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/Object_prototypes)
*/

// Noções básicas sobre objetos de protótipo
// Neste exemplo, definimos uma função construtora, assim:
function Person(first, last, age, gender, interests) {
    // definição de propriedades e métodos
    this.first = first;
    this.last = last;
    this.age = age;
    this.interests = interests;
}

// Nós criamos então uma instância de objeto como esta:
let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

console.log(person1);
/*
Person {
  first: 'Bob',
  last: 'Smith',
  age: 32,
  interests: [ 'music', 'skiing' ]
}
*/ 


console.log(Person.prototype); // {}


console.log(Object.prototype); // [Object: null prototype] {}   


// exemplos de herança de cadeia de protótipos
let myString = 'This is my string';
// myString.slice(0, 3); // exemplo de métodos disponílve 
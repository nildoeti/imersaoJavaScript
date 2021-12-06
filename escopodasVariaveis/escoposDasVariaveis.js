var myVariable = 'global';
var myOtherVariable = 'global';

function myFunction() {
    var myVariable = 'local';
    return myVariable;
}

function myOtherFunction() {
    myOtherVariable = 'local';
    return myOtherVariable;
}
console.log(myVariable); // global, pois referencia uma variável global
console.log(myFunction()); // local, pois referencia uma variável local da função
console.log(myOtherVariable); // global,
console.log(myOtherFunction()); // local
console.log(myOtherVariable); // local
